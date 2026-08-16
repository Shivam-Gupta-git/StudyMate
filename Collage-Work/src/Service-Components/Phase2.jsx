import React from 'react';
import styles from './Phase2.module.css';
import { Phase2Info } from './Data_Storage_con';
import { FaLaptopCode, FaShieldAlt, FaCloudDownloadAlt, FaSearch, FaSync, FaCheckCircle } from 'react-icons/fa';

function Phase2() {
  const info = Phase2Info[0];
  if (!info) return null;

  const features = [
    { icon: <FaLaptopCode />, title: info.heading1, desc: info.heading2 },
    { icon: <FaShieldAlt />, title: info.heading3, desc: info.heading4 },
    { icon: <FaCloudDownloadAlt />, title: info.heading5, desc: info.heading6 },
    { icon: <FaSearch />, title: info.heading7, desc: info.heading8 },
    { icon: <FaSync />, title: info.heading9, desc: info.heading10 },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.gridSection}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.serviceCard} glass-card`}>
              <div className={styles.iconCircle}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.highlightsBox} glass-card`}>
          <h2 className={styles.highlightTitle}>{info.heading11}</h2>
          <div className={styles.listGrid}>
            <div className={styles.listItem}><FaCheckCircle className={styles.checkIcon} /> {info.heading12}</div>
            <div className={styles.listItem}><FaCheckCircle className={styles.checkIcon} /> {info.heading13}</div>
            <div className={styles.listItem}><FaCheckCircle className={styles.checkIcon} /> {info.heading14}</div>
            <div className={styles.listItem}><FaCheckCircle className={styles.checkIcon} /> {info.heading15}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phase2;