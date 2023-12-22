import styles from './terms.module.css'
import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter';
import Footer from '../../components/footer/Footer';

const Terms = () => {
    return(
        <>
        <NavBar></NavBar>
        <h1 className = {styles.main}>
            TERMS AND CONDITIONS PAGE
        </h1>
        <Newsletter/>
        <Footer/>
        </>
    )
}

export default Terms;