import React from 'react';
import img from '../../styles/Images/1315958.jpg';
import styles from './partners.module.css';

const Upper2 = () => {
  const email = process.env.REACT_APP_EMAIL_ADDRESS;
  const subject = process.env.REACT_APP_EMAIL_SUBJECT;

  console.log('Email:', email);
  console.log('Subject:', subject);

  return (
    <section style={{ background: '#F7F7F7' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', }}>
        <div className={styles.title} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <span>
            Partner with TedxIITGuwahati
          </span>
          <p style={{ width: '30vw', letterSpacing: '-0.5px', margin: '0', padding: '0' }}>
            <span className={styles.content}>
            In a world with short attention spans, TEDxPearlStreet makes reaching your target audience easy and cost-effective. Our audience interacts with our messaging year-round. With email engagement rates of 20%, we’ll share your sponsorship message alongside our trusted content, giving your brand the lift you’re looking for. Want to get in front of our largest audiences? Our video views have topped 1+ million in just the last three years. Become a sponsor and get in front of an engaged and large audience. 
            </span>
          </p>
          <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} className={styles.button} style={{margin:'10px'}}>
            <span>
              Get started Today
            </span>
          </a>
        </div>
        <div style={{}}>
          <img src={img} alt="imag" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
}

export default Upper2;
