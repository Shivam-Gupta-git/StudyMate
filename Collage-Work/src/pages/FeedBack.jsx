import React, { useState } from 'react'
import './FeedBack.css'

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: '',
    category: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your feedback!')
    setFormData({
      name: '',
      email: '',
      rating: '',
      feedback: '',
      category: ''
    })
  }

  return (
    <div className="feedback-main-container">
      <div className="feedback-hero">
        <h1 className="feedback-title">Share Your Feedback</h1>
        <p className="feedback-subtitle">Your opinion matters! Help us improve by sharing your thoughts and experiences.</p>
        <div className="feedback-hero-image">
          <img src="/Images/user1.png" alt="Feedback" />
        </div>
      </div>

      <div className="feedback-content">
        <div className="feedback-form-container">
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <img src="/Images/user1.png" alt="Name" className="form-icon" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <img src="/Images/search.png" alt="Email" className="form-icon" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">
                <img src="/Images/book1.png" alt="Category" className="form-icon" />
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="general">General Feedback</option>
                <option value="content">Content Quality</option>
                <option value="technical">Technical Issues</option>
                <option value="suggestions">Suggestions</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="rating">
                <img src="/Images/teaching.png" alt="Rating" className="form-icon" />
                Rating
              </label>
              <div className="rating-buttons">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`rating-btn ${formData.rating >= star ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, rating: star })}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="feedback">
                <img src="/Images/userFriendly.png" alt="Feedback" className="form-icon" />
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Share your thoughts, suggestions, or concerns..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>

        <div className="feedback-info-section">
          <div className="info-card">
            <div className="info-icon">
              <img src="/Images/secure.png" alt="Privacy" />
            </div>
            <h3>Privacy Protected</h3>
            <p>Your feedback is confidential and will be used only for improvement purposes.</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <img src="/Images/search.png" alt="Response" />
            </div>
            <h3>Quick Response</h3>
            <p>We review all feedback and respond to important queries within 48 hours.</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <img src="/Images/teaching.png" alt="Improvement" />
            </div>
            <h3>Continuous Improvement</h3>
            <p>Your suggestions help us enhance the platform and user experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBack
