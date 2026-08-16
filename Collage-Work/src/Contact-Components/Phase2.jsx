import React, { useState } from 'react';
import styles from './Phase2.module.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Phase2({ onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    if (onToast) {
      onToast(`Thank you ${formData.name}! Your message has been sent to support.`, 'success');
    } else {
      alert(`Thank you ${formData.name}! Your message has been sent to support.`);
    }

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Info Column */}
        <div className={`${styles.infoCard} glass-card`}>
          <span className={styles.badge}>Get In Touch</span>
          <h2 className={styles.title}>We'd Love to Hear From You</h2>
          <p className={styles.subtitle}>
            Have questions about study notes, course syllabus, or feedback? Send us a message and our academic team will respond within 24 hours.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconCircle}><FaEnvelope /></div>
              <div>
                <h4>Email Support</h4>
                <p>support@studymate.edu</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconCircle}><FaPhoneAlt /></div>
              <div>
                <h4>Phone Line</h4>
                <p>+91 98765 43210 (Mon-Fri, 9AM-6PM)</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconCircle}><FaMapMarkerAlt /></div>
              <div>
                <h4>Academic Office</h4>
                <p>123 Education Hub, Tech Park, City 560001</p>
              </div>
            </div>
          </div>

          <div className={styles.socialRow}>
            <span>Follow Us:</span>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className={`${styles.formCard} glass-card`}>
          <h3 className={styles.formTitle}>Send Us a Message</h3>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="contact-name">Full Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="e.g. Note Request / PYQ Inquiry"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message or inquiry here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Phase2;