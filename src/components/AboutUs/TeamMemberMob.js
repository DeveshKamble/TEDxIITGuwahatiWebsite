import { useEffect, useState } from 'react';
import styles from './TeamMember.module.css';
import { SocialIcon } from 'react-social-icons';
import useAos from '../../utilities/Hooks/useAOS'

const TeamMemberMob = ({ title, designation, image, handle }) => {
    const aos = useAos();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = document.querySelector(`.${styles.imgBoxm}`);
      if (imageElement) {
        const rect = imageElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Check if the image is in the center of the screen
        const isInCenter = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
        setIsScrolled(isInCenter);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <div
        className={styles.imgBoxm}
        style={{
          position: 'relative',
        }}
      >
        <img src={`/Images/Team/${image}`} alt="Img" />
        <div className={styles.redboxm}></div>
        {(
          <div
            className={styles.hovereffm}
            style={{
              position: 'absolute',
              top: '41.2px',
              right: '93px',
              display: 'flex',
              flexDirection: 'column',
            }
        }
        
        data-aos="fade-up"
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
