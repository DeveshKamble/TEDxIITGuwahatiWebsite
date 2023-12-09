
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer id="footer">


            <div className="footer-col-1">


                <a href="#" className="logoTED" title="TEDxIITGuwahati">
                    <img src=" " alt="TEDxIITGuwahati" />
                </a>


                <div className="social">


                    <a href="#" className="youtube" target="_blank" title="Youtube">
                        <i className="fab fa-youtube" aria-hidden="true"></i>
                    </a>


                    <a href="#" className="facebook" target="_blank" title="Facebook">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>


                    <a href="#" className="instagram" target="_blank" title="Instagram">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>


                    <a href="#" className="twitter" target="_blank" title="Twitter">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>


                    <a href="#" className="linkedin" target="_blank" title="Linkedin">
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
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