import React from "react";
import styles from "./homeStyles.module.css";

const Schedule = () => {


  return (
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
