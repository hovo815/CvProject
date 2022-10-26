import React from 'react';
import PersonalEdit from "../../components/Template/PersonalEdit/PersonalEdit";
import SocialEdit from "../../components/Template/SocialEdit/SocialEdit";
import {Navigate, useParams} from "react-router-dom";
import BusinessEdit from "../../components/Template/BusinessEdit/BusinessEdit";


const EditTemplate: React.FC = () => {
    const {path} = useParams()
    return path === "social" ? (<SocialEdit/>) : path === "personal" ? (<PersonalEdit/>) : path === "business" ?
        (<BusinessEdit/>):
        (<Navigate to={"/templates"} replace={true}/>);
};


export default EditTemplate;