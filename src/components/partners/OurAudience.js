import React from 'react';
import styles from './partners.module.css';

const Strip = ({ image, title, content }) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '45%',
            margin: 'auto'
          }} />
        <div
          style={{
            fontSize: '24px',
            fontWeight: '350',
            textAlign: 'center'
          }}>
          {title}
        </div>
        <p className={styles.content}
          style={{
            width: '55vw',
            textAlign: 'center',
            fontWeight: '250'
          }}

          dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

const OurAudience = () => {
  const sponsorshipItems = [
    { title: 'ATTENDEES', content: '25k in 2022', image: '/svgs/attendees.svg' },
    { title: 'SOCIAL REACH', content: '100K+ Fans & Followers', image: '/svgs/social_reach.svg' },
    { title: 'YOUTUBE VIEWS', content: '1m+ views', image: '/svgs/youtube_views.svg' },
    { title: 'IMPRESSIONS', content: '32M+ Impressions', image: '/svgs/impressions.svg' },
  ];


  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  };

  const itemStyle = {
    width: '100em',
    marginBottom: '16px',
    boxSizing: 'border-box',
    maxWidth: '200px',
  };

  return (
    <section style={{ background: '#F7F7F7' }}>
      <div>
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <h1 className={styles.title}>
            <span>
            Our Audience
            </span>
          </h1>
          <p style={{ width: '45vw' }} className={styles.content}>
            <span >
              Since 2019, TEDxIITGuwahati has been working to galvanize the local community, bringing together corporations, community organizations, entrepreneurs, and individuals, providing a platform for exceptional ideas, and a catalyst for profound change.
            </span>
          </p>
        </div>
        <div style={containerStyle}>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[0].title} content={sponsorshipItems[0].content} image={sponsorshipItems[0].image} />
          </div>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[1].title} content={sponsorshipItems[1].content} image={sponsorshipItems[1].image} />
          </div>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[2].title} content={sponsorshipItems[2].content} image={sponsorshipItems[2].image} />
          </div>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[3].title} content={sponsorshipItems[3].content} image={sponsorshipItems[3].image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAudience;
