import React, { useReducer } from 'react';
import { useForm } from 'react-hook-form';
import '../theme/global.css';
import './FilterPageStyle.css';
import MenuSelect from '../components/Menu/MenuComponent';
import FilterMultipleSelections from '../components/Filter/FilterComponent';
import Buttons from '../components/Buttons/ButtonsComponent';

interface State {
    selectedOptions: OptionType[];
}

interface Action {
    type: string;
    payload?: any;
}

interface OptionType {
    label: string;
    value: string;
}

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
        default:
            return state;
    }
};

const FilterPage: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const [state, dispatch] = useReducer(reducer, initialState);

    const options: OptionType[] = [
        { value: 'inputs', label: 'Entradas' },
        { value: 'outputs', label: 'Saídas' },
    ];

    const handleMultiSelectChange = (selectedOptions: OptionType[]) => {
        dispatch({ type: 'SET_SELECTED_OPTIONS', payload: selectedOptions });
        handleFormSubmit(selectedOptions);
    };

    const handleFormSubmit = (data: any) => {
        console.log(data); // Dados do formulário
        console.log(state.selectedOptions); // Filtros selecionados
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="filter-container">
                <FilterMultipleSelections
                    options={options}
                    onChange={handleMultiSelectChange}
                />
                <MenuSelect />
            </div>
            <div className="btns-container">
                <Buttons />
            </div>
            {state.selectedOptions.length > 0 ? (
                <div>
                    <p>Opções selecionadas: {JSON.stringify(state.selectedOptions)}</p>
                    <div className="select"></div>
                </div>
            ) : (
                <></>
            )}
        </form>
    );
};

export default FilterPage;
