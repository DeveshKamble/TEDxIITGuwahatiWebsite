import React from "react";
import styles from "./homeStyles.module.css";

const Schedule = () => {
  // const scheduleData = [
  //   {
  //     topic: "Registration",
  //     timing: "10:30 am - 11:45 am",
  //     details: "Attendee Registration",
  //   },
  //   {
  //     topic: "Session 1",
  //     timing: "12:00 pm - 1:00 pm",
  //     details: "Introduction to React",
  //   },
  //   { topic: "Lunch", timing: "1:00 pm - 2:00 pm", details: "Lunch Break" },
  // ];

  return (
    // <div>
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       padding: "10px",
    //     }}
    //   >
    //     <h5 style={{ color: "red", textAlign: "center" }}>
    //       Know about our schedule
    //     </h5>
    //     <h1 style={styles.headingStyle}>Event Schedule</h1>
    //   </div>
    //   <div className={styles.tableContainer}>
    //     <table className={styles.table}>
    //       <thead>
    //         <tr>
    //           <th style={{ width: "25vw" }}>Topic</th>
    //           <th style={{ width: "15vw" }}>Timing</th>
    //           <th style={{ width: "40vw" }}>Details Event</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {scheduleData.map((item, index) => (
    //           <tr key={index}>
    //             <td>{item.topic}</td>
    //             <td>{item.timing}</td>
    //             <td>{item.details}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className={styles.containerSchedule}>
      <div className={styles.scheduleBox1}>
        <div className={styles.scheduleBox1Child}>
          <div>
            <span className={styles.spanHead}>
              <strong>10:30 - 11:45</strong>
            </span>
            {/* <span className={styles.spanDetails}>Attendee Registration</span> */}
          </div>
        </div>

        <div className={styles.scheduleBox1Child2}>
          <div>
            <span className={styles.spanHead1}>Registration</span>
            <span className={styles.spanDetails1}>Attendee Registration</span>
          </div>
        </div>
      </div>
      <div className={styles.scheduleBox2}>
        <div className={styles.scheduleBox2Child1}>
          <div>
            <span className={styles.span2Head}>Registration</span>
            <span className={styles.span2Details}>Attendee Registration</span>
          </div>
        </div>
        <div className={styles.scheduleBox2Child2}>
          <div>
            <span className={styles.span2Head1}>
              <strong>10:30 - 11:45</strong>
            </span>
            {/* <span className={styles.span2Details1}>Attendee Registration</span> */}
          </div>
        </div>
      </div>
      <div className={styles.scheduleBox3}>
        <div className={styles.scheduleBox3Child1}>
          <div>
            <span className={styles.span3Head}>
              <strong>10:30 - 11:45</strong>
            </span>
            {/* <span className={styles.span3Details}>Attendee Registration</span> */}
          </div>
        </div>
        <div className={styles.scheduleBox3Child2}>
          <div>
            <span className={styles.span3Head1}>Registration</span>
            <span className={styles.span3Details1}>Attendee Registration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
