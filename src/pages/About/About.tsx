import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import AboutImg from "../../assets/img/aboutimg.svg"
import "./about.scss"

const About: React.FC = () => {
    return (
        <Wrapper>
            <div className="about-banner">
                <h1>About Syinkd </h1>
                <p>
                    "Syinkd is your way to leave a lasting impression on others"
                </p>
            </div>
            <div className="about-main-text">
                <div className="about-main-text-container">
                    <h1>Our Mission</h1>
                    <p className="about-main-text-container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                    </p>
                    <p className="about-main-text-container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis
                    </p>
                    <p className="about-main-text-container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                    </p>
                </div>
                <div className="about-img-container">
                    <img className="about-img" src={AboutImg} alt="about img"/>
                </div>
            </div>
        </Wrapper>
    );
}

export default About;