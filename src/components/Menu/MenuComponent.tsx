//React
import React, { useState } from 'react';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
//Style
import './MenuComponentStyle.css';
// Mock
import { mockListBank } from '../../services/banksList';

const MenuSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [, setSelectedSubOption] = useState<string | null>(null);
  const [textLabel, setTextLabel] = useState<string | null>('');

  const textStyle = selectedOption ? 'btn-menu text' : 'btn-menu';

  const options = [
    { value: 'account', label: 'Conta' },
    { value: 'credit_card', label: 'Cartão de crédito' },
    { value: 'cost_center', label: 'Centro de custo' },
    { value: 'user', label: 'Usuário' },
    { value: 'value', label: 'Valor' },
    { value: 'tags', label: 'Tags' },
  ];

  const handleOptionSelect = (option: { value?: string; label: string }) => {
    setSelectedOption(option.label);
  };

  const handleSubOptionSelect = (subOption: { value?: string; label: string }, options: any) => {
    setSelectedSubOption(subOption.label);
    handleOptionSelect(subOption);
    setTextLabel('Conta');
  };

  return (
    <div className='menu-container'>
      {options.find((option) => option.value === 'account') &&
        <label className='text-label'>{textLabel}</label>
      }
      <Menu menuButton={
        <MenuButton className={textStyle}>
          {selectedOption || '+'}
        </MenuButton>}
        transition>
        {options
          .filter((option) => option.value !== 'account')
          .map((option, index) => (
            <MenuItem
              key={`${option.value}-${index}`}
              onClick={() => handleOptionSelect(option)}
              className="menu-options-text"
              value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        {options.find((option) => option.value === 'account') && (
          <SubMenu label="Conta">
            {mockListBank.map((subOption, index) => (
              <MenuItem
                key={`${subOption.value}-${index}`}
                value={subOption.value}
                onClick={() => handleSubOptionSelect(subOption, options)}>
                {subOption.label}
              </MenuItem>
            ))}
          </SubMenu>
        )}
      </Menu>
    </div>
  );
};

export default MenuSelect;
