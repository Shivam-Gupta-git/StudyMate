import React from 'react';
import styles from './Phase5.module.css';
import { Phase5Info } from './Data_Storage_Con';
import { FaUserTie, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

function Phase5() {
  const info = Phase5Info[0];
  if (!info) return null;

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Senior Professor & Department Chair",
      avatar: "/Images/student1.png",
      bio: "20+ years guiding engineering students in Computer Architecture & Algorithms."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Associate Professor & Data Lead",
      avatar: "/Images/student2.png",
      bio: "Expert in Data Structures, Machine Learning, and curriculum design."
    },
    {
      name: "Prof. Amit Kumar",
      role: "Assistant Professor & Web Tech Head",
      avatar: "/Images/student3.png",
      bio: "Specialist in Full-Stack Web Development, Cloud APIs, and DevOps."
    },
    {
      name: "Dr. Anjali Singh",
      role: "Senior Lecturer & DBMS Mentor",
      avatar: "/Images/student4.png",
      bio: "Focused on Enterprise Database Systems, Relational SQL, and System Security."
    }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <span className={styles.badge}>Academic Leadership</span>
          <h2 className={styles.title}>{info.heading1}</h2>
          <p className={styles.subtitle}>{info.heading2}</p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, idx) => (
            <div key={idx} className={`${styles.teamCard} glass-card`}>
              <img src={member.avatar} alt={member.name} className={styles.avatar} />
              <h3 className={styles.memberName}>{member.name}</h3>
              <span className={styles.memberRole}>{member.role}</span>
              <p className={styles.memberBio}>{member.bio}</p>

              <div className={styles.socialRow}>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="GitHub"><FaGithub /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Phase5;