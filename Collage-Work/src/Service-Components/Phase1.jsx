import React from 'react';
import styles from './Phase1.module.css';
import { Phase1Info } from './Data_Storage_con';

function Phase1() {
  const info = Phase1Info[0];
  if (!info) return null;

  return (
    <section className={styles.heroSection}>
      <div className={styles.contentBox}>
        <span className={styles.badge}>StudyMate Services</span>
        <h1 className={styles.title}>{info.heading1}</h1>
        <p className={styles.description}>{info.heading2}</p>
      </div>
    </section>
  );
}

export default Phase1;