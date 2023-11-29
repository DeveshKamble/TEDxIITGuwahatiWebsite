import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Events from './pages/events/eventsIndex'
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
