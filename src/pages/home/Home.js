import styles from './homeStyles.module.css'
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
    useEffect(()=>{
    },[]);
    const { ref: myref, inView: boxisvisible, entry } = useInView();
    const { ref: myref2, inView: boxisvisible2, entry2 } = useInView();
    const { ref: myref3, inView: boxisvisible3, entry3 } = useInView();
    const { ref: myref4, inView: boxisvisible4, entry4 } = useInView();
    const { ref: myref5, inView: boxisvisible5, entry5 } = useInView();
    const [redl,setredl]=useState(0);
    // useEffect(() => {
    //     if (!hasRunEffect) {
    //         // Your logic that should run only once
    //         console.log('This runs only once!');
    //         setHasRunEffect(true);
    //     }
    //     const handleScroll = () => {
    //       const scrollTop = window.scrollY;
    //       setredl(scrollTop);
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, [hasRunEffect]);
   
    return (
        <div>
            {/* <div className={styles.container_1}>
                <img src="" alt="" className={styles.main_face} />
                <div className={styles.main_heading}>TEDxIITGuwahati</div>
            </div> */}
            
            <div className={styles.upper}>
            <div className={styles.mainhead}>
                <div className={styles.head1}>TEDxIITguwahati</div>
                <div className={styles.head1_min}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil, illo vel laboriosam earum omnis eos doloremque! Quae, odio asperiores?</div>
            </div>
            <div className={styles.homeimage}>
                <img src="/Images/main_home.jpeg" alt="" />
            </div>
            </div>
            <div className={styles.strap}>
                <h1>Some of our Events</h1>
            </div>
            <div className={styles.container_2}>
                <section className={styles.timeline}>
                    <div className={styles.line}>
                        <div className="redline" style={{height: redl}}></div>
                    </div>
                    <section className={styles.space}>
                    <div className={styles.tagg}>
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.iconv}/>
                        </div>
                        <div ref={myref} className={`${styles.box} ${boxisvisible ? styles.inView : styles.ishidden}`}>
                            <Link to="#" className={styles.link_box}>
                                {/* image */}
                                <img src='/Images/theme_23.png' alt="" className={styles.image} id={styles["im1"]} />
                                <div className={styles.part2}>
                                    <h3 className={styles.heading}>IITGuwahati2023</h3>
                                    <div className={styles.dis}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at et numquam, rem exercitationem accusantium, possimus adipisci fuga repellendus iure voluptate nihil? Eveniet.
                                    </div>
                                </div>
                                <div className={styles.triangle}></div>
                            </Link>
                        </div>
                        
                        <div className={styles.dateWrapper}>
                            <div id={styles["date1"]}>November 28, 2020</div>
                        </div>
                    </section>
                    <section className={styles.space}>
                    <div className={styles.tagg}>
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.iconv}/>
                        </div>
                    <div ref={myref2} className={`${styles.box} ${boxisvisible2 ? styles.inView : ''}`}>
                            <Link to="#" className={styles.link_box}>
                                {/* image */}
                                <img src="/Images/theme22.jpeg" alt="" className={styles.image} id={styles["im1"]} />
                                <div className={styles.part2}>
                                    <h3 className={styles.heading}>IITGuwahati2023</h3>
                                    <div className={styles.dis}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at et numquam, rem exercitationem accusantium, possimus adipisci fuga repellendus iure voluptate nihil? Eveniet.
                                    </div>
                                </div>
                                <div className={styles.triangle1}></div>
                            </Link>
                        </div>
                        <div className={styles.dateWrapper}>
                            <div id={styles["date1"]}>November 28, 2020</div>
                        </div>
                    </section>
                    <section className={styles.space}>
                    <div className={styles.tagg}>
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.iconv}/>
                        </div>
                    <div ref={myref3} className={`${styles.box} ${boxisvisible3 ? styles.inView : ''}`}>
                            <Link to="#" className={styles.link_box}>
                                {/* image */}
                                <img src="/Images/theme21.png" alt="" className={styles.image} id={styles["im1"]} />
                                <div className={styles.part2}>
                                    <h3 className={styles.heading}>IITGuwahati2023</h3>
                                    <div className={styles.dis}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at et numquam, rem exercitationem accusantium, possimus adipisci fuga repellendus iure voluptate nihil? Eveniet.
                                    </div>
                                </div>
                                <div className={styles.triangle}></div>
                            </Link>
                        </div>
                        <div className={styles.dateWrapper}>
                            <div id={styles["date1"]}>November 28, 2020</div>
                        </div>
                    </section>
                    <section className={styles.space}>
                    <div className={styles.tagg}>
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.iconv}/>
                        </div>
                    <div ref={myref4} className={`${styles.box} ${boxisvisible4 ? styles.inView : ''}`}>
                            <Link to="#" className={styles.link_box}>
                                {/* image */}
                                <img src="/Images/theme19.png" alt="" className={styles.image} id={styles["im1"]} />
                                <div className={styles.part2}>
                                    <h3 className={styles.heading}>IITGuwahati2023</h3>
                                    <div className={styles.dis}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at et numquam, rem exercitationem accusantium, possimus adipisci fuga repellendus iure voluptate nihil? Eveniet.
                                    </div>
                                </div>
                                <div className={styles.triangle1}></div>
                            </Link>
                        </div>
                        <div className={styles.dateWrapper}>
                            <div id={styles["date1"]}>November 28, 2020</div>
                        </div>
                    </section>
                    <section className={styles.space}>
                    <div className={styles.tagg}>
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.iconv}/>

                        </div>
                    <div ref={myref5} className={`${styles.box} ${boxisvisible5 ? styles.inView : ''}`}>
                            <Link to="#" className={styles.link_box}>
                                {/* image */}
                                <img src="/Images/theme16.png" alt="" className={styles.image} id={styles["im1"]} />
                                <div className={styles.part2}>
                                    <h3 className={styles.heading}>IITGuwahati2023</h3>
                                    <div className={styles.dis}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at et numquam, rem exercitationem accusantium, possimus adipisci fuga repellendus iure voluptate nihil? Eveniet.
                                    </div>
                                </div>
                                <div className={styles.triangle}></div>
                            </Link>
                        </div>
                        <div className={styles.dateWrapper}>
                            <div id={styles["date1"]}>November 28, 2020</div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default Home