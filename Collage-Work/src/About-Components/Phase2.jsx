import React from 'react';
import styles from './Phase2.module.css';
import { FaUserGraduate, FaFilePdf, FaCheckCircle, FaBuilding } from 'react-icons/fa';

function Phase2() {
  const stats = [
    { icon: <FaUserGraduate />, number: "15,000+", label: "Enrolled Students" },
    { icon: <FaFilePdf />, number: "500+", label: "Verified Study Notes" },
    { icon: <FaCheckCircle />, number: "98.4%", label: "Passing Rate" },
    { icon: <FaBuilding />, number: "50+", label: "Partner Universities" }
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

export default Phase2;
