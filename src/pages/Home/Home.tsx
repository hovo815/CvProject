import "./Home.scss";
import React from "react";
import Arrow from "../../assets/img/home/arrow.svg"
import HomeCards from "../../components/Home/BusinessCard/HomeCards";
import Wrapper from "../../components/Wrapper/Wrapper";
import DigitalCard from "../../components/Home/DigitalCard/DigitalCard";
import DigitalCardMaker from "../../components/Home/DigitalCardMaker/DigitalCardMaker";
import HomeSubscribeBlog from "../../components/Home/HomeSubscribeBlog/HomeSubscribeBlog";
import {Link} from "react-router-dom";

const Home: React.FC = () => {
    return (
        <Wrapper>
            <div className="home">
                <div className="home-banner-container">
                    <div className="home-banner-row">
                        <div className="home-banner-text">
                            <h1 className="home-banner-text-title">Create Professional Digital card in minutes.</h1>
                        </div>
                        <div className="home-banner-main-text-container">
                            <div className="home-banner-main-content">
                                <p className='home-banner-main-text'>
                                    Company Name makes it easy to design your own personalized digital
                                    cards.Customize with trending fonts, backgrounds, and more.
                                </p>
                                <div className="home-banner-main-content-btn-container">
                                    <Link to="templates" className="get-started-link">
                                        <button className="home-banner-main-content-btn">Create a Card</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="Group"><img src={Arrow} alt='arrow'/></div>
                        </div>
                    </div>
                    <div className="home-banner-second-content">
                        <p className="home-banner-second-content-text">Start your own digital card that fits</p>
                        <p className="home-banner-second-content-text">your needs and skills</p>
                    </div>
                </div>

            </div>
            <div>
                <HomeCards personal title="Personal Card "/>
                <HomeCards social reverse title="Social Card"/>
                <HomeCards title="Business Card "/>
            </div>
            <DigitalCard/>
            <DigitalCardMaker/>
            <div className="home-get-started-container">
                <Link to="templates" className="get-started-link">
                    <button className="home-get-started-btn">Get Started</button>
                </Link>
            </div>
            <HomeSubscribeBlog/>
        </Wrapper>

    );
}

export default Home;
