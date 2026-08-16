import React, { useState } from 'react';
import './FeedBack.css';
import { FaStar, FaUser, FaEnvelope, FaList, FaCommentDots, FaShieldAlt, FaClock, FaRocket, FaPaperPlane } from 'react-icons/fa';

const FeedBack = ({ onToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    category: 'general',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.feedback) return;

    if (onToast) {
      onToast('Thank you! Your feedback has been received.', 'success');
    } else {
      alert('Thank you! Your feedback has been received.');
    }

    setFormData({
      name: '',
      email: '',
      rating: 5,
      category: 'general',
      feedback: ''
    });
  };

  return (
    <div className="feedback-main-container">
      <div className="feedback-container">
        {/* Header */}
        <div className="feedback-hero">
          <span className="sectionBadge">Student Voice</span>
          <h1 className="feedback-title">Share Your Feedback</h1>
          <p className="feedback-subtitle">
            Your opinion matters! Help us enhance StudyMate notes, search filters, and overall student experience.
          </p>
        </div>

        <div className="feedback-grid">
          {/* Form */}
          <div className="feedback-form-container glass-card">
            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="form-icon" /> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="form-icon" /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your college email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">
                  <FaList className="form-icon" /> Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Feedback</option>
                  <option value="content">Content & Notes Quality</option>
                  <option value="technical">Technical Issues & Speed</option>
                  <option value="suggestions">Feature Suggestions</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  <FaStar className="form-icon" /> Rating (1 - 5 Stars)
                </label>
                <div className="rating-buttons">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`rating-btn ${formData.rating >= star ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      aria-label={`Rate ${star} stars`}
                    >
                      <FaStar />
                    </button>
                  ))}
                  <span className="rating-label">{formData.rating} / 5 Stars</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="feedback">
                  <FaCommentDots className="form-icon" /> Your Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder="Share your thoughts, suggested notes, or feature requests..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="btn-primary submit-btn">
                <FaPaperPlane /> Submit Feedback
              </button>
            </form>
          </div>

          {/* Info Side Cards */}
          <div className="feedback-info-section">
            <div className="info-card glass-card">
              <div className="info-icon"><FaShieldAlt /></div>
              <h3>Confidential & Safe</h3>
              <p>Your feedback is confidential and used solely to improve academic resources.</p>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon"><FaClock /></div>
              <h3>Fast Response</h3>
              <p>Our academic review team monitors all feedback and responds within 48 hours.</p>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon"><FaRocket /></div>
              <h3>Continuous Upgrades</h3>
              <p>Student suggestions directly shape upcoming platform features and note releases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
