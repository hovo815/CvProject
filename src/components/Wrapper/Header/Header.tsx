import React from 'react';
import Logo from "../../Logo/Logo";
import "./header.scss"
import DropDown from "../../Helpers/DropDown/DropDown";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useApp";

const Header:React.FC = () => {
    const user = useAppSelector(state => state.user.user);

    return user ? (
        <header className="header">
            <Link to='/'>
                <Logo/>
            </Link>
            <div className="header-buttons">
                <Link className="get-started-link" to='/templates'>
                    <button className='header-button second'>Create Card</button>
                </Link>
                <DropDown />
            </div>
        </header>
    ): (
        <header className="header">
            <Link to='/'>
                <Logo/>
            </Link>
            <div className="header-buttons">
                <Link className="get-started-link" to='/sign-in'>
                     <button className='header-button'>Sign in</button>
                </Link>
                <Link className="get-started-link" to='/templates'>
                    <button className='header-button second'>Create Card</button>
                </Link>
                <DropDown/>
            </div>
        </header>
    );
};


export default Header;