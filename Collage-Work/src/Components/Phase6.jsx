import React from 'react';
import styles from './Phase6.module.css';
import { FaUserGraduate, FaFileAlt, FaPercentage, FaBookmark } from 'react-icons/fa';

function Phase6() {
  const stats = [
    { icon: <FaUserGraduate />, number: "15,000+", label: "Active Students" },
    { icon: <FaFileAlt />, number: "500+", label: "Verified Study Notes" },
    { icon: <FaPercentage />, number: "98.4%", label: "Exam Success Rate" },
    { icon: <FaBookmark />, number: "50+", label: "Academic Subjects" }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={`${styles.statsCard} glass-card`}>
        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <div key={index} className={styles.statBox}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <h3 className={styles.statNumber}>{item.number}</h3>
              <p className={styles.statLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Phase6;