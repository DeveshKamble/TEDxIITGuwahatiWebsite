import React from 'react';
import styles from './homeStyles.module.css';

const Schedule = () => {
  const scheduleData = [
    { topic: 'Registration', timing: '10:30 am - 11:45 am', details: 'Attendee Registration' },
    { topic: 'Session 1', timing: '12:00 pm - 1:00 pm', details: 'Introduction to React' },
    { topic: 'Lunch', timing: '1:00 pm - 2:00 pm', details: 'Lunch Break' },
  ];

  return (
    <div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'10px'}}>
      <h5 style={{ color: 'red', textAlign: 'center' }}>Know about our schedule</h5>
        <h1 style={styles.headingStyle}>
          Event Schedule
        </h1>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: '25vw' }}>Topic</th>
              <th style={{ width: '15vw' }}>Timing</th>
              <th style={{ width: '40vw' }}>Details Event</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index}>
                <td>{item.topic}</td>
                <td>{item.timing}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
