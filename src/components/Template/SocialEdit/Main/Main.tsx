import React, {useEffect} from 'react';
import ColorPicker from "../../../Helpers/ColorPicker/ColorPicker";
import DragDropInput from "../../../Helpers/DragDropInput/DragDropInput";
import SocialMediaLink from "../../../Helpers/SocialMediaLInk/SocialMediaLink";
import SocialMediaDropdownCheckbox from "../../../Helpers/SocialMediaDropdownCheckbox/SocialMediaDropdownCheckbox";
import {TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from '../../../../hooks/useApp';
import {
    setSocialBgColor,
    setSocialBorderColor,
    setSocialDescription,
    setSocialName,
    setSocialNameColor,
    setSocialPhoto,
    setSocialTextColor,
    setSocialTitle,
} from "../../../../features/socialEditPageSlice/socialEditPageSlice";
import "./socialmain.scss"
import DefaultImg from "../../../../assets/img/social/defaultimg.png"
import InputPhoto from "../../../../assets/img/icons/witheicon.svg"
import BackGround from "../../../../assets/img/socialmedia/backgraund.png"
import {useParams} from "react-router-dom";
import AXIOS from "../../../../services/axios";


interface MainProps {
    edit: Boolean
}

const Main: React.FC<MainProps> = ({edit}) => {
    const {id} = useParams()

    useEffect(()=>{
        const getSocials = async () => {
            try {
                await  AXIOS.get(`api/templates/detail/${id}`).then(item => {
                        console.log(item);
                    }
                )
            }
            catch (e) {
                console.log(e,"not template");
            }
        }
        getSocials()
    },[id])

    const appDispatch = useAppDispatch()
    const values = useAppSelector(state => state.social)
    console.log(values)
    const socialMedia = values.socialMedia.filter(item => item.checked ? item : null)
    return (
        <>
            <div className="personal-edit-container">
                {edit ? <div className="personal-edit-left-side">
                    <div className="personal-edit-left-side-inputs-container">

                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Title"
                            name="title"
                            value={values.title}
                            onChange={(e) => appDispatch(setSocialTitle(e.target.value))}
                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="name"
                            name="name"
                            value={values.name}
                            onChange={(e) => appDispatch(setSocialName(e.target.value))}
                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Description"
                            name="description"
                            multiline
                            rows={4}
                            value={values.description}
                            onChange={(e) => appDispatch(setSocialDescription(e.target.value))}
                        />
                        <p className="edit-img-input-title">Photo</p>
                        <DragDropInput circle setValue={setSocialPhoto}/>
                        <SocialMediaDropdownCheckbox/>
                        <SocialMediaLink id={id}/>
                        <ColorPicker
                            singleColor={values.bgColor}
                            setColor={setSocialBgColor}
                            fill
                            Text="Background color"
                        />
                        <ColorPicker
                            singleColor={values.textColor}
                            setColor={setSocialTextColor}
                            fill
                            Text="Text color"
                        />
                        <ColorPicker
                            singleColor={values.nameColor}
                            setColor={setSocialNameColor}
                            Text="Name color"
                        />
                        <ColorPicker
                            singleColor={values.borderColor}
                            setColor={setSocialBorderColor}
                            Text="Border  color"/>
                        <button className='qr-code-btn'>Add Qr Code</button>
                    </div>
                    <div className="publish-button-container">
                        <button className="publish-btn">Publish</button>
                    </div>
                </div> : null}
                <div className="social-edit-right-side">
                    <div
                        style={{background: `url(${BackGround})${values.bgColor} no-repeat top`}}
                        className="template-social-page"
                    >
                        <div className="template-social-page-top-side">
                            <div className="template-social-page-top-side-left-side">
                                {values.name.length > 0 ?
                                    <h1
                                        style={{color: `${values.textColor}`}}
                                        className="template-main-page-title"
                                    >{values.title}</h1>
                                    : null}
                                {values.name.length > 0 ?
                                    <h1
                                        style={{color: `${values.nameColor}`}}
                                        className="template-main-page-title"
                                    >{values.name}</h1>
                                    : null}

                                {values.description.length > 0 ?
                                    <p
                                        style={{color: `${values.textColor}`}}
                                        className="template-main-page-description"
                                    >{values.description}</p>
                                    : null}

                            </div>
                            <div className="template-social-page-top-side-right-side">
                                <img src={values.photo ? values.photo : DefaultImg} className="social-main-page-img"
                                     alt="cv-img"/>
                            </div>
                        </div>
                        <div className="template-social-page-bottom-side">
                            {socialMedia.map(item => (
                                <div key={item.name} className="social-media-links-container">
                                    <a className="social-links" target="_blank" rel="noreferrer"
                                       href={`${item.userName}${item.url}`}>
                                        {item.name}
                                    </a>
                                    <div className="social-line">
                                        <img className="social-media-links-icons"
                                             src={item.icon ? item.icon : InputPhoto} alt={item.icon}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};


export default Main;