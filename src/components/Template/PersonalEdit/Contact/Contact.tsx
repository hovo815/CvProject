import React from 'react';
import "./contact.scss"
import {TextField} from "@mui/material";
import ColorPicker from "../../../Helpers/ColorPicker/ColorPicker";
import SocialEditTabulation from "../../../Helpers/SocialEditTabulation/SocialEditTabulation";
import {useAppDispatch, useAppSelector} from "../../../../hooks/useApp";
import PagesFooter from "../PagesFooter/PagesFooter";
import Mail from "../../../../assets/img/personaledit/mail.svg"
import Phone from "../../../../assets/img/personaledit/phone.svg"
import Address from "../../../../assets/img/personaledit/address.svg"
import {
    addContactMedia,
    removeContactMedia,
    removeContactMediaIcon,
    setContactAddress,
    setContactBgColor,
    setContactEmail,
    setContactMediaIcon,
    setContactMediaTitle,
    setContactMediaUrl,
    setContactPhone,
    setContactTextColor,
    setContactTitle,
    setContactTitleColor
} from "../../../../features/personalEditPageSlice/contactPageSlice/contactPageSlice";
import BusinessMediaLink from "../../../Helpers/BusinessMediaLink/BusinessMediaLink";

interface ContactProps {
    edit: boolean,

}


const Contact: React.FC<ContactProps> = ({edit}) => {
    const values = useAppSelector(state => state.contactState)
    const data = useAppSelector(state => state.contactState.contactMedia)
    const appDispatch = useAppDispatch()
    console.log(data)
    return (
        <>
            <div className="personal-edit-container">
                {edit ? <div className="personal-edit-left-side">
                    <h3 className="left-side-title">Main Page</h3>
                    <div className="personal-edit-left-side-inputs-container">
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Title"
                            name="title"
                            value={values.title}
                            onChange={(e) => appDispatch(setContactTitle(e.target.value))}
                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Phone"
                            name="phone"
                            value={values.phone}
                            onChange={(e) => appDispatch(setContactPhone(e.target.value))}
                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Email Address"
                            name="email"
                            value={values.email}
                            onChange={(e) => appDispatch(setContactEmail(e.target.value))}

                        />
                        <TextField
                            className="edit-text-inputs"
                            id="outlined-multiline-flexible"
                            label="Address"
                            name="address"
                            value={values.address}
                            onChange={(e) => appDispatch(setContactAddress(e.target.value))}
                        />
                        <BusinessMediaLink
                            setTitle={setContactMediaTitle}
                            addLink={addContactMedia}
                            setUrl={setContactMediaUrl}
                            removeLink={removeContactMedia}
                            removeIcon={removeContactMediaIcon}
                            setIcon={setContactMediaIcon}
                            data={data}
                        />
                        <ColorPicker singleColor={values.bgColor} setColor={setContactBgColor} fill
                                     Text="Background color"/>
                        <ColorPicker singleColor={values.titleColor} setColor={setContactTitleColor}
                                     Text="Title color"/>
                        <ColorPicker singleColor={values.textColor} setColor={setContactTextColor}
                                     Text="Text color"/>

                    </div>
                    <div className="publish-button-container">
                        <button className="publish-btn">Publish</button>
                    </div>
                </div> : null}
                <div className="personal-edit-right-side">
                    <div
                        style={{backgroundColor: `${values.bgColor}`}}
                        className="template-about-page personal-edit-contact-page"
                    >
                        <div className="template-about-page-left-side">
                            {values.title.length > 0 ?
                                <h1
                                    style={{color: `${values.titleColor}`}}
                                    className="template-about-page-title"
                                >{values.title}</h1>
                                : null}
                            {values.phone.length > 0 ?
                                <p
                                    style={{color: `${values.textColor}`}}
                                    className="template-about-page-description"
                                ><img src={Phone} className="contact-img" alt="contact-img"/>{values.phone}</p>
                                : null}
                            {values.email.length > 0 ?
                                <p
                                    style={{color: `${values.textColor}`}}
                                    className="template-about-page-description"
                                ><img src={Mail} className="contact-img" alt="contact-img"/>{values.email}</p>
                                : null}
                            {values.address.length > 0 ?
                                <p
                                    style={{color: `${values.textColor}`}}
                                    className="template-about-page-description"
                                ><img src={Address} className="contact-img" alt="contact-img"/>{values.address}</p>
                                : null}
                            {data.map(item => (
                                <>
                                    <a
                                        href={item.url}
                                        style={{color: `${values.textColor}`}}
                                        className="template-about-page-description"
                                    >
                                        <img src={item.icon} className="contact-img" alt="contact-img"/>{item.title}
                                    </a>
                                </>
                            ))}

                        </div>
                        <div className="template-about-page-right-side">
                            <div></div>
                            <PagesFooter/>
                        </div>

                    </div>
                    {edit ? <SocialEditTabulation/> : null}
                </div>
            </div>

        </>
    );
}


export default Contact;