import NavBar from '../../components/navbar/Navbar';
import styles from '../../components/partners/partners.module.css';
import Partnering from '../../components/partners/partnering';
import Upper2 from '../../components/partners/Upper2';
import Wypar from '../../components/partners/Wypar';
import OurAudience from '../../components/partners/OurAudience';
import SponsOptunity from '../../components/partners/SponsOptunity';

const Partners = () => {
  return (
    <>
      <div className={styles.main}>
        <NavBar></NavBar>
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
