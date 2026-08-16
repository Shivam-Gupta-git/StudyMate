import React from 'react';
import styles from './Phase6.module.css';
import { Phase6Info } from './Data_Storage_Con';
import { RiRoadMapFill } from 'react-icons/ri';
import { FaQuestionCircle, FaHeadset, FaUsers } from 'react-icons/fa';

function Phase6() {
  const info = Phase6Info[0];
  if (!info) return null;

  const roadmapItems = [
    {
      icon: <RiRoadMapFill />,
      title: info.heading1 || "Future Roadmap",
      desc: info.heading2 || "AI-powered note summaries, interactive mock quizzes, and peer Q&A forums."
    },
    {
      icon: <FaQuestionCircle />,
      title: info.heading3 || "Instant FAQ & Search",
      desc: info.heading4 || "Quick access to course registration guidelines, note requests, and FAQs."
    },
    {
      icon: <FaHeadset />,
      title: info.heading5 || "Contact & Support",
      desc: info.heading6 || "24/7 student support desk and email query assistance."
    },
    {
      icon: <FaUsers />,
      title: info.heading7 || "Community Contributor Network",
      desc: info.heading8 || "Empowering top students and teachers to publish verified study sets."
    }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <span className={styles.badge}>Looking Ahead</span>
          <h2 className={styles.title}>Roadmap & Student Features</h2>
          <p className={styles.subtitle}>Innovating higher education with modern digital tools.</p>
        </div>

        <div className={styles.gridContainer}>
          {roadmapItems.map((item, index) => (
            <div key={index} className={`${styles.roadmapCard} glass-card`}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Phase6;