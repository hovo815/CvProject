import React from "react";
import AdminDropdownIcon from "../../../assets/img/dashboard/admin-dropdown.svg";
import "./admindropdown.scss";


const AdminDropdown: React.FC = () => {
    return (
        <div className='admin-dropdown'>
            <div className='admin-dropdown-container'>
                <button className="admin-dropdown-container-button"><img src={AdminDropdownIcon} alt="admin dropdown"/></button>
            </div>
        </div>
    )
}

export default AdminDropdown;