import React, {useEffect} from "react";
import Activated from "../Activated/Activated";
import ChangePasswordMui from "./ChangePasswordMui/ChangePasswordMui";
import {userDashboardChange} from "../../../features/userDashboardSlice/userDashboardSlice";
import {useAppDispatch} from "../../../hooks/useApp";
import "./changepassword.scss";

const ChangePassword: React.FC = () => {

    const appDispatch = useAppDispatch()

    useEffect(() => {
        appDispatch(userDashboardChange(false))
    }, [appDispatch])

    return (
        <>
            <div className="change-password">

                        <Activated title1="Premium plan" title2="" />
                        <div className="change-password-change-information-text">
                            <h1 className="change-password-change-information-text-h1">Change Password</h1>
                            <hr className="change-password-change-information-text-hr" />
                            <div className="change-password-change-information-text-mui">
                                <ChangePasswordMui />
                            </div>
                        </div>
            </div>
        </>
    )
}

export default ChangePassword;