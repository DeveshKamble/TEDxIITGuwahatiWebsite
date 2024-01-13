import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectCoverflow, Navigation, Pagination,Keyboard,HashNavigation } from 'swiper/modules';
// Import Swiper styles
import { Link } from 'react-router-dom';
import SpeakerModal from './SpeakerModal';
import useAOS from '../../utilities/Hooks/useAOS';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
const Swiperr=()=>{
    const aos = useAOS();
    document.body.style.overflowX = "hidden"
    const [speakermodal, setmodal] = useState(false);
    const closeModal = () => setmodal(false);
      return (
        <>
        <div className='container'>
                {
                    speakermodal && <SpeakerModal set={closeModal} />
                }
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        grabCursor={false}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectCoverflow,  Navigation, Pagination ,Keyboard,]}
        className="mySwiper"
      >
        <SwiperSlide className='item'>
        <Link className='' onClick={() => { setmodal(!speakermodal) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
          <img src="./Images/partners/sample_image.webp" />
          <div className="name">
            <h1>Shivam Gupta</h1>
          <p>Web Ops Head tedX</p>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <Link className='' onClick={() => { setmodal(!speakermodal) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
          <img src="./Images/partners/sample_image.webp" />
          <div className="name">
            <h1>Shivam Gupta</h1>
          <p>Web Ops Head tedX</p>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <Link className='' onClick={() => { setmodal(!speakermodal) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
          <img src="./Images/partners/sample_image.webp" />
          <div className="name">
            <h1>Shivam Gupta</h1>
          <p>Web Ops Head tedX</p>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <Link className='' onClick={() => { setmodal(!speakermodal) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
          <img src="./Images/partners/sample_image.webp" />
          <div className="name">
            <h1>Shivam Gupta</h1>
          <p>Web Ops Head tedX</p>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <Link className='' onClick={() => { setmodal(!speakermodal) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
          <img src="./Images/partners/sample_image.webp" />
          <div className="name">
            <h1>Shivam Gupta</h1>
          <p>Web Ops Head tedX</p>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <Link className='' onClick={() => { setmodal(!speakermodal) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
          <img src="./Images/partners/sample_image.webp" />
          <div className="name">
            <h1>Shivam Gupta</h1>
          <p>Web Ops Head tedX</p>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <Link className='' onClick={() => { setmodal(!speakermodal) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
          <img src="./Images/partners/sample_image.webp" />
          <div className="name">
            <h1>Shivam Gupta</h1>
          <p>Web Ops Head tedX</p>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className='item'>
        <Link className='' onClick={() => { setmodal(!speakermodal) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="400">
          <img src="./Images/partners/sample_image.webp" />
          <div className="name">
            <h1>Shivam Gupta</h1>
          <p>Web Ops Head tedX</p>
          </div>
        </Link>
        </SwiperSlide>
        </Swiper>
        </div>
        </>
      );
    };
export default Swiperr
