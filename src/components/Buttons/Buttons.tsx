import React from 'react';
//import { ButtonTypes } from '../../interfaces/buttons'


interface IProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
}


const Buttons = ({ text, type, ...otherProps }: IProps): any => (
    <button type={type} {...otherProps}>
        {text}
    </button>
);

export default Buttons;