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
            <h3>31 January</h3><br />
            <h3>2024</h3>
          </div>
          <hr />
          <div className={styles.time}>
            <h5 >1-2 PM</h5>
          </div>
          <hr />
          <div className={styles.booking_tickets}>
            <p style={{ textAlign: 'center', color: 'black' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
            <a href='_blank' style={{ textAlign: 'center', color: 'black',textDecoration:'none',margin:'10px' }}>
              <span style={{ textAlign: 'center',border:'2px solid black',borderRadius:'10px',padding:'10px',marginTop:'5px' }}>
                Buy Tickets
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTickets;
