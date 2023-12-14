import React from 'react';
import styles from './partners.module.css';
import  UseStrip from './CustomHook/Strip';

const Strip = ({ image, title, content }) => {
  
  const contentLines = content.split('<br/>');

  
  const linesWithMargin = contentLines.map((line, index) => (
    <React.Fragment key={index}>
      <div dangerouslySetInnerHTML={{ __html: line }} />
      {index < contentLines.length - 1 && <div style={{ marginBottom: '10px' }} />}
    </React.Fragment>
  ));

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '45%', margin: 'auto' }}
        />
        <div
          style={{
            fontSize: '24px',
            fontWeight: '350',
            textAlign: 'center',
          }}
        >
          {title}
        </div>
        <p className={styles.content} style={{ width: '55vw', textAlign: 'center', fontWeight: '250' }}>
          {linesWithMargin}
        </p>
      </div>
    </div>
  );
};

const SponsOptunity = () => {
  const email = process.env.EMAIL_ADDRESS;
  const subject = process.env.EMAIL_SUBJECT;
  // const Strip = UseStrip();

  const sponsorshipItems = [
    { title: 'ALL YEAR ROUND', content: 'Executive Committee<br/> Host Committee<br/> Special Events<br/>Sustainability Partner', image: '/svgs/year-round.svg' },
    { title: 'LIVE CONFERENCES', content: 'Global Partner<br/>Technology Lounge Host<br/> Connection Cafe Host<br/>After Party Host', image: '/svgs/attendees.svg' },
    { title: 'IN-KIND SUPPORT', content: 'Media Partner<br/> Marketing PR Partner<br/> Co-Working Partner<br/>Printing Partner', image: '/svgs/kind_support.svg' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  };

  const itemStyle = {
    width: '100vw',
    marginBottom: '16px',
    boxSizing: 'border-box',
    maxWidth: '200px',
  };

  return (
    <section>
      <div>
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <h1 className={styles.title}>
            <span>
              Sponsorship Opportunities
            </span>
          </h1>
          <p style={{ width: '35vw' }} className={styles.content}>
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
