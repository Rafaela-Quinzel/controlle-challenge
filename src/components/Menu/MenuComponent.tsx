import React, { useState } from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import './MenuComponentStyle.css';


const MenuSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const textStyle = selectedOption ? 'btn-menu text' : 'btn-menu';

  const options = [
    { value: 'account', label: "Conta" },
    { value: "credit_card", label: "Cartão de crédito" },
    { value: "cost_center", label: "Centro de custo" },
    { value: "user", label: "Usuário" },
    { value: "value", label: "Valor" },
    { value: "tags", label: "Tags" },
  ];

  const handleOptionSelect = (option: { value?: string; label: any; }) => {
    setSelectedOption(option.label);
  };

  return (
    <Menu menuButton={
      <MenuButton className={textStyle}>{selectedOption || "+"}</MenuButton>
    }
      transition
    >
      {options && options.map(option => (
        <MenuItem
          onClick={() => handleOptionSelect(option)}
          className='menu-options-text'
          key={option.label}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default MenuSelect;