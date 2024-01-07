import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Passes from '../../components/registration/Passes'
import Attend from '../../components/registration/Attend'
import GoogleMap from './google_map.js'


const Registration = () => {

    return(
        <>
        <NavBar/>
        <Passes/>
        <Attend/>
        <GoogleMap/>
        <Newsletter/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Registration
