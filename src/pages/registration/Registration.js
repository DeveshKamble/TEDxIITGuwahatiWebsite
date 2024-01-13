import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Passes from '../../components/registration/Passes'
import Attend from '../../components/registration/Attend'
<<<<<<< Updated upstream
import Modal from '../../components/verficationModal/VerficationModal'
import ConferenceVenue from '../../components/Home/Venue'
=======
import GoogleMap from './google_map.js'
>>>>>>> Stashed changes


const Registration = () => {

    return(
        <>
        <NavBar/>
        <Passes/>
        <Attend/>
<<<<<<< Updated upstream
        <ConferenceVenue/>
=======
        <GoogleMap isVisible = {true}/>
>>>>>>> Stashed changes
        <Newsletter/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Registration
