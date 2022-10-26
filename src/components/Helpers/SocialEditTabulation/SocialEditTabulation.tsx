import React, {memo} from 'react';
import "./socialedittabulation.scss"
import { pageFour, pageOne, pageTree, pageTwo} from "../../../features/pageSlice/pageSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import DefaultImg from "../../../assets/img/personaledit/defaultimg.png";
import PagesFooter from "../../Template/PersonalEdit/PagesFooter/PagesFooter";

const SocialEditTabulation: React.FC = memo(() => {

    const page = useAppSelector(state => state.page.page)
    const main = useAppSelector(state => state.mainState)
    const about = useAppSelector(state => state.aboutState)
    const work = useAppSelector(state => state.workState)
    const contact = useAppSelector(state => state.contactState)
    const appDispatch = useAppDispatch()
    return (

        <div className="tabulation-container">
            {page === 0 ? null :
                <div onClick={()=>appDispatch(pageOne())} className="tabulation-cards-container">
                    <p className="tabulation-title">Main</p>
                    <div className="tabulation-cards">
                        <div
                            style={{backgroundColor: `${main.backgroundColor}`}}
                            className="tabulation-cards-main-page"
                        >
                            <div className="tabulation-cards-main-page-left-side">
                                {main.name.length > 0 ?
                                    <h1
                                        style={{color: `${main.titleColor}`}}
                                        className="tabulation-cards-main-page-left-side-title"
                                    >{main.name}</h1>
                                    : null}
                                {main.profession.length > 0 ?
                                    <p className="tabulation-cards-main-page-left-side-text">{main.profession}</p>
                                    : null}
                                {main.description.length > 0 ?
                                    <p
                                        style={{color: `${main.textColor}`}}
                                        className="tabulation-cards-main-page-left-side-description"
                                    >{main.description}</p>
                                    : null}
                                {main.tags[0].length > 0 ?
                                    <button
                                        onClick={()=>appDispatch(pageTwo())}
                                        className="tabulation-cards-main-page-left-side-btn"
                                    >
                                        {main.tags[0]}
                                    </button>
                                    : null}
                                {main.tags[1].length > 0 ?
                                    <button
                                        onClick={()=>appDispatch(pageTree())}
                                        className="tabulation-cards-main-page-left-side-btn"
                                    >
                                        {main.tags[1]}

                                    </button>
                                    : null}
                                {main.tags[2].length > 0 ?
                                    <button
                                        onClick={()=>appDispatch(pageFour())}
                                        className="tabulation-cards-main-page-left-side-btn"
                                    >
                                        {main.tags[2]}
                                    </button>
                                    : null}
                            </div>
                            <div className="tabulation-cards-main-page-right-side">
                                <img
                                    src={main.photo ? main.photo : DefaultImg}
                                     className="tabulation-cards-main-page-right-side-img"
                                    alt="cv-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>}
            {page === 1 ? null :
                <div onClick={()=>appDispatch(pageTwo())} className="tabulation-cards-container">
                    <p className="tabulation-title">Work</p>
                    <div className="tabulation-cards">
                        <h4 className="tabulation-cards-title"></h4>
                        <p></p>
                    </div>
                </div>
            }
            {page === 2 ? null :
                <div onClick={()=>appDispatch(pageTree())} className="tabulation-cards-container">
                    <p className="tabulation-title">About</p>
                    <div className="tabulation-cards">
                        <div
                            style={{backgroundColor: `${about.backgroundColor}`}}
                            className="tabulation-cards-about-page"
                        >
                            <div className="tabulation-cards-about-page-left-side">
                                {about.title.length > 0 ?
                                    <h1
                                        style={{color: `${about.titleColor}`}}
                                        className="tabulation-cards-about-page-left-side-title"
                                    >{about.title}</h1>
                                    : null}
                                {about.description.length > 0 ?
                                    <p
                                        style={{color: `${about.textColor}`}}
                                        className="tabulation-cards-about-page-left-side-description"
                                    >{about.description}</p>
                                    : null}
                            </div>
                            <div className="tabulation-cards-about-page-right-side">
                                <img src={about.photo ? about.photo : DefaultImg} className="tabulation-cards-about-page-right-side-img" alt="cv-img"/>
                                <PagesFooter tabulation/>
                            </div>

                        </div>
                    </div>
                </div>
            }
            {page === 3 ? null :
                <div onClick={()=>appDispatch(pageFour())} className="tabulation-cards-container">
                    <p className="tabulation-title">Contact </p>
                    <div className="tabulation-cards">
                        <h4 className="tabulation-cards-title"></h4>
                        <p></p>
                    </div>
                </div>
            }
        </div>
    )
        ;
});


export default SocialEditTabulation;