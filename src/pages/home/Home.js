import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Schedule from '../../components/Home/Schedule'
import Speakers from '../../components/Home/Speakers'
import ThemeInfo from '../../components/Home/ThemeInfo'
import Venue from '../../components/Home/Venue'
import Newsletter from '../../components/Newsletter/newsletter'
import Nomination from '../../components/Home/nomination'


const Home = () => {
    return(
        <div>
            <Navbar/>
            <Nomination/>
            <ThemeInfo/>
            <Speakers/>
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
