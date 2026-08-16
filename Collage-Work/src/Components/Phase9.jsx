import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Phase9.module.css';
import { FaRocket, FaUserPlus, FaCheck } from 'react-icons/fa';

function Phase9() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={`${styles.ctaCard} glass-card`}>
        <div className={styles.ctaContent}>
          <span className={styles.badge}>Join the Community</span>
          <h2 className={styles.title}>Ready to Ace Your Semester Exams?</h2>
          <p className={styles.subtitle}>
            Join thousands of engineering students who use StudyMate to access structured semester notes, PYQs, and study guides everyday.
          </p>

          <div className={styles.featuresPillRow}>
            <span><FaCheck className={styles.checkIcon} /> Free Unlimited Downloads</span>
            <span><FaCheck className={styles.checkIcon} /> Verified Faculty Syllabus</span>
            <span><FaCheck className={styles.checkIcon} /> No Credit Card Required</span>
          </div>

          <div className={styles.actionsRow}>
            <Link to="/SignOut" className="btn-primary">
              <FaUserPlus /> Create Free Student Account
            </Link>
            <Link to="/Services" className="btn-secondary">
              <FaRocket /> Explore All Materials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phase9;
