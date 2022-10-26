import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import "./viewbar.scss"
import Pencil from "../../../assets/img/viewbar/pencil.svg"
import Prewiev from "../../../assets/img/viewbar/prewiev.svg"
import {Storage} from "../../../services/storage";
interface ViewBarProps {
    setEdit:any
}

const ViewBar:React.FC<ViewBarProps> = ({setEdit}) => {
    const token = Storage.getDataInLocalStorageByName("authToken");
    const navigate = useNavigate()
    useEffect(()=>{
        if(!token){
            return navigate(`/`,{replace:true})
        }
        }, [navigate, token])

    const handleEditClick = () => {
      setEdit(true)
    }
    const handlePreviewClick = () => {
      setEdit(false)
    }
    return (
        <>
            <div className="view-bar-container">
                <div className="view-bar">
                    <NavLink to="/templates/add/personal/edit" className="view-bar-link">Personal Template</NavLink>
                    <NavLink to="/templates/add/social/edit" className="view-bar-link">Social Template</NavLink>
                    <NavLink to="/templates/add/business/edit" className="view-bar-link"> Business Te mplate</NavLink>
                </div>
                <div className="view-bar">
                </div>
                <div className="view-bar">
                    <button className="view-bar-edit-btn" onClick={handleEditClick}>
                        <img src={Pencil} className="view-bar-edit-btn-img" alt="pencil"/>
                        Edit
                    </button>
                    <button className="view-bar-edit-btn" onClick={handlePreviewClick}>
                        <img src={Prewiev} className="view-bar-edit-btn-img" alt="preview"/>
                        Preview
                    </button>
                </div>
            </div>
        </>
    );
};


export default ViewBar;