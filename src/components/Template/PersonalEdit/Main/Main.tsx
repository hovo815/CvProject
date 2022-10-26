import React from 'react';
import {TextField} from "@mui/material";
import DragDropInput from "../../../Helpers/DragDropInput/DragDropInput";
import ColorPicker from "../../../Helpers/ColorPicker/ColorPicker";
import DefaultImg from "../../../../assets/img/personaledit/defaultimg.png";
import SocialEditTabulation from "../../../Helpers/SocialEditTabulation/SocialEditTabulation";
import "./main.scss"
import {useAppDispatch, useAppSelector} from "../../../../hooks/useApp";
import {
    addInterest, removeInterest,
    setInterest,
    setMainBgColor,
    setMainDescription,
    setMainFirstBtn,
    setMainName,
    setMainPhoto,
    setMainProfession,
    setMainSecondBtn,
    setMainTextColor,
    setMainThirdBtn,
    setMainTitleColor
} from "../../../../features/personalEditPageSlice/mainPageSlice/mainPageSlice";
import {pageFour, pageTree, pageTwo} from "../../../../features/pageSlice/pageSlice";
import AXIOS from "../../../../services/axios";
import Add from "../../../../assets/img/business/add.svg";
import Remove from "../../../../assets/img/business/remove.svg";
interface MainProps {
    edit: boolean,

}

const Main: React.FC<MainProps> = ({edit}) => {

    const appDispatch = useAppDispatch()
    const values = useAppSelector(state => state.mainState)
    const mainSaveClick = async () => {
        try {
            AXIOS.post(`api/pages/main`, values).then(item => {
                console.log(item)
            })

        } catch (e) {
            console.log(e, "error")
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
                            value={values.name}
                            onChange={(e) => appDispatch(setMainName(e.target.value))}
                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Profession"
                            name="profession"
                            value={values.profession}
                            onChange={(e) => appDispatch(setMainProfession(e.target.value))}
                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Description"
                            name="description"
                            multiline
                            rows={4}
                            value={values.description}
                            onChange={(e) => appDispatch(setMainDescription(e.target.value))}
                        />
                        <div className="btn-text-inputs-container">
                            <input
                                className='btn-text-inputs'
                                name='firstBtn'
                                value={values.tags[0]}
                                onChange={(e) => appDispatch(setMainFirstBtn(e.target.value))}
                                type="text"
                            />
                            <input
                                className='btn-text-inputs'
                                name='secondBtn'
                                value={values.tags[1]}
                                onChange={(e) => appDispatch(setMainSecondBtn(e.target.value))}
                                type="text"
                            />
                            <input
                                className='btn-text-inputs'
                                name='thirdBtn'
                                value={values.tags[2]}
                                onChange={(e) => appDispatch(setMainThirdBtn(e.target.value))}
                                type="text"
                            />
                        </div>
                        <div className="interests-container">
                            {values.interests.map((item, index:number) => (
                                <div className="interests-container-flex" key={item.id}>
                                    <TextField
                                        className="interests-container-inputs"
                                        id="outlined-multiline-flexible"
                                        label="Interests"
                                        name="Interests"
                                        value={item.interest}
                                        onChange={(e) => appDispatch(setInterest({
                                            id: item.id,
                                            interest: e.currentTarget.value
                                        }))}
                                    />
                                    {index === values.interests.length -1 ?
                                        <button onClick={()=> appDispatch(addInterest())} className="add-interest"> <img src={Add} alt="add"/></button>
                                        :
                                        <button onClick={()=> appDispatch(removeInterest(item.id))} className="add-interest">  <img src={Remove} alt="add"/></button>
                                    }

                                      </div>
                            ))}
                            {values.interests.length === 0 ?
                                <button onClick={()=> appDispatch(addInterest())} className="add-interest">
                                    add
                                </button> : null
                            }
                        </div>
                        <p className="edit-img-input-title">Photo</p>
                        <DragDropInput setValue={setMainPhoto}/>
                        <ColorPicker
                            singleColor={values.backgroundColor}
                            setColor={setMainBgColor}
                            fill
                            Text="Background color"
                        />
                        <ColorPicker
                            singleColor={values.titleColor}
                            setColor={setMainTitleColor}
                            Text="Title color"
                        />
                        <ColorPicker
                            singleColor={values.textColor}
                            setColor={setMainTextColor}
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
                        <div className="template-main-page-left-side">
                            {values.name.length > 0 ?
                                <h1
                                    style={{color: `${values.titleColor}`}}
                                    className="template-main-page-title"
                                >{values.name}</h1>
                                : null}
                            {values.profession.length > 0 ?
                                <p className="template-main-page-text">{values.profession}</p>
                                : null}
                            {values.description.length > 0 ?
                                <p
                                    style={{color: `${values.textColor}`}}
                                    className="template-main-page-description"
                                >{values.description}</p>
                                : null}
                            {values.tags[0].length > 0 ?
                                <button onClick={() => appDispatch(pageTwo())}
                                        className="template-main-page-btn">{values.tags[0]}</button>
                                : null}
                            {values.tags[1].length > 0 ?
                                <button onClick={() => appDispatch(pageTree())}
                                        className="template-main-page-btn">{values.tags[1]}</button>
                                : null}
                            {values.tags[2].length > 0 ?
                                <button onClick={() => appDispatch(pageFour())}
                                        className="template-main-page-btn">{values.tags[2]}</button>
                                : null}
                            {values.interests.length !== 0 ?
                                <div className="template-main-page-interest">
                                    Interests :
                                {values.interests.map((item) => (
                                    item.interest.length !== 0  ?
                                        <div className="template-main-page-interest-text">
                                            #{item.interest}
                                        </div>
                                        : null
                                ))}
                                </div>
                                : null}
                        </div>
                        <div className="template-main-page-right-side">
                            <img src={values.photo ? values.photo : DefaultImg} className="main-page-img" alt="cv-img"/>
                        </div>
                    </div>
                    {edit ? <SocialEditTabulation/> : null}
                </div>
            </div>
        </>
    );
};


export default Main;