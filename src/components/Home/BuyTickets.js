import React from 'react';
import styles from './homeStyles.module.css'

const BuyTickets = () => {
  return (
    <div style={{
      position: 'sticky',
      top: '70px',
      display:'flex',
      justifyContent:'flex-end',
    }}>
      <div className={styles.conference_box} >
        <div className={styles.innerbox}>
          <div className={styles.date}>
            <h3>11 February</h3><br />
            <h3>2024</h3>
          </div>
          <hr className={styles.line}/>
          <div className={styles.time}>
            <h5 >9 AM to 5 PM</h5>
          </div>
          <hr className={styles.line}/>
          <div className={styles.booking_tickets}>
            <p style={{ textAlign: 'center', color: 'white' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
            <a href='/Registration' style={{ textAlign: 'center', color: 'white',textDecoration:'none',margin:'10px' }}>
              <button style={{ textAlign: 'center',border:'2px solid white',borderRadius:'10px',padding:'10px',marginTop:'10px' }}>
                BUY TICKETS
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTickets;
