import styles from './Welcome.module.css'
import LogoAnimation from './LogoAnimation.js'

const Welcome = () => {

    return(
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div>
                        <p>
                            Welcome to
                        </p>
                    </div>
                    <div>
                        <img src='/Images/footer/WhiteTextLogo.png'></img>
                    </div>
                </div>
                <div className={styles.logo}>
                    {/* <Tilt> */}
                        <img className={styles.arrow} src='/Images/animation/LogoArrow.png'></img>
                        <img className={styles.ripples} src='/Images/animation/LogoRipples.png'></img>
                    {/* </Tilt>  */}
                    {/* {/* <LogoAnimation className={styles.animation}/> */}
                </div>
            </div>
        </>
    );
}

export default Welcome