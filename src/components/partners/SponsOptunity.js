import React from 'react';
import styles from './partners.module.css';

const Strip = ({ image, title, content }) => {
  return (
    <div>
      <img src={image} alt={title} style={{ width: '80%' }} />
      <h1 style={{fontSize:'30px'}}dangerouslySetInnerHTML={{ __html: title }}/>
      <p className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

const SponsOptunity = () => {

  const email = process.env.EMAIL_ADDRESS;
  const subject = process.env.EMAIL_SUBJECT;

  const sponsorshipItems = [
    { title: 'YEAR <br/>ROUND', content: 'Executive Committee<br/> Host Committee<br/> Special Events<br/>Sustainability Partner', image: '/svgs/year-round.svg' },
    { title: 'LIVE CONFERENCES', content: 'Global Partner<br/>Technology Lounge Host<br/> Connection Cafe Host<br/>After Party Host', image: '/svgs/attendees.svg' },
    { title: 'IN-KIND SUPPORT', content: 'Media Partner<br/> Marketing PR Partner<br/> Co-Working Partner<br/>Printing Partner', image: '/svgs/kind_support.svg' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  };

  const itemStyle = {
    width: '100%', 
    marginBottom: '16px', 
    boxSizing: 'border-box', 
    maxWidth: '200px', 
  };

  return (
    <section >
      <div>
        <div style={{padding:'40px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <h1 className={styles.title}>
            <span>
              Sponsorship Opportunities
            </span>
          </h1>
          <p style={{width:'60vw'}} className={styles.content}>
            Below are just a few of this year's sponsorship opportunities. To learn more, just click the button below
          </p>
        </div>
        <div style={containerStyle}>
          {sponsorshipItems.map((item, index) => (
            <div key={index} style={itemStyle}>
              <Strip title={item.title} content={item.content} image={item.image} />
              <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} className={styles.button}>
                <span>
                  Get started today
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsOptunity;
