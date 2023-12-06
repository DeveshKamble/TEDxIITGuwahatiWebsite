import styles from './partners.module.css';
import Partnering from './partnering';
import Upper2 from './Upper2';
import Wypar from './Wypar';
import OurAudience from './OurAudience';
import SponsOptunity from './SponsOptunity';

const Partners = () => {
  return (
    <>
      <div className={styles.main}>
        {/* <NavBar></NavBar> */}
        <Partnering />
        <Upper2 />
        <Wypar />
        <OurAudience />
        <SponsOptunity />
      </div>
    </>
  );
}

export default Partners;
