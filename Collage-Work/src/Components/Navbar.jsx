import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { NavLink, useLocation, Link } from "react-router-dom";
import SigningBox from "./SigningBox";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  // Scroll listener for sticky glass header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showMenu) {
        setShowMenu(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showMenu]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          {/* Logo */}
          <Link to="/" className={styles.logoBox} aria-label="StudyMate Home">
            <div className={styles.logoIconWrap}>
              <FaGraduationCap className={styles.logoCapIcon} />
            </div>
            <span className={styles.logoText}>
              Study<span className="gradient-text">Mate</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.menuweb}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/FeedBack" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                  Feedback
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className={styles.rightActions}>
            <SigningBox />
            <button
              className={styles.hamburgerButton}
              onClick={handleButtonToggle}
              aria-label={showMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMenu}
            >
              {showMenu ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>

          {/* Mobile Clean Top Dropdown Overlay */}
          {showMenu && (
            <div className={styles.mobileBackdrop} onClick={() => setShowMenu(false)} />
          )}

          <nav className={`${styles.menumobile} ${showMenu ? styles.menuOpen : ""}`}>
            <ul className={styles.mobileNavLinks}>
              <li>
                <NavLink to="/" onClick={() => setShowMenu(false)} className={({ isActive }) => (isActive ? styles.activeMobileLink : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" onClick={() => setShowMenu(false)} className={({ isActive }) => (isActive ? styles.activeMobileLink : "")}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services" onClick={() => setShowMenu(false)} className={({ isActive }) => (isActive ? styles.activeMobileLink : "")}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/cse" onClick={() => setShowMenu(false)} className={({ isActive }) => (isActive ? styles.activeMobileLink : "")}>
                  CSE Branch
                </NavLink>
              </li>
              <li>
                <NavLink to="/it" onClick={() => setShowMenu(false)} className={({ isActive }) => (isActive ? styles.activeMobileLink : "")}>
                  IT Branch
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" onClick={() => setShowMenu(false)} className={({ isActive }) => (isActive ? styles.activeMobileLink : "")}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/FeedBack" onClick={() => setShowMenu(false)} className={({ isActive }) => (isActive ? styles.activeMobileLink : "")}>
                  Feedback
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
