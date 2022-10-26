import React, {useEffect} from "react";
import Activated from "../Activated/Activated";
import CreateCvCard from "./CreateCvCard/CreatCvCard";
import ButtonPages from "./ButtonPages/ButtonPages";
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import {setUserTemplates} from "../../../features/userDashboardSlice/userDashboardSlice";
import "./userpages.scss";
import AXIOS from "../../../services/axios";


const UserPages: React.FC = () => {

    const appDispatch = useAppDispatch()
    const templates = useAppSelector(state => state.userDashboard.userTemplates)
    useEffect(() => {
        try {
            const getUserTemplates = async () => {

                AXIOS.get(`api/templates`)
                    .then(item => {
                        console.log(item,"templates");
                        appDispatch(setUserTemplates(item.data))
                    })

            }
            getUserTemplates()
        } catch (e) {
            console.log(e, "error");
        }
    }, [appDispatch])
    return (
        <>
            <div className="pages-main-container">
                <Activated title1="Business plan deadline Sep 20,18:30" title2="Social plan   deadline: Sep 21, 17:30"/>
                <div className="pages-main-container-text">
                    <h1 className="pages-main-container-text-h1">Pages</h1>
                    <hr className="pages-main-container-text-hr"/>
                    <div className="pages-main-container-text-create-new-pages">
                        <ButtonPages/>
                    </div>
                    <div className="pages-main-container-text-create-cv-card">
                        {templates.map(item=>   <CreateCvCard data={item.template} key={item.template._id}/>) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPages;