import React from 'react';
import "./main.scss"
import ColorPicker from '../../../Helpers/ColorPicker/ColorPicker';
import {TextField} from "@mui/material";
import {
    addBusinessLinks,
    addContactEmail,
    addContactPhone, removeBusinessLinkIcon, removeBusinessLinks,
    removeContactEmail,
    removeContactPhone, setBusinessLinksIcon, setBusinessLinksTitle, setBusinessLinksUrl,
    setContactEmail,
    setContactPhone,
    setMainAbout,
    setMainBannerBgColor,
    setMainBgColor,
    setMainName,
    setMainPhoto,
    setMainSubTitle,
    setMainTextColor,
    setMainThemeColor,
    setMainYoutubeUrl,
} from "../../../../features/businessEditPageSlice/businessEditPageSlice"
import {useAppDispatch, useAppSelector} from "../../../../hooks/useApp";
import DragDropInput from "../../../Helpers/DragDropInput/DragDropInput";
import BusinessMediaLink from "../../../Helpers/BusinessMediaLink/BusinessMediaLink";
import Add from "../../../../assets/img/business/add.svg"
import Remove from "../../../../assets/img/business/remove.svg"
import DefaultImg from "../../../../assets/img/personaledit/defaultimg.png"
import BusinessLine from "../../../../assets/img/business/bussines-line.svg"
import Email from "../../../../assets/img/business/email.svg"
import Phone from "../../../../assets/img/business/phone.svg"
import Arrow from "../../../../assets/img/business/arrow.svg"
import Line from  "../../../../assets/img/business/line.svg"
import LinkLogo from  "../../../../assets/img/business/defaultimages/linklogo.svg"

interface MainProps {
    edit: Boolean
}

const Main: React.FC<MainProps> = ({edit}) => {
    const appDispatch = useAppDispatch()
    const values = useAppSelector(state => state.business)
    const data = useAppSelector(state => state.business.businessLinks)
    const checked =  values.socialMedia.filter(item => item.checked ? item : null)

    return (
        <>
            <div className="personal-edit-container">
                {edit ? <div className="personal-edit-left-side">
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
                            label="SubTitle"
                            name="subTitle"
                            value={values.subTitle}
                            onChange={(e) => appDispatch(setMainSubTitle(e.target.value))}
                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="About"
                            name="about"
                            multiline
                            rows={10}
                            value={values.about}
                            onChange={(e) => appDispatch(setMainAbout(e.target.value))}
                        />
                        <p className="edit-img-input-title">Photo</p>
                        <DragDropInput setValue={setMainPhoto}/>
                        <BusinessMediaLink
                            setTitle={setBusinessLinksTitle}
                            addLink={addBusinessLinks}
                            setUrl={setBusinessLinksUrl}
                            removeLink={removeBusinessLinks}
                            removeIcon={removeBusinessLinkIcon}
                            setIcon={setBusinessLinksIcon}
                            data={data}
                        />
                        <input
                            value={values.youtubeUrl}
                            onChange={(e) => appDispatch(setMainYoutubeUrl(e.target.value))}
                            type="text"
                            placeholder="Youtube URL"
                            className="youtube-video-input"
                        />
                        <p className="edit-img-input-title">Contact Info</p>
                        <div className="contact-info">
                            {values.contactPhone.map((item, index: number) => (
                                <div className="contact-info-inputs">
                                    <TextField
                                        className="contact-info-inputs-text"
                                        id="outlined-multiline-flexible"
                                        label="Phone"
                                        name="phone"
                                        value={item.phone}
                                        onChange={(e) => appDispatch(setContactPhone({
                                            id: item.id,
                                            phone: e.target.value
                                        }))}
                                    />
                                    {index === values.contactPhone.length - 1 ?
                                        <button
                                            className="contact-info-inputs-btn"
                                            onClick={() => appDispatch(addContactPhone())}>
                                            <img src={Add} alt="add"/>
                                        </button>
                                        :
                                        <button
                                            className="contact-info-inputs-btn"
                                            onClick={() => appDispatch(removeContactPhone(item.id))}>
                                            <img src={Remove} alt="add"/>
                                        </button>
                                    }
                                </div>
                            ))}
                            {values.contactEmail.map((item, index: number) => (
                                <div className="contact-info-inputs">
                                    <TextField
                                        className="contact-info-inputs-text"
                                        id="outlined-multiline-flexible"
                                        label="Email"
                                        name="email"
                                        value={item.email}
                                        onChange={(e) => appDispatch(setContactEmail({
                                            id: item.id,
                                            email: e.target.value
                                        }))}
                                    />
                                    {index === values.contactEmail.length - 1 ?
                                        <button
                                            className="contact-info-inputs-btn"
                                            onClick={() => appDispatch(addContactEmail())}
                                        >
                                            <img src={Add} alt="add"/>
                                        </button>
                                        :
                                        <button
                                            className="contact-info-inputs-btn"
                                            onClick={() => appDispatch(removeContactEmail(item.id))}
                                        >
                                            <img src={Remove} alt="add"/>
                                        </button>
                                    }
                                </div>
                            ))}
                        </div>
                        <ColorPicker
                            singleColor={values.bgColor}
                            setColor={setMainBgColor}
                            fill
                            Text="Background color"
                        />
                        <ColorPicker
                            fill
                            setColor={setMainBannerBgColor}
                            singleColor={values.bannerBgColor}
                            Text="Banner Background color"
                        />
                        <ColorPicker
                            singleColor={values.textColor}
                            setColor={setMainTextColor}
                            Text="Text color"
                        />
                        <ColorPicker
                            singleColor={values.themeColor}
                            setColor={setMainThemeColor}
                            Text="Theme color"
                        />
                        <button className='qr-code-btn'>Add Qr Code</button>
                    </div>
                    <div className="publish-button-container">
                        <button className="publish-btn">Publish</button>
                    </div>
                </div> : null}
                <div className="business-edit-right-side">
                    <div
                        style={{background: values.bgColor}}
                        className="business-template-main-page"
                    >
                        <div className="business-template-main-page-banner">
                            <div className="business-template-main-page-banner-right-side">
                                <img
                                    className="business-template-main-page-banner-right-side-img"
                                    src={values.photo ? values.photo : DefaultImg}
                                    alt="business-img"
                                />
                            </div>
                            <div style={{background: values.bannerBgColor}}
                                 className="business-template-main-page-banner-left-side">
                                <div className="business-template-main-page-banner-left-side-container">
                                    <h1 style={{color: values.textColor}}
                                        className="business-template-main-page-banner-left-side-container-title">
                                        {values.name}
                                    </h1>
                                    <h1 style={{color: values.textColor}}
                                        className="business-template-main-page-banner-left-side-container-sub-title">
                                        {values.subTitle}
                                    </h1>
                                    <div className="business-template-main-page-banner-left-side-container-box">
                                        <button
                                            className="business-template-main-page-banner-left-side-container-box-buttons"
                                        >
                                            Save Contact
                                        </button>
                                        <button
                                            className="business-template-main-page-banner-left-side-container-box-buttons"
                                        >
                                            Exchange Contact
                                        </button>
                                    </div>
                                    <h3 style={{color: values.textColor}}
                                        className="business-template-main-page-banner-left-side-container-name">About</h3>
                                    <p style={{color: values.textColor}}
                                       className="business-template-main-page-banner-left-side-container-description">
                                        {values.about}
                                    </p>

                                </div>
                                <img className="business-banner-left-side-img" src={Line} alt="line"/>
                            </div>

                        </div>
                        <div className="business-template-main-page-content">
                            <div className="business-template-main-page-content-container">
                                <div className="business-template-main-page-content-container-top-side">
                                    <img src={BusinessLine} alt="line"/>
                                    <h3
                                        style={{color: values.textColor}}
                                        className="business-template-main-page-content-container-top-side-sub-titles"
                                    >
                                        Social Networks
                                    </h3>
                                </div>
                                <div className="business-template-main-page-content-container-bot-side">
                                    {checked.map((item)=>(
                                        <div className="business-template-main-page-content-container-bot-side-socials">
                                            <img
                                                src={item.icon ? item.icon : LinkLogo} alt="socials"
                                                className="business-template-main-page-content-container-bot-side-socials-icons"
                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="business-template-main-page-content-container">
                                <div className="business-template-main-page-content-container-top-side">
                                    <img src={BusinessLine} alt="line"/>
                                    <h3
                                        style={{color: values.textColor}}
                                        className="business-template-main-page-content-container-top-side-sub-titles"
                                    >
                                        Business Links
                                    </h3>
                                </div>
                                <div className="business-template-main-page-content-container-bot-side">
                                    {values.businessLinks.map(item=>(
                                        <div className="business-template-main-page-content-container-bot-side-links">
                                            <a href={item.url}>
                                            <img src={item.icon ? item.icon : LinkLogo} alt="logo"/>
                                            <p style={{color: values.textColor}} >{item.title}</p>
                                            <img src={Arrow} alt="arrow"/>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="business-template-main-page-content-container">
                                <div className="business-template-main-page-content-container-top-side">
                                    <img src={BusinessLine} alt="line"/>
                                    <h3
                                        style={{color: values.textColor}}
                                        className="business-template-main-page-content-container-top-side-sub-titles"
                                    >
                                        Video
                                    </h3>
                                </div>
                                <div className="business-template-main-page-content-container-bot-side">
                                    <iframe title="youtube video" width="368" height="210"
                                            src={values.youtubeUrl}>
                                    </iframe>
                                </div>
                            </div>
                            <div className="business-template-main-page-content-container">
                                <div className="business-template-main-page-content-container-top-side">
                                    <img src={BusinessLine} alt="line"/>
                                    <h3
                                        style={{color: values.textColor}}
                                        className="business-template-main-page-content-container-top-side-sub-titles"
                                    >
                                        Contact Info
                                    </h3>
                                </div>
                                <div className="business-template-main-page-content-container-bot-side">
                                    {values.contactPhone.map(item=> (
                                        <div key={item.id} className="business-template-main-page-content-container-bot-side-contact">
                                            <img src={Phone} alt="phone"/>
                                            <p style={{color: values.textColor}}>{item.phone}</p>
                                        </div>
                                    ))}
                                    {values.contactEmail.map(item=> (
                                        <div key={item.id} className="business-template-main-page-content-container-bot-side-contact">
                                            <img src={Email} alt="phone"/>
                                            <p style={{color: values.textColor}}>{item.email}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Main;