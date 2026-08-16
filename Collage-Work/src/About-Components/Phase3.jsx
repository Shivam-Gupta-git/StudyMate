import React from 'react';
import styles from './Phase3.module.css';
import { Phase3Info } from './Data_Storage_Con';
import { FaBullseye, FaShieldAlt, FaCode, FaUsers } from 'react-icons/fa';

function Phase3() {
  const info = Phase3Info[0];
  if (!info) return null;

  const principles = [
    {
      icon: <FaBullseye />,
      title: info.heading1 || "Our Mission",
      desc: info.heading3 || "Accessible and collaborative learning environment for all students."
    },
    {
      icon: <FaCode />,
      title: "Modern Tech Stack",
      desc: info.heading5 || "Built with React, Vite, Node.js, and modern CSS design tokens."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Access",
      desc: info.heading6 || "Verified note downloads and secure user authentication."
    },
    {
      icon: <FaUsers />,
      title: "Community First",
      desc: info.heading8 || "Empowering peer learning and student-moderated content."
    }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <span className={styles.badge}>Core Principles</span>
          <h2 className={styles.title}>What Drives StudyMate</h2>
          <p className={styles.subtitle}>{info.heading2}</p>
        </div>

        <div className={styles.gridContainer}>
          {principles.map((p, idx) => (
            <div key={idx} className={`${styles.principleCard} glass-card`}>
              <div className={styles.iconBox}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Phase3;