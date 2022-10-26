import React from 'react';
import changeButton from "../../../../../assets/img/modal/change-button.svg"
import "./changebutton.scss";


const ChangeButton: React.FC = () =>  {
    return (
        <div>
            <button className='change-button'><img src={changeButton} alt="change button"/></button>
        </div>
    )
}

export default ChangeButton;