import React from "react";
import ContactImg from "../../assets/img/contact image.svg";
import Wrapper from "../../components/Wrapper/Wrapper";
import ContactEmailMessage from "../../components/Contact/ContactEmailMessage/ContactEmailMessage";
import "./contact.scss";

const Contact: React.FC = () => {


    return (
        <Wrapper>
            <div className="contact-main">
                <div className="contact-main-container">
                    <div className="contact-main-container-img">
                        <img src={ContactImg} alt="contact"/>
                    </div>
                    <div className="contact-main-contact-email-message">
                        <div className="contact-contact-email-message">
                            <ContactEmailMessage />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
export default Contact;
