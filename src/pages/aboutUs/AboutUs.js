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

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  console.log(isHovered);

  return (
    <>
      <NavBar></NavBar>
      <div className="main">
        <div className={styles.outerbox}>
          <AboutCarousel />
        </div>
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
                {/* <p className={styles.reflect}>
                  The leadership team here at TEDxIITGuwahati is made up of a diverse
                  bunch of awesome humans!
                </p> */}
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
      <Footer />
      <ScrollButton />
    </>
  );
};

export default AboutUs;
