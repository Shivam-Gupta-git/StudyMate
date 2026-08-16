import React from 'react';
import styles from './Phase7.module.css';
import { phase7Info } from './CarouselData';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

function Phase7() {
  const info = phase7Info[0];
  if (!info) return null;

  const reviews = [
    {
      name: info.Name1,
      role: info.role1 || "CSE Student",
      avatar: info.image1,
      review: info.review1,
      rating: 5
    },
    {
      name: info.Name2,
      role: info.role2 || "IT Student",
      avatar: info.image2,
      review: info.review2,
      rating: 5
    },
    {
      name: info.Name3,
      role: info.role3 || "ECE Student",
      avatar: info.image3,
      review: info.review3,
      rating: 5
    }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <span className={styles.badge}>Student Feedback</span>
          <h2 className={styles.title}>{info.heading1}</h2>
          <p className={styles.subtitle}>{info.heading2}</p>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((item, idx) => (
            <div key={idx} className={`${styles.reviewCard} glass-card`}>
              <FaQuoteLeft className={styles.quoteIcon} />
              
              <p className={styles.reviewText}>{item.review}</p>

              <div className={styles.starRow}>
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className={styles.starIcon} />
                ))}
              </div>

              <div className={styles.userProfile}>
                <img src={item.avatar} alt={item.name} className={styles.avatar} />
                <div className={styles.userInfo}>
                  <h4 className={styles.userName}>{item.name}</h4>
                  <span className={styles.userRole}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Phase7;
