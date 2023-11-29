import styles from './events.module.css'
import NavBar from '../../components/navbar/Navbar'

const Events = () => {
    return(
        <>
            <NavBar></NavBar>
            <h1 className = {styles.main}>
                EVENTS PAGE
            </h1>
        </>
    )
}

export default Events