import React from 'react';
import "./about.scss"
import {TextField} from "@mui/material";
import ColorPicker from "../../../Helpers/ColorPicker/ColorPicker";
import DefaultImg from "../../../../assets/img/personaledit/defaultimg.png";
import SocialEditTabulation from "../../../Helpers/SocialEditTabulation/SocialEditTabulation";
import {useAppDispatch, useAppSelector} from "../../../../hooks/useApp";
import {
    setAboutBgColor,
    setAboutDescription,
    setAboutPhoto,
    setAboutTextColor,
    setAboutTitle,
    setAboutTitleColor
} from "../../../../features/personalEditPageSlice/aboutPageSlice/aboutPageSlice";
import DragDropInput from "../../../Helpers/DragDropInput/DragDropInput";
import PagesFooter from "../PagesFooter/PagesFooter";
import AXIOS from "../../../../services/axios";

interface AboutProps {
    edit:boolean,

}

const About:React.FC<AboutProps> = ({edit}) => {

  const appDispatch = useAppDispatch()
    const values = useAppSelector(state => state.aboutState)
    console.log(values)
    const aboutPageSave = () => {
       try {
           AXIOS.post(`api/pages/about`, values).then(item=>{
               console.log(item);
           })
       }
       catch (e){
           console.log(e);
       }
    }
    return (
        <>
            <div className="personal-edit-container">
                {edit ? <div className="personal-edit-left-side">
                    <h3 className="left-side-title">Main Page</h3>
                    <div className="personal-edit-left-side-inputs-container">
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Name"
                            name="name"
                            value={values.title}
                            onChange={(e)=>appDispatch(setAboutTitle(e.target.value))}
                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Description"
                            name="description"
                            multiline
                            rows={4}
                            value={values.description}
                            onChange={(e)=>appDispatch(setAboutDescription(e.target.value))}
                        />

                        <p className="edit-img-input-title">Photo</p>
                        <DragDropInput  setValue={setAboutPhoto}/>
                        <ColorPicker singleColor={values.backgroundColor}  setColor={setAboutBgColor} fill
                                     Text="Background color"/>
                        <ColorPicker singleColor={values.titleColor}  setColor={setAboutTitleColor}
                                     Text="Title color"/>
                        <ColorPicker singleColor={values.textColor} setColor={setAboutTextColor}
                                     Text="Text color"/>

                    </div>
                    <div className="publish-button-container">
                        <button onClick={aboutPageSave} className="publish-btn">Publish</button>
                    </div>
                </div> : null}
                <div className="personal-edit-right-side">
                    <div
                        style={{backgroundColor: `${values.backgroundColor}`}}
                        className="template-about-page"
                    >
                        <div className="template-about-page-left-side">
                            {values.title.length > 0 ?
                                <h1
                                    style={{color: `${values.titleColor}`}}
                                    className="template-about-page-title"
                                >{values.title}</h1>
                                : null}
                            {values.description.length > 0 ?
                                <p
                                    style={{color: `${values.textColor}`}}
                                    className="template-about-page-description"
                                >{values.description}</p>
                                : null}
                        </div>
                        <div className="template-about-page-right-side">
                            <img src={values.photo ? values.photo : DefaultImg} className="about-page-img" alt="cv-img"/>
                            <PagesFooter/>
                        </div>

                    </div>
                    {edit ? <SocialEditTabulation /> : null}
                </div>
            </div>
        </>
    );
};


export default About;