import React from 'react';
import ColorPicker from "../../../Helpers/ColorPicker/ColorPicker";
import SocialEditTabulation from "../../../Helpers/SocialEditTabulation/SocialEditTabulation";
import {useAppDispatch, useAppSelector} from "../../../../hooks/useApp";
import {
    addExperienceDescription,
    addWorkExperiences,
    removeExperienceDescription,
    setExperienceDescription,
    setWorkBgColor,
    setWorkDateColor,
    setWorkEndDate,
    setWorkPosition,
    setWorkStartDate,
    setWorkTextColor,
    setWorkTitleColor,
} from "../../../../features/personalEditPageSlice/workPageSlice/workPageSlice";
import AXIOS from "../../../../services/axios";
import {TextField} from "@mui/material";
import "./work.scss"
import WorkDatePicker from "../../../Helpers/DatePicker/WorkDatePicker";
import Add from "../../../../assets/img/business/add.svg";
import Remove from "../../../../assets/img/business/remove.svg";
import AddExperience from "../../../../assets/img/socialmedia/addicon.svg"
import Vector from "../../../../assets/img/personaledit/vector.svg"
import moment from "moment";

interface MainProps {
    edit: boolean,

}

const Work: React.FC<MainProps> = ({edit}) => {
    const appDispatch = useAppDispatch()
    const values = useAppSelector(state => state.workState)
    const mainSaveClick = async () => {
        try {
            AXIOS.post(`api/pages/work`, values).then(item => {
                console.log(item)
            })

        } catch (e) {
            console.log(e, "error")
        }
    }
    console.log(values)
    return (
        <>
            <div className="personal-edit-container">
                {edit ? <div className="personal-edit-left-side">
                    <h3 className="left-side-title">Main Page</h3>
                    <div className="personal-edit-left-side-inputs-container">
                        <div className="work-page-work-experience-container">
                            {values.experiences.map((item, index: number) => (
                                <div className="experience-container" key={item.id}>
                                    <div className="experience-header">
                                        <button className="experience-header-button">&#10005;</button>
                                    </div>
                                    <TextField
                                        className="experience-container-work-edit-text-inputs"
                                        id="outlined-multiline-flexible"
                                        label="Position"
                                        name="name"
                                        value={item.position}
                                        onChange={(e) => appDispatch(setWorkPosition({
                                            id: item.id,
                                            position: e.target.value
                                        }))}
                                    />
                                    <div className="experience-container-date-picker-container">
                                        <WorkDatePicker
                                            id={item.id}
                                            value={item.startDate}
                                            setValue={setWorkStartDate}
                                            name="startDate"
                                            text="From"
                                        />
                                        <WorkDatePicker
                                            id={item.id}
                                            value={item.endDate}
                                            setValue={setWorkEndDate}
                                            name="endData"
                                            text="to"
                                        />
                                    </div>
                                    <div className="experience-container-description">
                                        {item.description.map((description, index: number) => (
                                            <div key={description.id} className="contact-info-inputs">
                                                <TextField
                                                    className="contact-info-inputs-text"
                                                    id="outlined-multiline-flexible"
                                                    label="Job Description"
                                                    name="description"
                                                    value={description.text}
                                                    onChange={(e) => appDispatch(setExperienceDescription({
                                                        id: item.id,
                                                        descriptionId: description.id,
                                                        text: e.target.value
                                                    }))}
                                                />
                                                {index === item.description.length - 1 ?
                                                    <button
                                                        className="contact-info-inputs-btn"
                                                        onClick={() => appDispatch(addExperienceDescription(item.id))}
                                                    >
                                                        <img src={Add} alt="add"/>
                                                    </button>
                                                    :
                                                    <button
                                                        className="contact-info-inputs-btn"
                                                        onClick={() => appDispatch(removeExperienceDescription({
                                                            id: item.id,
                                                            descriptionId: description.id
                                                        }))}
                                                    >
                                                        <img src={Remove} alt="add"/>
                                                    </button>
                                                }
                                            </div>
                                        ))}
                                        <div className="experience-footer">
                                            {index === values.experiences.length - 1 ?
                                                <button
                                                    className="social-media-inputs-container-add"
                                                    onClick={() => appDispatch(addWorkExperiences())}
                                                >
                                                    <span className="social-media-inputs-container-add-icon">
                                                    <img src={AddExperience} alt="add"/>
                                                    </span>
                                                    Add new Social media
                                                </button> : null}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ColorPicker
                            singleColor={values.backgroundColor}
                            setColor={setWorkBgColor}
                            fill
                            Text="Background color"
                        />
                        <ColorPicker
                            singleColor={values.titleColor}
                            setColor={setWorkDateColor}
                            Text="Title color"
                        />
                        <ColorPicker
                            singleColor={values.dateColor}
                            setColor={setWorkTitleColor}
                            fill
                            Text="Date color"
                        />

                        <ColorPicker
                            singleColor={values.textColor}
                            setColor={setWorkTextColor}
                            Text="Text color"/>
                        <button className='qr-code-btn'>Add Qr Code</button>
                    </div>
                    <div className="publish-button-container">
                        <button onClick={mainSaveClick} className="publish-btn">Publish</button>
                    </div>
                </div> : null}
                <div className="personal-edit-right-side">
                    <div
                        style={{backgroundColor: `${values.backgroundColor}`}}
                        className="template-main-page"
                    >
                        <div className="template-main-page-top-side">
                            <div className="template-main-page-left-side">
                                {values.experiences.map((item) => (
                                    <div key={item.id} className="experience-box">
                                        <h3 className="experience-box-title">{item.position}</h3>
                                        <p className="experience-box-date">
                                            {item.startDate ?
                                                <>
                                                    < span> {
                                                        item.startDate ? moment(item.startDate).format('DD/MM/YYYY') : null
                                                    }</span>
                                                    -
                                                    <span>
                                                        {item.endDate ? moment(item.endDate).format('DD/MM/YYYY') : null}</span>
                                                </> : null}
                                        </p>

                                        {item.description.length ? item.description.map(description => (
                                            <p className="experience-box-description" key={description.id}>
                                                    <span>
                                                        <img src={Vector} alt="vector"/>
                                                    </span>
                                                {description.text}
                                            </p>
                                        )): null}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="template-main-page-bottom-side">

                        </div>
                    </div>
                    {edit ? <SocialEditTabulation/> : null}
                </div>
            </div>
        </>
    );
};


export default Work;