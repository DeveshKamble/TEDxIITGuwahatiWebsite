// import React, {useEffect, useState} from 'react';
// import Navbar from "../../../components/navbar/Navbar";
// import theme_21 from "../../../assets/theme_21.png";
// import logo_21 from "../../../assets/2021_logo.png";
// import Footer from "../../../components/footer/Footer"
// import styles from "./Event_22.module.css";
// import Modal from "./Modal"
// import Card from "./speakerCard";
// import Card2 from "./memberCard";
// import Data from "./speaker'23_Data"
// import Aashish from "./speakers21/Aashish.png"
// import Aditya from "./speakers21/Aditya.jpg"
// import Bhagvan from "./speakers21/Bhagvan.JPG"
// import Bidisha from "./speakers21/Bidisha.jpg"
// import Nisha from "./speakers21/Nisha.jpg"
// import Prabhagaran from "./speakers21/Prabhagaran.jpg"
// import Rudy from "./speakers21/Rudy.jpg"
// import Seema from "./speakers21/Seema.png"
// import Shiva from "./speakers21/Shiva.jpg"
// import Anvita from "./team21/anvita_kodru.png"
// import Ayush from "./team21/Ayush Srivastava.jpg"
// import Emily from "./team21/Emily Huiling.jpg"
// import Govind from "./team21/Govind Singh.jpg"
// import Jaideep from "./team21/Jaideep Buksagarmath.jpg"
// import JaikishanMansukhani from "./team21/JaikishanMansukhani.jpg"
// import Nishant from "./team21/Nishant.jpg"
// import Ritik from "./team21/Ritik Singh.jpg"
// import Samrarth from "./team21/SamarthSaraswat.jpg"
// import Shivangi from "./team21/ShivangiKumar.jpg"
// import Sree from "./team21/SreesiddeshBhavanasi.jpeg"
// import Sudarshan from "./team21/Sudarshan Birla.jpg"
// import Vishwa from "./team21/VishwaprasannaH.jpg"

// const Event_22 = () => {
//   const [selectedSpeaker, setSelectedSpeaker] = useState(null);

//   const openModal = ({name, about, description, image}) => {
//     setSelectedSpeaker({name, about, description,image});
//   };

//   const closeModal = () => {
//     setSelectedSpeaker(null);
//   };
//   return (
//     <div>
//       <Navbar />
//       <div id={styles.body}>
//         <header>
//           <div>
//             <img src={logo_23} alt="theme logo" />
//             <div id={styles.theme}>
//               <h1>Theme 2023:</h1>
//               <h1>The Silent Letter</h1>
//             </div>
//           </div>
//           <h2>February 12, 2023</h2>
//         </header>
//         <main>
//           <div id={styles.banner}>
//             <img src={theme_23} alt="theme'23" />
//           </div>
//           <div id={styles.about}>
//             <h2>About</h2>
//             <p>
//               The Theme of TEDxIITGuwahati is ‘The Silent Letter’, Everything
//               has value, whether good or bad, large or small. Nothing in this
//               world is useless, although we often mistake that for the case.
//               Young people are constantly encouraged to create a colossal
//               impact, which causes them to focus primarily on the big problems,
//               but small things are necessary for great things to occur. The word
//               "Rendezvous" without its silent letters is not even a word
//               anymore. Similarly, we have a lot of 'silent letters' around us,
//               which help distinguish many aspects and impart more meaning to
//               life. Small things matter. Making sacrifices can help you become
//               the person you've always wanted to be, but these sacrifices are
//               hardly ever acknowledged. Billionaires never talk about the time
//               they don't get to spend with their loved ones; they only talk
//               about becoming billionaires.
//             </p>
//           </div>
//           <div id={styles.speakers}>
//             <h2>Speakers</h2>
//             <div id={styles.speakerContainer}>
//             <Card func={() => openModal({ name: 'Plabita Borthakur', about: 'Artist', description: `${Data.Plabita}`, image: `${Platiba}` })} name='Plabita Borthakur' id='#Platiba' image={Platiba} />
//             <Card func={() => openModal({name: 'Seema Lokhandwala',about: 'Elephant biologist',description: `${Data.Seema}`,image: `${Seema}`})} name='Seema Lokhandwala' id='#Seema' image={Seema} />
//             <Card func={() => openModal({name: 'Neil D Silva',about: 'Author',description: `${Data.Neil}`,image: `${Neil}`})} name='Neil D Silva' id='#Neil' image={Neil} />
//             <Card func={() => openModal({name: 'Neeraj Kumar Sharma',about: 'IITG Professor',description: `${Data.Neeraj}`,image: `${Neeraj}`})} name='Neeraj Kumar Sharma' id='#Neeraj' image={Neeraj} />
//             <Card func={() => openModal({name: 'Kamal Jeswani',about: 'Financial Coach',description: `${Data.Kamal}`,image: `${Kamal}`})} name='Kamal Jeswani' id='#Kamal' image={Kamal} />
//             <Card func={() => openModal({name: 'Divanshu Kumar',about: 'Co-founder & CEO',description: `${Data.Divanshu}`,image: `${Divanshu}`})} name='Divanshu Kumar' id='#Divanshu' image={Divanshu} />

//             </div>
//           </div>
//           <div id={styles.team}>
//             <h2>Organizing Team</h2>
//             <div id={styles.teamContainer}>
//             <Card2 name='Jaikishan Mansukhani' about='Organizer' image={JaikishanMansukhani}/>
//             <Card2 name='Sreesiddesh Bhavanasi' about='Co-Organizer' image={Sree}/>
//             <Card2 name='Anvita Kodru' about='Content Head' image={Anvita}/>
//             <Card2 name='Shivangi Kumar' about='WebOps Head' image={Shivangi}/>
//             <Card2 name='Vishwaprasanna H' about='Design Head' image={Vishwa}/>
//             <Card2 name='Samarth Saraswat' about='Marketing and Branding Head' image={Samrarth}/>
              
//             </div>
//           </div>
//         </main>


//         {selectedSpeaker && (
//           <Modal
//             name={selectedSpeaker.name}
//             about={selectedSpeaker.about}
//             image={selectedSpeaker.image}
//             description = {selectedSpeaker.description}
//             func={closeModal}
//           />
//         )}
//         {selectedSpeaker && <div onClick={closeModal} id={styles.overlay}></div>}





//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Event_22;
