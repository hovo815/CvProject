import UserIcon from "../../assets/img/dashboard/user-icon.svg";
import React from "react";
import AdminDropdown from "../../components/AdminDashboard/AdminDropdown/AdminDropdown";
import AdminDataUser from "../../components/AdminDashboard/AdminDataUser/AdminDataUser";
import "./admindashboard.scss";



const AdminDashboard: React.FC = () => {
    return (
        <>
            <div className='admin-page'>
                <div className='admin-page-syinkd'>
                    <h1 className='admin-page-syinkd-h1'>Syinkd</h1>
                    <h3 className='admin-page-syinkd-img'><img src={UserIcon} alt="user" /></h3>
                </div>
                <div className="admin-page-admin-dropdown">
                    <AdminDropdown/>
                    <div>
                        <h1 className="admin-page-admin-dropdown-users">Users</h1>
                    </div>
                    <AdminDataUser/>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard