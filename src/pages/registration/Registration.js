import styles from './registration.module.css'
import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'

const Registration = () => {
    return(
        <>
        <NavBar></NavBar>
        <h1 className = {styles.main}>
            REGISTRATION PAGE
        </h1>
        <Newsletter/>
        <Footer/>
        </>
    )
}

export default Registration