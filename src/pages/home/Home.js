import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Schedule from '../../components/Home/Schedule'
import Speaker from '../../components/speaker/Speaker'
import ThemeInfo from '../../components/Home/ThemeInfo'
import Venue from '../../components/Home/Venue'
import Newsletter from '../../components/Newsletter/newsletter'
import Nomination from '../../components/Home/nomination'
import Welcome from '../../components/animation/Welcome'

const Home = () => {
    return(
        <div>
            <Navbar/>
            {/* <Welcome/> */}
            <Nomination/>
            <ThemeInfo/>
            <Speaker/>
            <Venue/>
            <Schedule/>
            <Newsletter/>
            <Footer/>
            <ScrollButton/>
        </div>
    )
}

export default Home

//Animation
//Themeinfo-->Hobart
    //Buytickets-->Hobart
//Speakers =>Empty
//Venue-->MIT
//schedule-->CIVILlINES
