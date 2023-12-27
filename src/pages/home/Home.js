import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Schedule from '../../components/Home/Schedule'
import Speakers from '../../components/Home/Speakers'
import ThemeInfo from '../../components/Home/ThemeInfo'
import Venue from '../../components/Home/Venue'
import Newsletter from '../../components/Newsletter/newsletter'


const Home = () => {
    return(
        <div>
            <Navbar/>
            <ThemeInfo/>
            <Speakers/>
            <Venue/>
            <Schedule/>
            <Newsletter/>
            <Footer/>
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