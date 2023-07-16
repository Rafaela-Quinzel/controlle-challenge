import React, { useState } from "react";
import Select, { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();


// const options = [
//   { value: 'inputs', label: "Entradas" },
//   { value: "outputs", label: "Saídas" },
// ];

const MultiSelect = (props: any) => {
console.log('PROPS: ', props);  
    //const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string; }>>([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

const options = props.items.filter((option: any) => option.value)    


  const handleSelect = () => {
    console.log(selectedOptions);
  };

  return (
    // <>
      <Select
        //defaultValue={[]}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={(item) => {
          console.log('>> ITEM >> ', item) 
          setSelectedOptions((prevOptions: never[]) => [...prevOptions, ...item] as never[])
        }}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />

    //   <button onClick={handleSelect}>Imprimir itens</button>
    // </>
  );
};

export default MultiSelect;