import React, {useEffect} from "react";
import Activated from "../Activated/Activated"
import GeneralInformationMui from "./GeneralInformationMui/GeneralInformationMui"
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import {userDashboardChange} from "../../../features/userDashboardSlice/userDashboardSlice";
import "./generalinformation.scss";

const GeneralInformation: React.FC = () => {

    const appDispatch = useAppDispatch()

    useEffect(()=>{
        appDispatch(userDashboardChange(false))
    },[appDispatch])

    const email = useAppSelector(state => state.user.user.email)

    return (
        <>
            <div className="general-information">
                    <Activated title1="Premium plan" title2="" />
                    <div className="general-information-information-text">
                        <h1 className="general-information-information-text-h1">General Information</h1>
                        <hr className="general-information-information-text-hr" />
                        <div className="general-information-information-text-container">
                            <div className="general-information-information-text-container-text">
                                <p className="general-information-information-text-container-text-p">Email : {email}</p>
                                <GeneralInformationMui />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default GeneralInformation;