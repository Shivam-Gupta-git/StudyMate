import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { 
  FaGraduationCap, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaArrowUp, 
  FaPaperPlane 
} from 'react-icons/fa';

const Footer = ({ onToast }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    if (onToast) {
      onToast('Thank you for subscribing to StudyMate updates!', 'success');
    } else {
      alert('Thank you for subscribing to StudyMate updates!');
    }
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Column */}
        <div className={styles.footerSection}>
          <Link to="/" className={styles.brandBox}>
            <div className={styles.brandIcon}>
              <FaGraduationCap />
            </div>
            <span className={styles.brandText}>Study<span className="gradient-text">Mate</span></span>
          </Link>
          <p className={styles.footerDescription}>
            Your one-stop academic platform for semester notes, PYQs, syllabi, mock tests, and career guidance tailored for engineering & college students.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className={styles.socialLink} aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/">Home Portal</Link></li>
            <li><Link to="/About">About Platform</Link></li>
            <li><Link to="/Services">Academic Services</Link></li>
            <li><Link to="/Contact">Contact Support</Link></li>
            <li><Link to="/FeedBack">Student Feedback</Link></li>
          </ul>
        </div>

        {/* Departments */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Branches</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/cse">Computer Science (CSE)</Link></li>
            <li><Link to="/it">Information Technology (IT)</Link></li>
            <li><Link to="/Services">Electronics & Comm. (ECE)</Link></li>
            <li><Link to="/Services">Mechanical Engineering</Link></li>
            <li><Link to="/Services">Civil Engineering</Link></li>
          </ul>
        </div>

        {/* Contact Info & Newsletter */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Newsletter</h4>
          <p className={styles.newsletterText}>Get updates on newly published notes and PYQs.</p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <button type="submit" aria-label="Subscribe">
              <FaPaperPlane />
            </button>
          </form>
          <ul className={styles.contactInfo}>
            <li>
              <FaEnvelope className={styles.contactIcon} />
              <span>support@studymate.edu</span>
            </li>
            <li>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>&copy; {new Date().getFullYear()} StudyMate Portal. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link to="/About">Privacy Policy</Link>
            <span>•</span>
            <Link to="/About">Terms of Service</Link>
            <span>•</span>
            <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Back to top">
              Back to Top <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
