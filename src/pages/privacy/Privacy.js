import styles from './privacy.module.css'
import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'

const Privacy = () => {
    return(
        <>
        <NavBar></NavBar>
        <h1 className = {styles.main}>
            PRIVACY
        </h1>
        <Newsletter/>
        <Footer/>
        </>
    )
}

export default Privacy