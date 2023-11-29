import { Link } from "react-router-dom"
import styles from './navbar.module.css'

const NavBar = () => {
    
    return(
        <div className={styles.nav}>
            <Link to = '/'>Home</Link>
            <Link to = '/Events'>Events</Link>
            <Link to = '/AboutUs'>About Us</Link>
            <Link to = '/ContactUs'>Contact Us</Link>
            <Link to = '/Partners'>Partners</Link>
            <Link to = '/Registration'>Registration</Link>
            <Link to = '/Privacy'>Privacy</Link>
            <Link to = '/Terms'>Terms and Conditions</Link>
        </div>
    )
}

export default NavBar