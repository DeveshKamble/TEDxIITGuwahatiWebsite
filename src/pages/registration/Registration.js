import styles from './registration.module.css'
import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import { useInView } from 'react-intersection-observer'
import Passes from '../../components/registration/Passes'
import Attend from '../../components/registration/Attend'

const Registration = () => {

    return(
        <>
        <NavBar/>
        <Passes/>
        <Attend/>
        <Newsletter/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Registration