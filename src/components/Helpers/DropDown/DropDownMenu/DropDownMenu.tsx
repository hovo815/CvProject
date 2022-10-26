import React, {memo} from "react";
import {Link} from "react-router-dom";
import "./dropdownmenu.scss"
import {useAppDispatch} from "../../../../hooks/useApp";
import {unSetUser} from "../../../../features/userSlice/userSlice";
import {Storage} from  "../../../../services/storage"
interface dropDownMenuProps {
    boolUser: boolean
    role?:string
}

const DropDownMenu: React.FC<dropDownMenuProps> = memo(({boolUser, role}) => {
    const appDispatch = useAppDispatch()
    const logOutClick = () => {
        appDispatch(unSetUser)
        Storage.removeDataInLocalStorage(`authToken`)
        window.location.reload()
    }
    console.log(boolUser);
    return (
        <div className="drop-down-menu">
            <Link className='drop-down-menu-links' to='/templates'>Templates</Link>
            <Link className='drop-down-menu-links' to='/pricing'>Pricing</Link>
            <Link className='drop-down-menu-links' to='/about'>About</Link>
            <Link className='drop-down-menu-links' to='/contact'>Contact</Link>
            {boolUser ?
                <>
                    <Link className='drop-down-menu-links' to={ role === "admin" ? "/admin" : "/user" }>Account</Link>
                    <button onClick={logOutClick} className='drop-down-menu-links'>Log Out</button>
                </> :
                null
            }
        </div>
    );
});


export default DropDownMenu;