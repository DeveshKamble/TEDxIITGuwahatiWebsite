import React from 'react';
import './Footer.css';
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillYoutube
} from 'react-icons/ai';


import { FiLink } from 'react-icons/fi';






const Footer = () => {
    return (
        <footer id="footer">




            <div className="footer-col-1">




                <a href="#" className="logoTED" title="TEDxIITGuwahati">
                    <img src=" " alt="TEDxIITGuwahati" />
                </a>




                <div className="social">


                   


                <a href="" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram size={32} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={32} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size={32} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <AiFillFacebook size={32} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <AiFillYoutube size={32} />
            </a>
                   




                </div>
            </div>
















            <div className="footer-col-2">




                <h4>Quick Links</h4>
                <a href="#" title="Events">Events</a>
                <a href="#" title="About Us">About Us</a>
                <a href="#" title="Contact Us">Contact Us</a>
                <a href="#" title="Privacy Policies">Privacy Policies</a>  
                <a href="#" title="Terms and Conditions">Terms and Conditions</a>
                <a href="#" title="Refund Policies">Refund Policies</a>                
            </div>




















            <div className="footer-col-3">




                <h6>What is TEDx?</h6>




                <div className="col-2">




                    <p>
                        This independent TEDx event is organized under license from TED.<br/>
In the same spirit of spreading ideas, TED has created a program called TEDx.<br/>
TEDx is an independently organized program of local events that bring together an audience in a TED-like experience. Our event is TEDxIITGuwahati, where x means TED event organized independently.
                        </p>




                    <p>
                        At TEDxIITGuwahati, we combine videos of TED talks and live speakers to generate a deep conversation and connection between attendees. TED gives general guidelines for the TEDx program, but each individual TEDx is organized autonomously (subject to certain guidelines).<br/>
TEDxIITGuwahati is a non-profit organization made up of volunteers. Their mission is to spread transformative ideas.
                        </p>
                </div>
            </div>
            <div className="credits">
                Copyright ©2024 - TEDxIITGuwahati
            </div>
        </footer>
    );
};




export default Footer;
