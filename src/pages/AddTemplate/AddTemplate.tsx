import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./addtemplate.scss"
import BackIcon from "../../assets/img/templates/backicon.svg"
import NextIcon from "../../assets/img/templates/nexticon.svg"
import AXIOS from "../../services/axios";
import {useAppDispatch} from "../../hooks/useApp";
import {setMainTemplate} from "../../features/personalEditPageSlice/mainPageSlice/mainPageSlice";
import {setSocialTemplate} from "../../features/socialEditPageSlice/socialEditPageSlice";
import {setAboutTemplate} from "../../features/personalEditPageSlice/aboutPageSlice/aboutPageSlice";

const AddTemplate: React.FC = () => {
    const [value,setValue] = React.useState<string>("")
    const {path} = useParams()
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }
    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const appDispatch = useAppDispatch()
    const createTemplate = async() => {
        try {
            await AXIOS.post(`api/templates`, {
                name:value,
                planName:path
            }).then((item) => {
                if(path === "personal"){
                    navigate(`edit/${item.data}`)
                  appDispatch(setMainTemplate(item.data))
                  appDispatch(setAboutTemplate(item.data))
                }
                else if(path === "social"){
                    navigate(`edit/${item.data}`)
                    return appDispatch(setSocialTemplate(item.data))
                }
                else{
                    navigate(`edit/${item.data}`)
                    return appDispatch(setMainTemplate(item.data))

                }

            })


    }
        catch (e){
            console.log(e,"create template error")
        }

    }
    console.log(path)

    return (
        <Wrapper>
            <div className="add-template-page-container">
                <div className="add-template-page">
                    <button onClick={handleBackClick} className="go-back-btn"><img src={BackIcon} alt="back icon"/>
                    </button>
                    <div className="add-template-content-container">
                        <h1 className="add-template-page-title">Add your page name</h1>
                        <div className="add-page-content">
                            <input onChange={handleChange} placeholder="e. g John Smith bio" type="text" className="add-page-content-input"/>
                            <button onClick={createTemplate} className="add-page-content-btn">Open a page
                                <img className="add-page-content-btn-img" src={NextIcon} alt="next icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};


export default AddTemplate;