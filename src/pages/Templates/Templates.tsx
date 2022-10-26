import React from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import Business from "../../assets/img/templates/business.jpg"
import Social from "../../assets/img/templates/social.jpg"
import Personal from "../../assets/img/templates/personal.jpg"
import "./templates.scss"
import {Link} from "react-router-dom";
const Templates: React.FC = () => {

    return (
        <Wrapper>
            <div className="templates">
                <div className="templates-left-side">
                    <div className="template-card">
                        <img className="template-card-img" src={Personal} alt="personal"/>
                        <Link className='template-link' to="add/personal">
                            <button className="template-card-btn">
                                Personal
                            </button>
                        </Link>
                    </div>
                    <div className="template-card">
                        <img src={Social} alt="social"/>
                        <Link className='template-link' to="add/social">
                            <button className="template-card-btn">
                                Social
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="templates-right-side">
                    <div className="template-card">
                        <img src={Business} alt="business"/>
                        <Link className='template-link' to="add/business">
                            <button className="template-card-btn">
                                Business
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};


export default Templates;