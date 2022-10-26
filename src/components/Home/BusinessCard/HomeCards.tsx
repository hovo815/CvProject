import "./businesscard.scss";
import Business from "../../../assets/img/home/business.svg";
import Social from "../../../assets/img/home/social.svg";
import Personal from "../../../assets/img/home/personal.svg";
import PersonalLine from "../../../assets/img/home/personalline.svg";
import SocialLine from "../../../assets/img/home/socialline.svg";
import BusinessLine from "../../../assets/img/home/businessline.svg";
import React from 'react';
import CardButton from "../CardButton/CardButton";

interface HomeCarsProps{
    reverse?:boolean
    title:string
    personal?:boolean,
    social?:boolean
}

const HomeCards: React.FC<HomeCarsProps> = ({reverse,title,personal,social}) => {
    return (
        <>
            <div style={ reverse ? {flexDirection : 'row-reverse'} : {flexDirection: "row"}} className="business-card-container">
                <div className="business-card-content">
                    <div className="business-card">
                        <div style={{ marginTop: "66px" }}>
                            <img src={personal ? PersonalLine : social ? SocialLine : BusinessLine} alt="line"></img>
                        </div>
                        <div className="business-card-text-block">
                            <h1 className="business-card-text-block-title">{title}</h1>
                            <p className="business-card-text-block-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                    <div style={{ marginTop: "41px", marginLeft:"27px" }}><CardButton text='Design your  digital card now' /></div>
                </div>
                <div className="card-img">
                    <img src={personal ? Personal : social ? Social : Business} alt='ray charles'></img>
                </div>
            </div>
        </>
    )
}
export default HomeCards;

