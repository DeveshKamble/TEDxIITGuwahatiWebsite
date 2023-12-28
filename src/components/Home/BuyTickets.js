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
        <div className='innerbox'>
          <div className='date'>
            <h3 style={{ textAlign: 'center', color: 'black' }}>31 January</h3><br />
            <h3 style={{ textAlign: 'center', color: 'black' }}>2024</h3>
          </div>
          <hr />
          <div className='date'>
            <h5 style={{ textAlign: 'center', color: 'black' }}>1-2 PM</h5>
          </div>
          <hr />
          <div className='booking_tickets'>
            <p style={{ textAlign: 'center', color: 'white' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
            <a href='_blank' style={{ textAlign: 'center', color: 'white',textDecoration:'none',margin:'10px' }}>
              <span style={{ textAlign: 'center',border:'2px solid white',borderRadius:'10px',padding:'10px',marginTop:'5px' }}>
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
