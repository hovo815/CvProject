import React from 'react';
import UserNavigation from "../../components/UserDashboard/UserNavigation/UserNavigation";
import UserPages from "../../components/UserDashboard/UserPages/UserPages";
import ChangePassword from "../../components/UserDashboard/ChangePassword/ChangePassword";
import GeneralInformation from "../../components/UserDashboard/GeneralInformation/GeneralInformation";
import RemoveAccount from "../../components/UserDashboard/RemoveAccount/RemoveAccount";
import Header from "../../components/Wrapper/Header/Header"
import "./userdashboard.scss"
const UserDashboard = () => {
    const [tabs, setTabs] = React.useState(0)

    const tabulation = () => {
        if (tabs === 0) {
            return <GeneralInformation/>
        }
        if (tabs === 1) {
            return <ChangePassword/>
        }
        if (tabs === 2) {
            return <UserPages/>
        }
        if (tabs === 3) {
            return <RemoveAccount/>
        }
    }
    return (
        <>
            <Header/>
            <div className="user-dashboard-content">
                <UserNavigation setTabs={setTabs}/>
                {tabulation()}
            </div>
        </>
    );
};


export default UserDashboard;