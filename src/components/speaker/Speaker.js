import React, { useState } from 'react';
import styles from './speaker.module.css';
import { Link } from 'react-router-dom';
import SpeakerModal from './SpeakerModal';

const Speaker = () => {
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
                        <Link className={styles.item} onClick={()=>{setmodal(true)}}>
                            <div className={styles.image_section}>
                                <img src="./Images/partners/sample_image.webp" alt="" id={styles['image_']} />
                            </div>
                            <h3 className={styles.nameheading}>Theo Kapodistrias</h3>
                            <div className={styles.speak_caption}> Executive Director & Licensee </div>
                        </Link>
                        <Link className={styles.item} onClick={()=>{setmodal(true)}}>
                            <div className={styles.image_section}>
                                <img src="./Images/partners/sample_image.webp" alt="" id={styles['image_']} />
                            </div>
                            <h3 className={styles.nameheading}>Theo Kapodistrias</h3>
                            <div className={styles.speak_caption}> Executive Director & Licensee </div>
                        </Link>
                        <Link className={styles.item} onClick={()=>{setmodal(true)}}>
                            <div className={styles.image_section}>
                                <img src="./Images/partners/sample_image.webp" alt="" id={styles['image_']} />
                            </div>
                            <h3 className={styles.nameheading}>Theo Kapodistrias</h3>
                            <div className={styles.speak_caption}> Executive Director & Licensee </div>
                        </Link>
                        <Link className={styles.item} onClick={()=>{setmodal(true)}}>
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