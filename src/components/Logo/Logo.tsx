import React from 'react';
import Logo from '../../assets/img/Logo.png'

const LogoComponent:React.FC = () => {
    return (
            <img className="logo" src={Logo} alt="logo"/>
    );
};


export default LogoComponent;