import Downshift from 'downshift';
import React, { useState, useEffect } from 'react';
import { Filters } from '../../interfaces/filters';
import '../../theme/global.css';
import { getFilterResults } from '../../services/filterDB';
import MultiSelect from './select';




const Filter = () => {
    const [selectedFilters, setSelectedFilters] = useState<Filters>({
        type: '',
        account: '',
        category: '',
        tags: [],
    });
    const [data, setData] = useState([] as any[]);

    const types = [
        { type: 'inputs', value: "Entradas" },
        { type: "outputs", value: "Saídas" },
        { type: "inputs_outputs", value: "Entradas, Saídas" }
    ]

    useEffect(() => {
        getFilterResults(setData);
    }, []);

    const handleFilterChange = (filterName: keyof Filters, value: string) => {
        console.log('filterName: ', filterName)
        console.log('value: ', value)
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const handleTagChange = (tag: string, checked: boolean) => {
        setSelectedFilters((prevFilters) => {
            const { tags } = prevFilters;
            if (checked) {
                return {
                    ...prevFilters,
                    tags: [...tags, tag],
                };
            }
            return {
                ...prevFilters,
                tags: tags.filter((t) => t !== tag),
            };
        });
    };

    const handleResetFilters = () => {
        setSelectedFilters({
            type: '',
            account: '',
            category: '',
            tags: [],
        });
    };

    const handleSaveFilter = () => {
        // Lógica para salvar os filtros
    };

    console.log('<< DATA >> ', data)

    const getSelected = 
        types.map(item => { 
console.log('ITEM: ', item)            
            return item})
        // types.map((item, index) => {

        // })
    


    return (
        <div>
            {/* <div>
                <h2>Tipo:</h2>
                <select
                    value={selectedFilters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                    <option value="">Selecione</option>
                    <option value="inputs">Entradas</option>
                    <option value="outputs">Saídas</option>
                </select>
            </div> */}

            <div>
                {/* <h2>Filtro por Conta bancária/cartão de crédito:</h2> */}
                <h2>Tipo:</h2>

                <Downshift<string | null>
                    // onChange={(selectedItem) =>
                    //     handleFilterChange('type', selectedItem || '')
                    // }

                    itemToString={(item) => (item ? item.toString() : '')}
                >
                    {({ getInputProps,
                        getItemProps,
                        getMenuProps,
                        getLabelProps,
                        getToggleButtonProps,
                        inputValue,
                        highlightedIndex,
                        selectedItem,
                        isOpen,
                    }) => (
                        <div>
                            <div>
                                <label {...getLabelProps()}>Tipo</label>
                                <MultiSelect items={getSelected}/>
                                {/* {types.map((item, index) => (
                                    <MultiSelect key={`${item.type}${index}`}
                                        {...getInputProps({
                                            item: item.value,
                                            index,
                                        })} />
                                    // <li
                                    //     key={`${item.type}${index}`}
                                    //     {...getItemProps({
                                    //         item: item.value,
                                    //         index,
                                    //     })}
                                    // >
                                    //     <span className="text-sm text-gray-700">
                                    //         {item.value}
                                    //     </span>
                                    // </li>
                                ))
                                } */}
                                {/* <MultiSelect key={types} {...getInputProps({
                                    isOpen,
                                    selectedItem                                    
                                })} {...getToggleButtonProps()}/> */}

                            </div>
                            {/* <div>
                                <label {...getLabelProps()}>Tipo</label>
                                <input {...getInputProps({
                                    isOpen,
                                    placeholder: 'Find a Star Wars character',
                                })} />
                                <button
                                    aria-label={'Down Arrow'}
                                    className="px-2"
                                    {...getToggleButtonProps()}
                                >
                                    {isOpen ? <>&#8593;</> : <>&#8595;</>}
                                </button>
                            </div> */}
                            <ul
                                className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${!(isOpen && types && types.length) && 'hidden'
                                    }`}
                                {...getMenuProps()}
                            >
                                {isOpen
                                    ? types.map((item, index) => (
                                        <li
                                            key={`${item.type}${index}`}
                                            {...getItemProps({
                                                item: item.value,
                                                index,
                                            })}
                                        >
                                            <span className="text-sm text-gray-700">
                                                {item.value}
                                            </span>
                                        </li>
                                    ))
                                    : null}
                            </ul>
                        </div>
                        // <div>
                        //     <div>
                        //         <label {...getLabelProps()}>Tipo</label>
                        //         <input {...getInputProps()} />
                        //         <button
                        //             aria-label={'Down Arrow'}
                        //             className="px-2"
                        //             {...getToggleButtonProps()}
                        //         >
                        //             {isOpen ? <>&#8593;</> : <>&#8595;</>}
                        //         </button>
                        //     </div>
                        //     <ul
                        //         className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${!(isOpen && types && types.length) && 'hidden'
                        //             }`}
                        //         {...getMenuProps()}
                        //     >
                        //         {isOpen
                        //             ? types.map((item, index) => (
                        //                 <li
                        //                     key={`${item.type}${index}`}
                        //                     {...getItemProps({
                        //                         item: item.value,
                        //                         index,
                        //                     })}
                        //                 >
                        //                     <span className="text-sm text-gray-700">
                        //                         {item.value}
                        //                     </span>
                        //                 </li>
                        //             ))
                        //             : null}
                        //     </ul>
                        // </div>
                    )}
                </Downshift>
            </div>

            <div>
                <button onClick={handleResetFilters}>Zerar filtros</button>
                <button onClick={handleSaveFilter}>Salvar filtro</button>
            </div>

            <div>
                <h2>Resultado do filtro:</h2>
                <pre>{JSON.stringify(selectedFilters, null, 2)}</pre>
            </div>
        </div>
    );
};

export default Filter;
