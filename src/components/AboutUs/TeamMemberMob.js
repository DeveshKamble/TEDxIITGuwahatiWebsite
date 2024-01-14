import React, { useEffect, useState } from 'react';
import styles from './TeamMember.module.css';
import { SocialIcon } from 'react-social-icons';
import useAos from '../../utilities/Hooks/useAOS';

const TeamMemberMob = ({ title, designation, image, handle }) => {
  const [scrolled, setScrolled] = useState(false);
  const aos = useAos();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight/2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolled]);

  console.log("window height:" + window.innerHeight);
  console.log(scrolled);
  return (
    <>
      <div
        className={`${styles.imgBoxm} ${scrolled ? styles.scrolled : ''}`}
        style={{
          position: 'relative',
        }}
      >
        <img src={`/Images/Team/${image}`} alt="Img" />
        {(
          <div
            className={styles.hovereffm}
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-duration="1500"
            data-aos-delay="700"
          >
            <SocialIcon url="https://www.linkedin.com" target="_blank" href={handle} />
          </div>
        )}
      </div>
      <div className={styles.imgTitle}>
        <div className={styles.imgTitleName}>{title}</div>
        <div className={styles.imgTitlePost}>{designation}</div>
      </div>
    </>
  );
};

export default TeamMemberMob;
