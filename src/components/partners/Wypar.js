import React from 'react'
import infaud from '../../styles/svgs/inf_aud.svg';
import brndalign from '../../styles/svgs/brand_alignment.svg';
import corpinf from '../../styles/svgs/corp_obj.svg';
import leader from '../../styles/svgs/leadership.svg';
import styles from './partners.module.css'

const Strip = ({ image, title, content }) => {
  return (
    <div>
      <img src={image} alt={title} style={{ width: '80%' }} />
      <div style={{fontSize:'30px',fontWeight:'bold'}}>{title}</div>
      <p className={styles.content} style={{width:'25vw'}} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

const Wypar = () => {

  const sponsorshipItems = [
    { title: 'Influential Audience', content: 'Connect your brand with the most influential, audience in the Washington DC metropolitan area - dreamers, doers, influencers.', image: infaud },
    { title: 'Brand Alignment', content: 'Align your brand with TEDxPearlStreet and our mission to spread ideas, build community, and change lives.', image: brndalign },
    { title: 'Corporate Objectives', content: 'Achieve specific corporate objectives with our customized and integrated approach to partnerships.', image: corpinf },
    { title: 'Thought Leadership', content: 'Be a leader in bringing together corporations, start-ups, entrepreneurs, and individuals who are inspired by remarkable thinking', image: leader },
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
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  };

  return (
    <section>
      <div>
        <div>
          <div className={styles.title} style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'2em 0px '}}>
            <span>Why Partners with us?</span>
          </div>
        </div>
        <div style={containerStyle}>
        <div style={itemStyle}>
            <Strip title={sponsorshipItems[0].title} content={sponsorshipItems[0].content} image={sponsorshipItems[0].image} />
          </div>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[1].title} content={sponsorshipItems[1].content} image={sponsorshipItems[1].image} />
          </div>
        </div>
        <div style={containerStyle}>
        <div style={itemStyle}>
            <Strip title={sponsorshipItems[2].title} content={sponsorshipItems[2].content} image={sponsorshipItems[2].image} />
          </div>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[3].title} content={sponsorshipItems[3].content} image={sponsorshipItems[3].image} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wypar