import Downshift from 'downshift';
import React, { useState } from 'react';
import { Filters } from '../../interfaces/filters';



const Filter = () => {
    const [selectedFilters, setSelectedFilters] = useState<Filters>({
        type: '',
        account: '',
        category: '',
        tags: [],
    });

    const handleFilterChange = (filterName: keyof Filters, value: string) => {
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

    return (
        <div>
            <div>
                <h2>Filtro por Tipo:</h2>
                <select
                    value={selectedFilters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                    <option value="">Selecione</option>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                </select>
            </div>

            <div>
                <h2>Filtro por Conta bancária/cartão de crédito:</h2>
                <Downshift<string | null>
                    onChange={(selectedItem) =>
                        handleFilterChange('account', selectedItem || '')
                    }
                    itemToString={(item) => (item ? item.toString() : '')}
                >
                    {({ getRootProps, getMenuProps, getInputProps }) => (
                        <div>
                            <input {...getInputProps()} />
                            <ul {...getMenuProps()}>
                                {/* Renderização das opções do filtro */}
                            </ul>
                        </div>
                    )}
                </Downshift>
            </div>

            <div>
                <h2>Filtro por Categoria:</h2>
                <input
                    type="text"
                    value={selectedFilters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                />
            </div>

            <div>
                <h2>Filtro por Tags:</h2>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedFilters.tags.includes('tag1')}
                            onChange={(e) => handleTagChange('tag1', e.target.checked)}
                        />
                        Tag 1
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedFilters.tags.includes('tag2')}
                            onChange={(e) => handleTagChange('tag2', e.target.checked)}
                        />
                        Tag 2
                    </label>
                </div>
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
