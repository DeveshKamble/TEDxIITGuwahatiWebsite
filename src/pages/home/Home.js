import styles from './homeStyles.module.css'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return(
        <>
            <NavBar/>
            <h1 className = {styles.main}>
                HOME PAGE
            </h1>
            <Footer/>
        </>
    );
}

export default Home