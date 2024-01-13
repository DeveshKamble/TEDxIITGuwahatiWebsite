import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Passes from '../../components/registration/Passes'
import Attend from '../../components/registration/Attend'
import Modal from '../../components/verficationModal/VerficationModal'
import GoogleMap from './google_map.js'


const Registration = () => {

    return(
        <>
        <NavBar/>
        <Passes/>
        <Attend/>
        <Modal/>
        <GoogleMap isVisible = {true}/>
        <Newsletter/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Registration
