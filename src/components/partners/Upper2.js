import React from 'react';
import styles from './partners.module.css';
import useWindowWidth from '../../utilities/Hooks/UseWindowWidth.js'

const Upper2 = () => {
  const email = process.env.MARKETING_EMAIL_ADDRESS;
  const subject = process.env.MARKETING_EMAIL_SUBJECT;
  const windowWidth = useWindowWidth();
  const titlewidth = windowWidth < 435 ? styles.title_under435: styles.title;
  console.log(process.env.MARKETING_EMAIL_ADDRESS)
  console.log('Email:', email);
  console.log('Subject:', subject);

  return (

    windowWidth < 800 ?
    <section style={{ background: '#F7F7F7' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center', alignItems: 'center', paddingTop:'40px' }}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', paddingBottom:'40px'  }} className={titlewidth}>
        <div style={{textAlign:'center'}}>
          <span >Partner with TEDxIITGuwahati</span>
        </div>
        <div>
          <div
            className={styles.content}
            style={{
              width: '100%',
              // letterSpacing: '-0.5px',
              margin: '0',
              padding: '20px 30px 20px 30px',
            }}
          >
            In a world with short attention spans, TEDxIITGuwahati makes reaching your target audience easy and cost-effective. Our audience interacts with our messaging year-round. With email engagement rates of 20%, we’ll share your sponsorship message alongside our trusted content, giving your brand the lift you’re looking for. Want to get in front of our largest audiences? Become a sponsor and get in front of an engaged and large audience.
          </div>
        </div>
        <div>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
            className={styles.button}
            style={{margin:'10px'}}
          >
            <span>Sponsor</span>
          </a>
        </div>
      </div>
      <img src='./Images/partners/DSC04279.png' alt="imag" style={{ width: '100%', height: 'auto' }} />
    </div>
  </section>
  
      :
      <section style={{ background: `url('./Images/partners/DSC04279.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 5fr 1fr', justifyContent: 'center', alignItems: 'center', width: '50vw', backgroundColor: 'rgba(0, 0, 0, 0.7)', height:'500px' }} className={styles.title}>
            <div>
              <p style={{ color: '#fff', marginTop:'50px' }}>Partner with TEDxIITGuwahati</p>
            </div>
            <div>
              <div
                className={styles.content}
                style={{
                  width: '100%',
                  letterSpacing: '0px',
                  margin: '0',
                  padding: '0',
                  color: '#fff',
                }}
              >
                In a world with short attention spans, TEDxIITGuwahati <br />makes reaching your target audience easy and cost-effective.<br /> Our audience interacts with our messaging year-round. With <br />email engagement rates of 20%, we’ll share your<br /> sponsorship message alongside our trusted content, giving <br />your brand the lift you’re looking for. Want to get in front of <br />our largest audiences? Our video views have topped 1+ <br />million in just the last three years. Become a sponsor and get <br />in front of an engaged and large audience.
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Upper2;
