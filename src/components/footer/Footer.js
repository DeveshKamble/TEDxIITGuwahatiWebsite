import React from 'react';
import footerCSS from  './footerStyles.module.css';
import {
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaFacebookF,
    FaYoutube
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer class={footerCSS.footer}>
            <div class={footerCSS.footer_main}>
            <div className={footerCSS.footer_col_1}>
                <a href="#" className={footerCSS.logoTED} title="TEDxIITGuwahati">
                    <img src="/Images/footer/WhiteTextLogo.png" alt="TEDxIITGuwahati" />
                </a>
                <div className={footerCSS.footer_social}>
                    <a href="" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaInstagram />
                    </a>
                    
                    <a href="" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaLinkedinIn />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaTwitter />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaFacebookF />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaYoutube />
                    </a>
                    
                </div>
            </div>
            <div className={footerCSS.footer_col_2}>
                <h4 className={footerCSS.quick_links}>Quick Links</h4>
                <a href="#" title="Events" className={footerCSS.links_col_2}>Events</a>
                <a href="#" title="About Us" className={footerCSS.links_col_2}>About Us</a>
                <a href="#" title="Contact Us" className={footerCSS.links_col_2}>Contact Us</a>
                <a href="#" title="Privacy Policies" className={footerCSS.links_col_2}>Privacy Policies</a>
                <a href="#" title="Terms and Conditions" className={footerCSS.links_col_2}>Terms and Conditions</a>
                <a href="#" title="Refund Policies" className={footerCSS.links_col_2}>Refund Policies</a>
            </div>
                
            <div className={footerCSS.footer_col_3}>
                <div className='col-2'>

                <h6 className={footerCSS.footer_col_3_h6}> What is TEDx?</h6>

                    <p>
                        This independent TEDx event is organized under license from TED.<br />
                        In the same spirit of spreading ideas, TED has created a program called TEDx.<br />
                        TEDx is an independently organized program of local events that bring together an audience in a TED-like experience. Our event is TEDxIITGuwahati, where x means TED event organized independently.
                    </p>
                    <p>
                        At TEDxIITGuwahati, we combine videos of TED talks and live speakers to generate a deep conversation and connection between attendees. TED gives general guidelines for the TEDx program, but each individual TEDx is organized autonomously (subject to certain guidelines).<br />
                        TEDxIITGuwahati is a non-profit organization made up of volunteers. Their mission is to spread transformative ideas.
                    </p>
                </div>
            </div>
            </div>
            <div className={footerCSS.credits}>
                Copyright ©2024 - TEDxIITGuwahati
            </div>
        </footer>
    );
};

export default Footer;
