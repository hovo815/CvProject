import React from 'react';
import "./digitalcardmaker.scss"
import FirstImage from "../../../assets/img/home/digitalcardmaker/firstimage.svg"
import SecondImage from "../../../assets/img/home/digitalcardmaker/secondimage.svg"
import ThirdImage from "../../../assets/img/home/digitalcardmaker/thirdimage.svg"
import FourImage from "../../../assets/img/home/digitalcardmaker/fourimage.svg"
import FiveImage from "../../../assets/img/home/digitalcardmaker/fiveimage.svg"
const DigitalCardMaker:React.FC = () => {
    return (
        <>
            <div className="digital-card-maker-container">
                <div className="digital-card-maker-content">
                    <h1 className="digital-card-maker-title">What you get with Company Name  Digital card maker</h1>
                    <div className="digital-card-content-first-line">
                        <div className="first-line-cards">
                            <img src={FirstImage} alt='all-in-one'></img>
                            <h3 className="digital-card-content-first-line-title">All in One</h3>
                            <p className="digital-card-content-first-line-text">Arrange all your important information and links in one place</p>
                        </div>
                        <div className="first-line-cards ">
                            <img src={SecondImage} alt='digital-card-icons'></img>
                            <h3 className="digital-card-content-first-line-title">Add Media </h3>
                            <p className="digital-card-content-first-line-text">Add video or an image, custom branding and third-party
                                content to your digital business card.</p>
                        </div>
                        <div className="first-line-cards ">
                            <img src={ThirdImage} alt='digital-card-icons'></img>
                            <h3 className="digital-card-content-first-line-title">Exchange Contact </h3>
                            <p className="digital-card-content-first-line-text">Lorem ipsum dolor sitamet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div className="digital-card-content-second-line">
                            <div className="first-line-cards">
                                <img src={FourImage} alt='digital-card-icons'></img>
                                <h3 className="digital-card-content-first-line-title">Unlimited Customization</h3>
                                <p className="digital-card-content-first-line-text"> With unlimited edits you can create as many variations as you want.</p>
                            </div>

                            <div className="first-line-cards">
                                <img src={FiveImage} alt='digital-card-icons'></img>
                                <h3 className="digital-card-content-first-line-title">Share Card with a QR Code </h3>
                                <p className="digital-card-content-first-line-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default DigitalCardMaker;