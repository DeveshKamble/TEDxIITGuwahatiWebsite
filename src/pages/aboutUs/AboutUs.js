import styles from "./aboutUs.module.css";
import NavBar from "../../components/navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="main">
        <div className={styles.outerbox}>
          <div className={styles.innerbox}>
            <div className={styles.contentbox}>
              <div className={styles.heading}>TED</div>
              <div className={styles.content}>
                <p>
                  Technology, Entertainment and Design,the set of global
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
                  TED-like experiences.
                </p>
                <p>
                  At TEDx events,
                  a screening of TED Talks videos— ora combination of live
                  presenters and TED Talks videos— sparks deep conversation and
                  connections at the local level. TEDx events are planned and
                  coordinated independently, under a free license granted by
                  TED.
                </p>
              </div>
            </div>
            <div className={styles.contentbox2}>
              <div className={styles.heading2}>
                TED
                <div>
                  <sup>x</sup>
                </div>
              </div>
              <div className={styles.content2}>
                <p>
                  In the spirit of ideas worth spreading, TEDx is a program of
                  local, self-organized events that bring people to get her to
                  share a TED-like experience. Ata TEDx event, TED Talks video
                  and live speakers combine to spark deep discussion and
                  connection in a small group. These local, self-organized
                  events are branded TEDx, where x = independently organized TED
                  event. The TED Conference provides general guidance for the
                  TEDx program, but individual TEDx events are
                  self-organized.(Subject to certain rules and regulations.)
                </p>
                <p>
                  The TEDx Program is designed to help communities,
                  organizations and individuals to spark conversation and
                  connection through local TED-like experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.outerbox2}>
          <div className={styles.contentbox3}>
            <iframe
              className={styles.vdoframe}
              // width="710"
              // height="415"
              src="https://www.youtube.com/embed/d0NHOpeczUU?si=u2AxAGd0nERdJ1E4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
                  <div className={styles.imgBox}>
                    <img src="/Images/Team/Sravya_square.jpg" alt="Img" />
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
                    <img src="/Image.jpeg" alt="Img" />
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
    </>
  );
};

export default AboutUs;
