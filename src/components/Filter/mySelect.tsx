import React from 'react';
import Select, { components } from 'react-select';
import { useSelect } from 'downshift';
import makeAnimated from "react-select/animated";


const options = [
  { value: 'inputs', label: "Entradas" },
  { value: "outputs", label: "Saídas" },
];

const animatedComponents = makeAnimated();


const MySelect = () => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items: options,
    onSelectedItemChange: ({ selectedItem }) => {
      console.log(selectedItem);
    },
  });

  return (
    <Select
    isMulti 
      isOpen={isOpen}
      //onToggle={getToggleButtonProps().onClick}
      options={options}
      components={animatedComponents}  
      // components={{
      //   ...components,
      //   DropdownIndicator: () => null, // remove o indicador de seta
      // }}
      //isClearable
      //isSearchable
      {...getToggleButtonProps()}
      //className="select"
      isClearable={false}
      isSearchable={true}
      isDisabled={false}
      isLoading={false}
      isRtl={false}
      closeMenuOnSelect={true}      
    >
    {/* <Select
    isMulti    
      isOpen={isOpen}
      //onToggle={getToggleButtonProps().onClick}
      options={options}
      components     
      // components={{
      //   ...components,
      //   DropdownIndicator: () => null, // remove o indicador de seta
      // }}
      //isClearable
      //isSearchable
      {...getToggleButtonProps()}
      //className="select"
      isClearable={true}
      isSearchable={true}
      isDisabled={false}
      isLoading={false}
      isRtl={false}
      closeMenuOnSelect={false}      
    > */}
      {isOpen && (
        <div {...getMenuProps()}>
          {options.map((option, index) => (
            <div
              key={option.value}
              {...getItemProps({ item: option, index })}
              style={{
                backgroundColor:
                  selectedItem === option ? 'lightgray' : 'white',
                fontWeight: selectedItem === option ? 'bold' : 'normal',
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </Select>
  );
};

export default MySelect;


