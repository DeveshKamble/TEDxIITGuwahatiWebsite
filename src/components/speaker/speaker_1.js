import SpeakerModal from './SpeakerModal';
import { Link } from "react-router-dom"
import styles from "./speaker_1.module.css"
import useAOS from '../../utilities/Hooks/useAOS';
import React, { useState } from 'react';
const Speaker_1 = () => {
    const aos = useAOS();
    document.body.style.overflowX = "hidden"
    const [speakermodal, setmodal] = useState(false);
    const closeModal = () => setmodal(false);
    return (
        <>
            <div className={styles.container}>
                {
                    speakermodal && <SpeakerModal set={closeModal} />
                }
                <div className={styles.speaker}>
                    <Link className={styles.item} onClick={() => { setmodal(true) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/partners/sample_image.webp" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ashish Bhaiya</h1>
                            <p className={styles.des}>Ultra pro max developer</p>
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/partners/sample_image.webp" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ashish Bhaiya</h1>
                            <p className={styles.des}>Ultra pro max developer</p>
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/partners/sample_image.webp" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ashish Bhaiya</h1>
                            <p className={styles.des}>Ultra pro max developer</p>
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/partners/sample_image.webp" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ashish Bhaiya</h1>
                            <p className={styles.des}>Ultra pro max developer</p>
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/partners/sample_image.webp" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ashish Bhaiya</h1>
                            <p className={styles.des}>Ultra pro max developer</p>
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/partners/sample_image.webp" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ashish Bhaiya</h1>
                            <p className={styles.des}>Ultra pro max developer</p>
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/partners/sample_image.webp" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ashish Bhaiya</h1>
                            <p className={styles.des}>Ultra pro max developer</p>
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/partners/sample_image.webp" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ashish Bhaiya</h1>
                            <p className={styles.des}>Ultra pro max developer</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Speaker_1