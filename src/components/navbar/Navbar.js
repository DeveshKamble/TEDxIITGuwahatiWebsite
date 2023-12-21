import { Link } from "react-router-dom"
import styles from './navbar.module.css'
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
    const [navicon, setnavicon] = useState(true);
    const [shortnav, setshortnav] = useState(false);
    shortnav ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
    return (
        <>
        <div className={styles.nav}>
            <div className={styles.left}>
                <Link id={styles.lg} to='#'>
                    <img src="/Images/Navbar/TEDxIITG_new.png" alt="" className={styles.logo1} />
                    <div className={styles.logo2}></div>
                </Link>
            </div>
            <div className={styles.btn}>
                        <button 
                        className={styles["toggle"]} 
                        onClick={()=>{
                            setnavicon(!navicon);
                            setshortnav(!shortnav);
                            }}>
                        {
                            navicon ? <IoMenu className={styles.ll}/>
                            :<IoMdClose className={styles.ll} />
                        }
                        </button>
                    </div>
            
            <div className={styles.right}>
                <Link to='/' className={styles.lin}>HOME</Link>
                <Link to='/' className={styles.lin}>ABOUT US</Link>
                <Link to='/' className={styles.lin}>EVENTS</Link>
                <Link to='/' className={styles.lin}>CONTACT US</Link>
                <Link to='/' className={styles.lin}>SPONSORS</Link>
                <Link to='/' className={styles.lin}>CONTACT US</Link>
                <Link to='/' className={styles.lin} id={styles["red"]}>BUY TICKET</Link>
            </div>
        </div>
        {
                shortnav ?
                        <div className={styles.sidehead}>
                            <div className={styles.head}>
                                <Link to='/' className={styles.lin1}>HOME</Link>
                                <Link to='/' className={styles.lin1}>ABOUT US</Link>
                                <Link to='/' className={styles.lin1}>EVENTS</Link>
                                <Link to='/' className={styles.lin1}>CONTACT US</Link>
                                <Link to='/' className={styles.lin1}>SPONSORS</Link>
                                <Link to='/' className={styles.lin1}>CONTACT US</Link>
                                <Link to='/' className={styles.lin1} id={styles["red1"]}>BUY TICKET</Link>
                            </div>
                        </div>
                    : <div></div>
            }
        {shortnav ? <div className={styles.black} onClick={()=>{
            setshortnav(false);
            setnavicon(true);
        }}></div>: null}
        </>
    )
}

export default NavBar