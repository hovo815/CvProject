import React from 'react';
import "./formbutton.scss"
interface FormButtonProps {
    children: React.ReactNode
    click?:any
}

const FormButton:React.FC<FormButtonProps> = ({children,click}) => {
    return (
        <button onClick={click} className="form-button">{children}</button>
    );
};


export default FormButton;