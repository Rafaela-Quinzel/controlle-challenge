// React
import React, { useState } from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
// Downshift
import { useMultipleSelection } from 'downshift';
// Interfaces
import { OptionType, MultiSelectProps } from '../../interfaces/filters';


const FilterMultipleSelections: React.FC<MultiSelectProps> = ({ options, onChange, removeOption }) => {
    const [inputValue,] = useState('');
    const animatedComponents = makeAnimated();
    const {
        getSelectedItemProps,
        getDropdownProps,
        //addSelectedItem,
        removeSelectedItem,
        selectedItems,
        //setSelectedItems
    } = useMultipleSelection<OptionType>({});

 
    const handleSelectChange = (newValue: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
        const selectedOptions = Array.from(newValue);
        onChange(selectedOptions);

        if (actionMeta.action === 'remove-value') {
            selectedItems.forEach((item) => {
                removeSelectedItem(item);
            });
        }
    };

    const selectedOptions = selectedItems.map((selectedItem, index) => (
        <div key={index} {...getSelectedItemProps({ selectedItem })}>
            {selectedItem.label}
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
