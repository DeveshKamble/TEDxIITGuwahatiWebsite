// ThemeInfo.jsx

import React, { useEffect, useRef } from 'react';
import BuyTickets from './BuyTickets';
import styles from './homeStyles.module.css';

const ThemeInfo = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <a className={styles.span} href='/ContactUs'>
          <img src='/svgs/handshake.svg' alt='handshake' height={28} className={styles.divA} />
          <div>Become a partner</div>
        </a>
      </div>
      <article className={styles.article}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Resurgence
            </h2>
            <h3 className={styles.subheading}>Ideas which can reach the world</h3>
            <p className={styles.parastyle}>
              The theme for TEDxIITGuwahati 2024 is Resurgence. What’s that, you ask? It’s about fathoming the importance of taking break in process of reaching our goals.
            </p>
            <p className={styles.parastyle}>
            In today's fast-paced world, it is important to take breaks. These breaks aren't just about relaxing; they're like a timeout to help us grow. Taking a step back lets us think about our journey, what really matters, and it re-energizes us. Like the cicada rests to come back stronger, our breaks become the fertile ground for personal changes.
            During these breaks, we recharge our energy and also learn more about ourselves. It's a time of self-discovery, where we find hidden strengths and better understand what we want.The lessons learned during these breaks are like a guide for the next steps in our journey
            </p>
            <p className={styles.parastyle}>
            The outcome of our breaks might not always be obvious success, but the experience is priceless. It's like a caterpillar in a cocoon — change takes time and patience. When we take a break, we get to let go of old habits, improve our skills, and come out stronger.
            </p>
            <p className={styles.parastyle}>
            So, taking a break is like celebrating our ability to grow. Whether it's spent relaxing or learning something new, these pauses help us discover more about ourselves and become better people. By honoring rest, we set the stage for a more meaningful and purposeful journey, recognizing that the process is just as important as the destination.
            </p>
            <span className={styles.linkSpan}>
              <a href='/aboutUs' style={{ fontSize: '0.8em' }} className={styles.link}>
                READ ABOUT TED AND TED<sup>x</sup>
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
