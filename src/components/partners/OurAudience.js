import React from 'react';
import styles from './partners.module.css';

const Strip = ({ image, title, content }) => {
  return (
    <div>
      <img src={image} alt={title} style={{ width: '85%' }} />
      <h1 style={{fontSize:'30px'}}>{title}</h1>
      <p className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

const OurAudience = () => {
  const sponsorshipItems = [
    { title: 'ATTENDEES', content: '25k in 2022', image: '/svgs/attendees.svg'},
    { title: 'SOCIAL REACH', content: '100K+ Fans & Followers', image: '/svgs/social_reach.svg' },
    { title: 'YOUTUBE VIEWS', content: '1m+ views', image:  '/svgs/youtube_views.svg' },
    { title: 'IMPRESSIONS', content: '32M+ Impressions', image: '/svgs/impressions.svg' },
  ];
  

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  };

  const itemStyle = {
    width: '100%', // Each item takes full width initially
    marginBottom: '16px', // Add some spacing between items
    boxSizing: 'border-box', // Include padding and border in the width
    maxWidth: '200px', // Set max width to 200px for responsiveness
  };

  return (
    <section style={{background:'#F7F7F7'}}>
      <div>
        <div style={{padding:'40px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <h1 className={styles.title}>
            Our Audience
          </h1>
          <p style={{width:'60vw'}}>
            <span className={styles.content}>
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
