import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../theme/global.css';
import './FilterPageStyle.css';
import MenuSelect from '../components/Menu/MenuComponent';
import FilterMultipleSelections from '../components/Filter/FilterComponent';
import Buttons from '../components/Buttons/ButtonsComponent';


const FilterPage: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

    interface OptionType {
        label: string;
        value: string;
    }

    const options = [
        { value: 'inputs', label: "Entradas" },
        { value: "outputs", label: "Saídas" },
    ];


    const handleMultiSelectChange = (selectedOptions: OptionType[]) => {
        console.log(selectedOptions)
        setSelectedOptions(selectedOptions);
    };

    const handleFormSubmit = (data: any) => {
        console.log(data); // Dados do formulário
        console.log(selectedOptions); // Filtros selecionados
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="filter-container">
                <FilterMultipleSelections
                    options={options}
                    onChange={handleMultiSelectChange} />
                <MenuSelect />
            </div>
            <div className="btns-container">
                <Buttons />
            </div>
            {selectedOptions.length > 0 ?
                <div>
                    <p>Opções selecionadas: {JSON.stringify(selectedOptions)}</p>
                    <div className="select"></div>

                </div>
                : <></>
            }
        </form>
    );
};

export default FilterPage;