import React, { useState, useRef, useEffect } from 'react';
import styles from './SigningBox.module.css';
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaSignInAlt, FaUserPlus, FaChevronDown } from 'react-icons/fa';

const SigningBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.signingContainer} ref={dropdownRef}>
      <button 
        className={styles.logingButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Account Menu"
      >
        <FaUserCircle className={styles.userIcon} />
        <span>Account</span>
        <FaChevronDown className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ''}`} />
      </button>

      {isOpen && (
        <div className={styles.optionBox}>
          <NavLink 
            to="/SignIn" 
            className={styles.optionLink}
            onClick={() => setIsOpen(false)}
          >
            <FaSignInAlt className={styles.optionIcon} />
            <span>Sign In</span>
          </NavLink>
          <NavLink 
            to="/SignUp" 
            className={styles.optionLink}
            onClick={() => setIsOpen(false)}
          >
            <FaUserPlus className={styles.optionIcon} />
            <span>Sign Up</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SigningBox;