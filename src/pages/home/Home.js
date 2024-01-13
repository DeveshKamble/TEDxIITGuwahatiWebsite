import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Schedule from '../../components/Home/Schedule'
import Speaker from '../../components/speaker/Speaker'
import ThemeInfo from '../../components/Home/ThemeInfo'
import Newsletter from '../../components/Newsletter/newsletter'
import Nomination from '../../components/Home/nomination'
import Welcome from '../../components/animation/Welcome'
import Swiperr from "../../components/speaker/swiper.js"
const Home = () => {
    return(
        <div>
            <Navbar/>
            <Welcome/>
            <Nomination/>
            <ThemeInfo/>
            <Swiperr/>
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
