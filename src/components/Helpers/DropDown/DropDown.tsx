import React, {memo} from 'react';
import DropDownIcon from '../../../assets/img/icons/dropdownicon.svg'
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import {Storage} from "../../../services/storage";
import "./dropdown.scss"
import {useAppSelector} from "../../../hooks/useApp";

interface state {
    open: Boolean
}

const DropDown: React.FC = memo(() => {
    const [isOpen, setIsOpen] = React.useState<state>({
        open: false
    })
    const handleClick = (): void => {
        setIsOpen({...isOpen, open: !isOpen.open})
    }
    const user = Storage.getDataInLocalStorageByName("authToken");
    const role = useAppSelector(state => state.user.user)
    const boolUser = !!user
    console.log(user);
    return (
        <>
            <button className="drop-down-button" onClick={handleClick}>
                <img src={DropDownIcon} alt="drop down icon"/>
            </button>
            {isOpen.open ? <DropDownMenu role={role?.role} boolUser={boolUser}/> : null}
        </>
    );
});


export default DropDown;