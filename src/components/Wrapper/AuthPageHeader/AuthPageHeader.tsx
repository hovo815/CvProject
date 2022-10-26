import React, {useEffect} from 'react';
import "./authpageheader.scss"
import Logo from "../../Logo/Logo";
import {Link} from "react-router-dom";
import AXIOS from "../../../services/axios";

const AuthPageHeader:React.FC = () => {

    return (
        <header className="auth-page-header">
            <Link to='/'>
                <Logo/>
            </Link>
        </header>
    );
};


export default AuthPageHeader;