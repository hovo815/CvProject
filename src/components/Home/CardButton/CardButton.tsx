import React from 'react';
import "./cardbutton.scss"
interface CardButtonProps {
    text : string
}

const CardButton:React.FC<CardButtonProps> = ({text}) => {
    return (
        <>
            <button className="card-btn">{text}</button>
        </>
    );
};


export default CardButton;