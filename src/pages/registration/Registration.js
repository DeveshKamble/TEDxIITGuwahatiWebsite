import styles from './registration.module.css'
import NavBar from '../../components/navbar/Navbar'

const Registration = () => {
    return(
        <>
        <NavBar></NavBar>
        <h1 className = {styles.main}>
            REGISTRATION PAGE
        </h1>
        </>
    )
}

export default Registration