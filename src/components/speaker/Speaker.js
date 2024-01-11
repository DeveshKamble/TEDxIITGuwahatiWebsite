import React, { useState } from 'react';
import styles from './speaker.module.css';
import { Link } from 'react-router-dom';
import SpeakerModal from './SpeakerModal';
import useAOS from '../../utilities/Hooks/useAOS';

const Speaker = () => {
    const aos = useAOS();
    document.body.style.overflowX = "hidden"
    const [speakermodal, setmodal] = useState(false);
    const closeModal = () => setmodal(false);
    return (
        <>
            <div className={styles.container}>
                {
                    speakermodal && <SpeakerModal set={closeModal}/> 
                }
                <div className={styles.container_1}>
                    <div className={styles.speak}>
                        <Link className={styles.item} onClick={()=>{setmodal(true)}}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
                            <div className={styles.image_section}
                            >
                                <img src="./Images/partners/sample_image.webp" alt="" id={styles['image_']} />
                            </div>
                            <h3 className={styles.nameheading}>Theo Kapodistrias</h3>
                            <div className={styles.speak_caption}> Executive Director & Licensee </div>
                        </Link>
                        <Link className={styles.item} onClick={()=>{setmodal(true)}}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                            <div className={styles.image_section}>
                                <img src="./Images/partners/sample_image.webp" alt="" id={styles['image_']} />
                            </div>
                            <h3 className={styles.nameheading}>Theo Kapodistrias</h3>
                            <div className={styles.speak_caption}> Executive Director & Licensee </div>
                        </Link>
                        <Link className={styles.item} onClick={()=>{setmodal(true)}}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="2000"
                            data-aos-delay="500">
                            <div className={styles.image_section}>
                                <img src="./Images/partners/sample_image.webp" alt="" id={styles['image_']} />
                            </div>
                            <h3 className={styles.nameheading}>Theo Kapodistrias</h3>
                            <div className={styles.speak_caption}> Executive Director & Licensee </div>
                        </Link>
                        <Link className={styles.item} onClick={()=>{setmodal(true)}}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="2500"
                            data-aos-delay="600">
                            <div className={styles.image_section}>
                                <img src="./Images/partners/sample_image.webp" alt="" id={styles['image_']} />
                            </div>
                            <h3 className={styles.nameheading}>Theo Kapodistrias</h3>
                            <div className={styles.speak_caption}> Executive Director & Licensee </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Speaker