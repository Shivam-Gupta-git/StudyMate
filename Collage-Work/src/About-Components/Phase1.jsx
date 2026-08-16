import React from 'react';
import style from './Phase1.module.css';
import { FaGraduationCap, FaRocket, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Phase1() {
  return (
    <section className={style.heroSection}>
      <div className={style.contentBox}>
        <span className={style.badge}>
          <FaGraduationCap /> About StudyMate
        </span>
        <h1 className={style.title}>
          Empowering Engineering Students <span className="gradient-text">Nationwide</span>
        </h1>
        <p className={style.description}>
          StudyMate is a modern, student-first academic portal designed to eliminate scattered study resources. We deliver semester-wise verified notes, previous year question papers, and subject guides straight to your fingertips.
        </p>

        <div className={style.actionRow}>
          <Link to="/Services" className="btn-primary">
            <FaBookOpen /> Explore Resources
          </Link>
          <Link to="/Contact" className="btn-secondary">
            <FaRocket /> Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Phase1;