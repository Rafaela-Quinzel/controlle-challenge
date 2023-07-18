// React
import React, { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
// Style
import '../theme/global.css';
import './FilterPageStyle.css';
// Components
import MenuSelect from '../components/Menu/MenuComponent';
import FilterMultipleSelections from '../components/Filter/FilterComponent';
// DB
import { getFilterResults } from '../services/filterDB';
// Interfaces
import { OptionType, State, Action } from '../interfaces/filters';


const initialState: State = {
    selectedOptions: [],
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_SELECTED_OPTIONS':
            return {
                ...state,
                selectedOptions: action.payload,
            };
        case 'RESET_DATA':
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

const FilterPage: React.FC = () => {
    const [data, setData] = useState([] as any[]);
    const [newData, setNewData] = useState([] as any[]);
    const { handleSubmit } = useForm();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [removeOption, setRemoveOption] = useState(false);

    const options: OptionType[] = [
        { value: 'inputs', label: 'Entradas' },
        { value: 'outputs', label: 'Saídas' },
    ];

    useEffect(() => {
        getFilterResults(setData);
    }, []);

    const handleMultiSelectChange = (selectedOptions: OptionType[]) => {
        dispatch({ type: 'SET_SELECTED_OPTIONS', payload: selectedOptions });
        filterOptionsData(selectedOptions);
    };

    const filterOptionsData = (selectionData: any) => {
        let result: any[] = [];

        selectionData.filter((option: any) => {
            return data.forEach((item: any) => {
                if (option.label === item.type) result.push(item);
            });
        });
        handleFormSubmit(result);

        return result;
    }

    const handleFormSubmit = (data: any) => {
        setNewData(data);
    };

    const handleButtonClick = (buttonLabel: string) => {
        if (buttonLabel === 'reset') {
            dispatch({ type: 'RESET_DATA', payload: [] });
            setRemoveOption(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="filter-container">
                    <FilterMultipleSelections
                        options={options}
                        onChange={handleMultiSelectChange}
                        removeOption={removeOption}
                    />
                    <MenuSelect />
                </div>
                {state.selectedOptions.length > 0 ? (
                    <div className="btns-container">
                        <div className="btn-container">
                            <button onClick={() => handleButtonClick('reset')}>Zerar filtros</button>
                            <button type="submit" onClick={() => handleButtonClick('save')}>Salvar filtro</button>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </form>
            <div>
                {state.selectedOptions.length > 0 ? (
                    <div className="text-container">
                        <p>Opções selecionadas:</p>
                        <p>{JSON.stringify(state.selectedOptions)}</p>
                        <p>Resultados dos filtros:</p>
                        {Array.isArray(newData) && newData.map((item, index) => (
                            <div key={index}>
                                <p>Tipo: {item.type}</p>
                                <p>Conta: {item.account}</p>
                                <p>Cartão de crédito: {item.credit_card}</p>
                                <p>Centro de custo: {item.cost_center}</p>
                                <p>Usuário: {item.user}</p>
                                <p>Valor: {item.value}</p>
                                <p>Tags: {JSON.stringify(item.tags)}</p>
                            </div>
                        ))}

                    </div>
                ) : (
                    <></>
                )}
                {/* <p>{JSON.stringify(newData)}</p> */}
            </div>
        </div>
    );
};

export default FilterPage;
