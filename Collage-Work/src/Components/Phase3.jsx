import React from "react";
import styles from "./Phase3.module.css";
import { phase3Info } from "./CarouselData";
import { FaBookOpen, FaUserCheck, FaShieldAlt, FaCloudDownloadAlt, FaSearch } from "react-icons/fa";

function Phase3() {
  const info = phase3Info[0];
  if (!info) return null;

  const features = [
    {
      icon: <FaBookOpen className={styles.cardIcon} />,
      title: info.heading3,
      desc: info.heading4,
    },
    {
      icon: <FaUserCheck className={styles.cardIcon} />,
      title: info.heading5,
      desc: info.heading6,
    },
    {
      icon: <FaShieldAlt className={styles.cardIcon} />,
      title: info.heading7,
      desc: info.heading8,
    },
    {
      icon: <FaCloudDownloadAlt className={styles.cardIcon} />,
      title: info.heading9,
      desc: info.heading10,
    },
    {
      icon: <FaSearch className={styles.cardIcon} />,
      title: info.heading11,
      desc: info.heading12,
    },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <span className={styles.sectionBadge}>Why StudyMate</span>
          <h2 className={styles.mainTitle}>{info.heading1}</h2>
          <p className={styles.mainSub}>{info.heading2}</p>
        </div>

        <div className={styles.gridContainer}>
          {features.map((item, idx) => (
            <div key={idx} className={`${styles.featureCard} glass-card`}>
              <div className={styles.iconContainer}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Phase3;
