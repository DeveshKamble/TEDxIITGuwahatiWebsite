import { FaCross, FaFacebook, FaInstagram, FaLink, FaLinkedin, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './SpeakerModal.module.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const SpeakerModal=({set})=>{
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "scroll";
        };
      }, []);
    return ReactDOM.createPortal(
        <>
            <div className={styles.overlay}></div>
        <div className={styles.container}>
            <div className={styles.box}>
                
                <button className={styles.close} onClick={set}>
                    <div className={styles.icon}>
                    <FaTimes className={styles.x} />
                    </div>
                    Close
                </button>
                <div className={styles.modal}>
                    <div className={styles.header}>
                    <div className={styles.img}>
                        <img src="./Images/partners/sample_image.webp" alt="" id={styles['image_']} />
                    </div>
                        <div className={styles.name}>
                            <h2>Theo Kapodistrias</h2>
                            <ul className={styles.soc_list}>
                                <li className="">
                                    <Link>
                                    <FaLinkedin className={styles.link}/>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                    <FaXTwitter className={styles.link}/>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                    <FaInstagram className={styles.link}/>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                    <FaFacebook className={styles.link}/>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                    <FaLink className={styles.link}/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h3 id={styles['posi']}>Co-Curator and Head of Speaker Coaching</h3>
                    </div>
                    <div className={styles.content}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus consequatur, unde cumque necessitatibus mollitia facere atque alias quas nemo accusamus nobis debitis voluptas sed possimus itaque quo harum suscipit iure.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente reiciendis voluptatibus temporibus. Iure provident quod blanditiis? Saepe corrupti eum, aliquid, culpa numquam labore autem earum libero minima, odio molestiae sapiente maxime atque. Modi quod dignissimos deserunt ut ducimus odio delectus consequatur aliquam, alias, officiis at, sit totam perspiciatis ipsa?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus voluptas dolores iure perferendis ex ea quidem minima, inventore cum, qui deleniti? Dolor magni perspiciatis eveniet blanditiis, labore facilis. Non ipsa voluptatum ratione recusandae hic laborum cupiditate officia reiciendis, deserunt incidunt commodi aut odit laboriosam! Necessitatibus consectetur aspernatur pariatur nesciunt nulla, ut accusantium illo quas omnis ipsum ex, ducimus deserunt velit incidunt exercitationem, quibusdam consequuntur! Ea qui ex totam! Animi sit quod perferendis quae voluptas voluptatibus, soluta, corporis hic id nobis ullam eaque facilis expedita atque consequatur corrupti at? Error quod quos omnis reiciendis repellat distinctio rem! Nihil, fugiat beatae.</p>
                    </div>
                </div>
            </div>
        </div>
        </>,
    document.body
    )
}
export default SpeakerModal