import "./digitalcard.scss";
import React from 'react';

import "aos/dist/aos.css";
import {useEffect} from "react";
import AOS from 'aos'
import FirstImage from "../../../assets/img/home/digitalcard/firstimg.svg";
import One from "../../../assets/img/home/digitalcard/one.svg";
import Line from "../../../assets/img/home/digitalcard/line.svg"
import Two from "../../../assets/img/home/digitalcard/two.svg"
import Tree from "../../../assets/img/home/digitalcard/tree.svg"
import SecondImage from "../../../assets/img/home/digitalcard/secondimg.svg"
import ThirdImage from "../../../assets/img/home/digitalcard/thirdimage.svg"

const CreateDigital: React.FC = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="digital-card-content">
            <h1 className="digital-card-content-title" style={{textAlign: "center"}}>Create a digital card in 3 easy steps</h1>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="digital-card-content-container">
                    <div className="digital-card-image-container">
                        <img src={FirstImage} alt='first-image'></img>
                    </div>
                    <div className="card-number"><img src={One} alt='one'></img></div>
                    <div className="digital-card-content-text-container">
                        <h1 className="digital-card-content-text-container-title">Choose a digital card template</h1>
                        <p className="digital-card-content-text-container-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>
                <div style={{marginLeft: "592px"}}><img src={Line} alt='line'></img></div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="digital-card-content-container">
                    <div className="digital-card-image-container">
                        <img src={SecondImage} alt='second-image'></img>
                    </div>
                    <div className="card-number"><img src={Two} alt='two'></img></div>
                    <div className="digital-card-content-text-container">
                        <h1 className="digital-card-content-text-container-title">Edit your digital card</h1>
                        <p className="digital-card-content-text-container-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>
                <div style={{marginLeft: "592px"}}><img src={Line} alt='line'></img></div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="digital-card-content-container">
                    <div className="digital-card-image-container">
                        <img src={ThirdImage} alt='tree-image'></img>
                    </div>
                    <div className="card-number"><img src={Tree} alt='tree'></img></div>
                    <div className="digital-card-content-text-container">
                        <h1 className="digital-card-content-text-container-title">Share your Digital card </h1>
                        <p className="digital-card-content-text-container-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateDigital;