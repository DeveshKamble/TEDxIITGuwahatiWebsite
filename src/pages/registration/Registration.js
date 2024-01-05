import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
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