import React from 'react';
import './PageLoader.css';
import { FaGraduationCap } from 'react-icons/fa';

const PageLoader = () => {
  return (
    <div className="page-loader-overlay">
      <div className="loader-content">
        <div className="loader-icon-wrap">
          <FaGraduationCap className="loader-icon" />
          <div className="loader-spinner"></div>
        </div>
        <h2 className="loader-title">Study<span className="gradient-text">Mate</span></h2>
        <p className="loader-subtitle">Preparing your study dashboard...</p>
      </div>
    </div>
  );
};

export default PageLoader;
