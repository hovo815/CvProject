import React from 'react';
import "./footer.scss"
import FooterLogo from "../../Logo/FooterLogo";
import {Link} from "react-router-dom";
import Twitter from "../../../assets/img/social/twitter.svg"
import Facebook from "../../../assets/img/social/facebook.svg"
import YouTube from "../../../assets/img/social/youtube.svg"
import Mail from "../../../assets/img/social/mail.svg"
import Phone from "../../../assets/img/social/phone.svg"


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-row">
                <div className="footer-row-columns">
                    <FooterLogo/>
                </div>
                <div className="footer-row-columns">
                    <h3 className="footer-row-columns-title">Card templates</h3>
                    <Link className="footer-row-columns-links" to='/'>Personal Card</Link>
                    <Link className="footer-row-columns-links" to='/'>Social Card</Link>
                    <Link className="footer-row-columns-links" to='/'>Business Card</Link>
                </div>
                <div className="footer-row-columns">
                    <h3 className="footer-row-columns-title">Quick Links</h3>
                    <Link className="footer-row-columns-links" to='/'>Pricing</Link>
                    <Link className="footer-row-columns-links" to='/'>Contact</Link>
                    <Link className="footer-row-columns-links" to='/about'>About</Link>
                </div>
                <address className="footer-row-columns">
                    <div className="footer-row-columns-social-links-container">
                        <a rel="noreferrer" href="https://twitter.com/" className="footer-row-columns-social-link">
                            <img src={Twitter} alt="twitter"/>
                        </a>
                        <a rel="noreferrer" href="https://www.facebook.com/" className="footer-row-columns-social-link">
                            <img src={Facebook} alt="facebook"/>
                        </a>
                        <a rel="noreferrer" href="https://www.youtube.com/" className="footer-row-columns-social-link">
                            <img src={YouTube} alt="youtube"/>
                        </a>
                    </div>
                    <a className="footer-row-columns-contact-link" href="tel:name@email.com">
                        <img src={Phone} alt="phone"/>+ 19001221321</a>
                    <a className="footer-row-columns-contact-link" href="mailto:name@email.com">
                        <img src={Mail} alt="mail"/>Info@teest.com</a>
                </address>
            </div>
            <p className="copy-right">&copy; @Company name 2022. All Rights Reserved</p>
        </footer>
    );
};


export default Footer;



