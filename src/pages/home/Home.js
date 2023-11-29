import styles from './homeStyles.module.css'
import NavBar from '../../components/navbar/Navbar'

const Home = () => {
    return(
        <>
            <NavBar/>
            <h1 className = {styles.main}>
                HOME PAGE
            </h1>
        </>
    );
}

export default Home