import React from 'react';
import styles from './partners.module.css';

const Upper2 = () => {
  const email = process.env.REACT_APP_EMAIL_ADDRESS;
  const subject = process.env.REACT_APP_EMAIL_SUBJECT;

  console.log('Email:', email);
  console.log('Subject:', subject);

  return (
    <section style={{ background: `url('./Images/partners/DSC04279.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 5fr 1fr', justifyContent: 'center', alignItems: 'center', width: '50vw', backgroundColor: 'rgba(0, 0, 0, 0.7)' }} className={styles.title}>
          <div>
            <span style={{ color: '#fff' }}>Partner with TEDxIITGuwahati</span>
          </div>
          <div>
            <div
              className={styles.content}
              style={{
                width: '100%',
                letterSpacing: '-0.5px',
                margin: '0',
                padding: '0',
                color: '#fff',
              }}
            >
              In a world with short attention spans, TEDxIITGuwahati <br />makes reaching your target audience easy and cost-effective.<br /> Our audience interacts with our messaging year-round. With <br />email engagement rates of 20%, we’ll share your<br /> sponsorship message alongside our trusted content, giving <br />your brand the lift you’re looking for. Want to get in front of <br />our largest audiences? Our video views have topped 1+ <br />million in just the last three years. Become a sponsor and get <br />in front of an engaged and large audience.
            </div>
          </div>
          <div>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
              className={styles.button}
            >
              <span>Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upper2;
