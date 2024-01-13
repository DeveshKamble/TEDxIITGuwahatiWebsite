import styles from "./aboutUs.module.css";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScrollButton from '../../components/scrollButton/scrollButton';
import AboutCarousel from "../../components/AboutUs/AboutCarousel";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'



const AboutUs = () => {

  return (
    <>
      <NavBar></NavBar>
      <div className="main">
        <div className={styles.outerbox}>
          <AboutCarousel />
          <div className={styles.innerbox}>


            {/* <Carousel className={styles.carousel} 
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              
            >
              
                 <div>
                  <svg className={styles.carouselImage} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.419 0v6.151h-6.763V24h-7.44V6.151H.453V0H21.42zm21.484 0v6.141l-12.918.01v2.946h12.918v5.73l-12.918-.009v3.03h12.918V24H22.546V0h20.357zm13.446 0c8.048 0 10.889 5.916 10.889 11.966C67.237 19.328 63.314 24 54.894 24H44.142V0h12.207zm-2.4 6.151H51.58V17.85h2.908c4.633 0 5.31-3.731 5.31-5.983 0-1.513-.474-5.715-5.85-5.715z" fill="#EC1015"></path></svg>
                  <img className={styles.carouselImage} src="\Images\AboutUs\Ted.webp" alt="" />
                  <p>Technology, Entertainment and Design,the set of global
                  conferences have been going with the spirit of ideas worth
                  spreading since 1984. TED is a global community, welcoming
                  people from every discipline and culture who seek a deeper
                  understanding of the world. TED believes passionately in the
                  power of ideas to change attitudes, lives and, ultimately, the
                  world. TED is owned by a nonprofit, nonpartisan foundation.
                  The agenda is to make great ideas accessible and spark
                  conversation TheTEDx Program is designed to help communities,
                  organizations and individuals to spark conversation TheTEDx
                  Program is designed to help communities, organizations and
                  individuals to spark conversation and connection through local
                  TED-like experiences.</p>
                </div> 
                <div>
                  <img style={{width:'50%'}} className={styles.carouselImage} src="\Images\Navbar\TEDxIITG_new.png" alt="" />
                  <p>carouselImage</p>
                </div>
        <div className={styles.outerBox3}>
          <div className={styles.mainContent}>
            <div className={styles.teamHeader}>
              <div className={styles.teamHeading}>
                <span>Meet our leadership team</span>
              </div>
              <div className={styles.teamHeader2}>
                <p>
                  The leadership team here at TEDxIITGuwahati is made up of a diverse
                  bunch of awesome humans!
                </p>
              </div>
              <div className={styles.teamHeaderContent}>
                <p>
                  We are driven by passion and curiosity. We are inspired by
                  ideas. And we want to leave the world better than we found it.
                  In our day lives you can find us working in design,
                  conservation, innovation, marketing, finance, NGOs, arts,
                  business, public policy, health and everything in between. We
                  work year round to bring TEDxIITGuwahati and all of our activities
                  to life
                </p>
              </div>
            </div>
            <div>
              <div className={styles.teamImg}>
                <div>
                  <div className={styles.imgBox} style={{
                    position: "relative",
                  }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="/Images/Team/Sravya_square.jpg" alt="Img" />
                    <div className={styles.hovereff} style={{ position: 'absolute', top: '41.2px', right: '93px', display: 'flex', flexDirection: 'column', 
                    opacity: `${isHovered ? 1 : 0}`, }}>
                      <SocialIcon className={styles.socials}url="https://www.instagram.com" target="_blank" href="www.goole.com" />
                      <SocialIcon url="https://www.linkedin.com" target="_blank" href="www.goole.com" />
                    </div>
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Sravya Vardhani</div>
                    <div className={styles.imgTitlePost}>Organizer</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Pranjal_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Pranjal Saxena</div>
                    <div className={styles.imgTitlePost}>
                      Co-Organizer & Content Head
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Ravi_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Ravi Garlay</div>
                    <div className={styles.imgTitlePost}>Content Core</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Kanv_square.png" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Kanv Choudary</div>
                    <div className={styles.imgTitlePost}>Content Core</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Rajeev.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Rajeev Verma</div>
                    <div className={styles.imgTitlePost}>Design Head</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Ashish_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>
                      Kodudula Ashish Reddy
                    </div>
                    <div className={styles.imgTitlePost}>WebOps Head</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Harsh_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Harsh Gupta</div>
                    <div className={styles.imgTitlePost}>Marketing Head</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Divyansh_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Divyansh Dadheech</div>
                    <div className={styles.imgTitlePost}>Events Head</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Manish_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Manish Kumar</div>
                    <div className={styles.imgTitlePost}>Events Core</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Sankalp_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Sankalp Setia</div>
                    <div className={styles.imgTitlePost}>Speakers Head</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="Images/Team/Pankaj1_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Pankaj Kumar Jha</div>
                    <div className={styles.imgTitlePost}>Speakers Core</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="Images/Team/Triparna Di_square.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Triparna Kalita</div>
                    <div className={styles.imgTitlePost}>Speakers Core</div>
                  </div>
                </div>
                <div>
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Punakshit.jpg" alt="Img" />
                  </div>
                  <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>Punakshit Singh</div>
                    <div className={styles.imgTitlePost}>PR & Media Head</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollButton />
    </>
  );
};

export default AboutUs;
