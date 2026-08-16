import React, { useState } from 'react';
import styles from './Phase8.module.css';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: "Is all study material on StudyMate free for students?",
    answer: "Yes, 100%! All semester notes, syllabus breakdowns, and previous year question papers (PYQs) can be read online or downloaded free of charge."
  },
  {
    question: "Which engineering streams and branches are currently supported?",
    answer: "We support Computer Science & Engineering (CSE), Information Technology (IT), Electronics & Communication (ECE), Mechanical Engineering (ME), and Civil Engineering (CE)."
  },
  {
    question: "How can I upload my own class notes or exam keys?",
    answer: "Sign up for a free Student or Teacher account via the Sign Up page. Once logged in, click 'Upload Notes' in your account dashboard to submit PDFs for verification."
  },
  {
    question: "Are the notes aligned with university exam patterns?",
    answer: "Yes, our academic team and student moderators review all uploaded materials to ensure full compliance with UGC, AICTE, and state technical university syllabi."
  },
  {
    question: "Can I download notes for offline reading on mobile?",
    answer: "Absolutely! All notes are optimized in standard PDF format. Clicking 'Download' saves the file directly to your smartphone or laptop storage."
  }
];

function Phase8() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <span className={styles.badge}>FAQ Guide</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Find quick answers to common questions about using StudyMate.</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqCard} glass-card ${isOpen ? styles.openCard : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.faqHeader}>
                  <div className={styles.questionTitle}>
                    <FaQuestionCircle className={styles.qIcon} />
                    <span>{faq.question}</span>
                  </div>
                  <FaChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
                </div>

                {isOpen && (
                  <div className={styles.faqBody}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Phase8;