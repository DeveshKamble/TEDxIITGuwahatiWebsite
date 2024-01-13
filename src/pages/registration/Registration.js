import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Passes from '../../components/registration/Passes'
import Venue from '../../components/Home/Venue'
import Attend from '../../components/registration/Attend'
import Modal from '../../components/verficationModal/VerficationModal'
import ConferenceVenue from '../../components/Home/Venue'


const Registration = () => {

    return(
        <>
        <NavBar/>
        <Passes/>
        <Attend/>
        <Venue/>
        <Newsletter/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Registration
