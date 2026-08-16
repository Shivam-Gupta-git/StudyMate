import React from 'react';
import styles from './Template.module.css';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

function Template1({ Template1 }) {
  if (!Template1 || Template1.length === 0) return null;

  return (
    <div className={styles.main_info_container}>
      {Template1.map((templateItem, index) => (
        <div key={index} className={`${styles.info_container1} glass-card`}>
          <div className={styles.badgeWrap}>
            <FaGraduationCap className={styles.badgeIcon} />
            <span>Academic Distinction</span>
          </div>
          <h2 className={styles.info_cheat_sheet1}>{templateItem.heading1}</h2>
          <p className={styles.info_cheat_sheet2}>{templateItem.heading2}</p>
          <div className={styles.pillFeatures}>
            <span><FaCheckCircle className={styles.checkIcon} /> Semester-wise Notes</span>
            <span><FaCheckCircle className={styles.checkIcon} /> Verified PYQs</span>
            <span><FaCheckCircle className={styles.checkIcon} /> 100% Free Access</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Template1;