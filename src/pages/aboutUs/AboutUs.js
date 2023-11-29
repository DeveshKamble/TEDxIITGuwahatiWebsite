import styles from './aboutUs.module.css'
import NavBar from '../../components/navbar/Navbar'

const AboutUs = () => {
    return(
        <>
        <NavBar></NavBar>
        <h1 className = {styles.main}>
            ABOUT US PAGE
        </h1>
        </>
    )
}

export default AboutUs