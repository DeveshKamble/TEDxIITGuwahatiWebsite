import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Events from './pages/events/eventsIndex'
import Event_23 from "./pages/events/2023/Event_23.js"
import Event_22 from "./pages/events/2022/Event_22.js"
// import Event_21 from "./pages/events/2023/Event_21.js"
import AboutUs from './pages/aboutUs/AboutUs'
import ContactUs from './pages/contactUs/ContactUs'
import Partners from './pages/partners/Partners'
import Registration from './pages/registration/Registration'
import Privacy from './pages/privacy/Privacy'
import Terms from './pages/terms/Terms'


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Events/2023" element={<Event_23/>} />
        <Route path="/Events/2022" element={<Event_22/>} />
        {/* <Route path="/Events/2021" element={<Event_21/>} /> */}
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Registration" element={<Registration/>}></Route>
      </Routes>
    </Router>


  

    
  );
}

export default App;
