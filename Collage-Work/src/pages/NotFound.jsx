import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBookOpen } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card glass-card">
        <div className="notfound-code">404</div>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-desc">
          Oops! The study page or resource you are looking for doesn't exist or has been moved.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn-primary">
            <FaHome /> Back to Home
          </Link>
          <Link to="/Services" className="btn-secondary">
            <FaBookOpen /> Explore Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
