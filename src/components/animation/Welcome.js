import { rotateInUpLeft } from 'react-animations';
import styles from './Welcome.module.css'
import { easeInOut, motion, useAnimation } from 'framer-motion';
import {Tilt} from 'react-tilt'

const Welcome = () => {

    const controls = useAnimation()

    const rotateArrow = async() => {
        await controls.start({rotate:-90, transition:{duration:1}})
        console.log('Done')
    }

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
                    {/* <Tilt scale={10}> */}
                        <img className={styles.arrow} src='/Images/animation/LogoArrow.png'></img>
                        <img className={styles.ripples} src='/Images/animation/LogoRipples.png'></img>
                    {/* </Tilt> */}
                </div>
            </div>
        </>
    );
}

export default Welcome