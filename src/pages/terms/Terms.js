import styles from './terms.module.css'
import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter';
import Footer from '../../components/footer/Footer';
import ScrollButton from '../../components/scrollButton/scrollButton'

const Terms = () => {
    return(
        <>
        <NavBar></NavBar>
        <h1 className = {styles.main}>
            TERMS AND CONDITIONS PAGE
        </h1>
        <Newsletter/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Terms;