import React from 'react';
import './ButtonsComponentStyle.css';
//import { ButtonTypes } from '../../interfaces/buttons'


interface IProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
}



const Buttons: React.FC = () => {

    return (
        <div className="btn-container">
            <button>Zerar filtros</button>
            <button>Salvar filtro</button>
        </div>
    );
}
// const Buttons = ({ text, type, ...otherProps }: IProps): any => (
//     <button type={type} {...otherProps}>
//         {text}
//     </button>
// );

export default Buttons;