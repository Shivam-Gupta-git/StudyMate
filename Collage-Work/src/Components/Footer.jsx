import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Hellomates</h3>
          <p className={styles.footerDescription}>
            Your one-stop solution for accessing quality study materials. 
            We provide semester-wise notes tailored to your course and branch.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <img src="/Images/userFriendly.png" alt="Facebook" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <img src="/Images/search.png" alt="Twitter" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <img src="/Images/teaching.png" alt="Instagram" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <img src="/Images/book1.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/FeedBack">Feedback</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Courses</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/cse">Computer Science</Link></li>
            <li><Link to="/it">Information Technology</Link></li>
            <li><Link to="/Services">All Courses</Link></li>
            <li><Link to="/About">Study Materials</Link></li>
            <li><Link to="/Services">Resources</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contact Info</h4>
          <ul className={styles.contactInfo}>
            <li>
              <img src="/Images/search.png" alt="Email" className={styles.contactIcon} />
              <span>support@hellomates.com</span>
            </li>
            <li>
              <img src="/Images/secure.png" alt="Phone" className={styles.contactIcon} />
              <span>+91 123 456 7890</span>
            </li>
            <li>
              <img src="/Images/user1.png" alt="Address" className={styles.contactIcon} />
              <span>123 Education Street, Learning City, 123456</span>
            </li>
            <li>
              <img src="/Images/teaching.png" alt="Hours" className={styles.contactIcon} />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Features</h4>
          <ul className={styles.footerLinks}>
            <li>
              <img src="/Images/book1.png" alt="Notes" className={styles.featureIcon} />
              <span>Study Notes</span>
            </li>
            <li>
              <img src="/Images/search.png" alt="Search" className={styles.featureIcon} />
              <span>Easy Search</span>
            </li>
            <li>
              <img src="/Images/secure.png" alt="Secure" className={styles.featureIcon} />
              <span>Secure Platform</span>
            </li>
            <li>
              <img src="/Images/userFriendly.png" alt="User Friendly" className={styles.featureIcon} />
              <span>User Friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>&copy; {new Date().getFullYear()} Hellomates. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link to="/">Privacy Policy</Link>
            <span>|</span>
            <Link to="/">Terms of Service</Link>
            <span>|</span>
            <Link to="/Contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

