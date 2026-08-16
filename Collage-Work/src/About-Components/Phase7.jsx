import React from 'react';
import styles from './Phase7.module.css';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaBookOpen } from 'react-icons/fa';

function Phase7() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={`${styles.ctaCard} glass-card`}>
        <div className={styles.ctaContent}>
          <span className={styles.badge}>Join StudyMate</span>
          <h2 className={styles.title}>Experience Smarter Learning Today</h2>
          <p className={styles.subtitle}>
            Join thousands of engineering students who use StudyMate to excel in their semester exams.
          </p>

          <div className={styles.actionsRow}>
            <Link to="/SignUp" className="btn-primary">
              <FaUserPlus /> Join For Free
            </Link>
            <Link to="/Services" className="btn-secondary">
              <FaBookOpen /> Browse All Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phase7;