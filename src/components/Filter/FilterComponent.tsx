/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';
import Downshift, { useMultipleSelection } from 'downshift';
import makeAnimated from 'react-select/animated';

import './FilterComponentStyle.css';

interface OptionType {
    label: string;
    value: string;
}

interface MultiSelectProps {
    options: OptionType[];
    onChange: (selectedOptions: OptionType[]) => void;
}

const FilterMultipleSelections: React.FC<MultiSelectProps> = ({ options, onChange }) => {
    const [inputValue, setInputValue] = useState('');
    const {
        getSelectedItemProps,
        getDropdownProps,
        addSelectedItem,
        removeSelectedItem,
        selectedItems,
    } = useMultipleSelection<OptionType>({});

    const animatedComponents = makeAnimated();

    // MOSTRA NA TELA O RESULTADO ESCOLHIDO DO SELECT  
    const handleSelectChange = (newValue: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
        const selectedOptions = Array.from(newValue);
        onChange(selectedOptions);
    };

    const handleRemoveOption = (option: OptionType) => {
        removeSelectedItem(option);
    };

    const selectedOptions = selectedItems.map((selectedItem, index) => (
        <div key={index} {...getSelectedItemProps({ selectedItem })}>
            {selectedItem.label}
            {/* <button onClick={() => handleRemoveOption(selectedItem)}>Remove</button> */}
        </div>
    ));

    return (
        <div className="select-container">
            <label>Tipo:</label>
            <Select
                isMulti
                options={options}
                onChange={handleSelectChange}
                components={{ animatedComponents, IndicatorSeparator: () => null, }}
                {...getDropdownProps()}
                blurInputOnSelect={false}
                closeMenuOnSelect={true}
                inputValue={inputValue}
                isClearable={false}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        boxShadow: "none",
                        border: "none",
                        width: "50vw",
                        background: "#FFFFFF",
                        color: "#5d6572",
                        fontWeight: 'bold',
                        lineHeight: 2,
                        maxWidth: '20vw',
                    }),
                    menu: (provided, state) => ({
                        ...provided,
                        border: "none",
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? "#f0f2f5" : "transparent",
                        color: "#414447",
                        border: "none"
                    }),
                    multiValue: provided => ({
                        ...provided,
                        backgroundColor: "#f7f7f7",
                        color: "#414447",
                        border: "none",
                    }),
                }}
                placeholder={false}
            />
            {selectedOptions}
        </div>
    );
};

export default FilterMultipleSelections;
