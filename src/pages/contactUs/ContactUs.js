import styles from './contactUs.module.css'
import NavBar from '../../components/navbar/Navbar'

const ContactUs = () => {
    return(
        <>
        <NavBar></NavBar>
        <h1 className = {styles.main}>
            CONTACT US PAGE
        </h1>
        </>
    )
}

export default ContactUs