// ThemeInfo.jsx

import React, { useEffect, useRef } from 'react';
import BuyTickets from './BuyTickets';
import styles from './homeStyles.module.css';

const ThemeInfo = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.span}>
          <img src='/svgs/handshake.svg' alt='handshake' height={28} className={styles.divA} />
          <div>become a partner</div>
        </span>
      </div>
      <article className={styles.article}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              <small className={styles.small}>THIS YEAR'S THEME IS</small>
              Ripple Effect
            </h2>
            <h3 className={styles.subheading}>Ideas which can reach the world</h3>
            <p className={styles.parastyle}>
              Imagine a place where ideas aren’t just celebrated, they’re amplified. Welcome to TEDxHobart, a dynamic
              platform that shines a spotlight on Tasmania’s incredible innovation, inspiration, and big ideas.
            </p>
            <p className={styles.parastyle}>
              TEDxHobart isn’t just another event – it’s a stage where Tasmania’s brightest minds come together to share
              their thoughts with a local audience that holds considerable influence. But it doesn’t stop there; their
              ideas also resonate worldwide through online sharing, reaching people across the globe.
            </p>
            <p className={styles.parastyle}>
              Think of it as a space where conversations run deep and connections are made. Imagine trailblazers from all
              corners of our state, those who are changing the world with their extraordinary projects. TEDxHobart
              doesn’t just showcase these visionaries; it propels them onto a larger stage, multiplying the impact of
              their groundbreaking work.
            </p>
            <p className={styles.parastyle}>
              The theme for TEDxHobart 2024 is Ripple Effect. What’s that, you ask? It’s just like dropping a pebble into
              a pond and watching the ripples spread far and wide.
            </p>
            <p className={styles.parastyle}>
              Picture this: a single disturbance causing a chain reaction that reverberates through different parts of
              a complex system. It’s not just a concept; the ripple effect can be seen in fields like finance, technology,
              law, agriculture, history, community development, conservation, the arts, and tourism. Imagine how a small
              shift in one area can have a mighty impact across many others.
            </p>
            <p className={styles.parastyle}>
              So, if you’re excited about the power of ideas, if you’re intrigued by the potential of small actions
              creating big waves, then TEDxHobart is the place to be. Join us in exploring the incredible stories of how
              tiny ripples created right here in Tasmania are shaping our world in astonishing ways.
            </p>
            <span className={styles.linkSpan}>
              <a href='/aboutUs' style={{ fontSize: '0.8em' }} className={styles.link}>
                READ ABOUT TEDX
              </a>
            </span>
          </div>
          <div style={{ width: '40vw' }} className='buyTickets'>
            <BuyTickets />
          </div>
        </div>
      </article>
    </div>
  );
};

export default ThemeInfo;
