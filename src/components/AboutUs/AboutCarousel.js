import styles from './AboutCarousel.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';


const AboutCarousel = ()=> {
  
  return (
    <>
      <Carousel
        autoPlay={false}
        infiniteLoop={true}
        interval={2000}
      >
        <div className={styles.container}>
              <img className={styles.carouselImage}  src={'/Images/AboutUs/TED.jpeg'} alt="Logo" />
              <p className={styles.carouselContent} >
                    Technology, Entertainment and Design,the set of global
                    conferences have been going with the spirit of ideas worth
                    spreading since 1984. TED is a global community, welcoming
                    people from every discipline and culture who seek a deeper
                    understanding of the world. TED believes passionately in the
                    power of ideas to change attitudes, lives and, ultimately, the
                    world. TED is owned by a nonprofit, nonpartisan foundation.
                    The agenda is to make great ideas accessible and spark
                    conversation TheTEDx Program is designed to help communities,
                    organizations and individuals to spark conversation TheTEDx
                    Program is designed to help communities, organizations and
                    individuals to spark conversation and connection through local
                    TED-like experiences.
              </p>
              <a href={"https://www.youtube.com/watch?v=d0NHOpeczUU"} target='_blank' ><button className={styles.button} >
                Know More
              <FaArrowUpRightFromSquare  className={styles.icon} />
              </button></a>
          </div>
        <div className={styles.container}>
              <img className={`${styles.TEDxIITGuwahatiLogo}`} src={'/Images/Navbar/TEDxIITG_new.png'} alt="Logo" />
              <p className={styles.carouselContent} >
                    Technology, Entertainment and Design,the set of global
                    conferences have been going with the spirit of ideas worth
                    spreading since 1984. TED is a global community, welcoming
                    people from every discipline and culture who seek a deeper
                    understanding of the world. TED believes passionately in the
                    power of ideas to change attitudes, lives and, ultimately, the
                    world. TED is owned by a nonprofit, nonpartisan foundation.
                    The agenda is to make great ideas accessible and spark
                    conversation TheTEDx Program is designed to help communities,
                    organizations and individuals to spark conversation TheTEDx
                    Program is designed to help communities, organizations and
                    individuals to spark conversation and connection through local
                    TED-like experiences.
              </p>
              <a href={"https://www.youtube.com/watch?v=d0NHOpeczUU"} target='_blank' ><button className={styles.button} >Know More
              <FaArrowUpRightFromSquare  className={styles.icon} /></button></a>
          </div>
        <div className={styles.container}>
              <img className={styles.carouselImage} style={{width:'200px'}} src={'/Images/AboutUs/TEDx.jpeg'} alt="Logo" />
              <p className={styles.carouselContent} >
                    Technology, Entertainment and Design,the set of global
                    conferences have been going with the spirit of ideas worth
                    spreading since 1984. TED is a global community, welcoming
                    people from every discipline and culture who seek a deeper
                    understanding of the world. TED believes passionately in the
                    power of ideas to change attitudes, lives and, ultimately, the
                    world. TED is owned by a nonprofit, nonpartisan foundation.
                    The agenda is to make great ideas accessible and spark
                    conversation TheTEDx Program is designed to help communities,
                    organizations and individuals to spark conversation TheTEDx
                    Program is designed to help communities, organizations and
                    individuals to spark conversation and connection through local
                    TED-like experiences.
              </p>
              <a href={"https://www.youtube.com/watch?v=d0NHOpeczUU"} target='_blank' ><button className={styles.button} >Know More
              <FaArrowUpRightFromSquare  className={styles.icon} /></button></a>
          </div>
          
        
      </Carousel>
      {/* <CarouselSlide imgLink={TEDxIITGuwahati} /> */}
    </>
  );
}

export default AboutCarousel;;