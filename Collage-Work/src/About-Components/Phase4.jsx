import React from 'react';
import styles from './Phase4.module.css';
import { Phase4Info } from './Data_Storage_Con';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

function Phase4() {
  const info = Phase4Info[0];
  if (!info) return null;

  return (
    <section className={styles.sectionWrapper}>
      <div className={`${styles.storyCard} glass-card`}>
        <div className={styles.imageGrid}>
          <img src={info.image1} alt="CSE Laboratory" className={styles.imgMain} />
        </div>

        <div className={styles.textContent}>
          <span className={styles.badge}>Our Journey</span>
          <h2 className={styles.title}>{info.heading1}</h2>
          <p className={styles.description}>{info.heading2}</p>
          <p className={styles.description}>{info.heading3}</p>

          <div className={styles.checklist}>
            <div><FaCheckCircle className={styles.checkIcon} /> 100% Free & Open Academic Access</div>
            <div><FaCheckCircle className={styles.checkIcon} /> Peer-Reviewed & Faculty Curated</div>
            <div><FaCheckCircle className={styles.checkIcon} /> Optimized for Mobile & Desktop Reading</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phase4;