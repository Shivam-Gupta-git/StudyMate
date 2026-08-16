import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSignInAlt, FaBookOpen, FaSearch, FaShieldAlt, FaGoogle, FaFacebookF } from 'react-icons/fa';

function SignIn({ onToast }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;

    if (onToast) {
      onToast(`Welcome back! Successfully logged into StudyMate.`, 'success');
    } else {
      alert('Sign in successful!');
    }

    setFormData({ email: '', password: '' });
    navigate('/');
  };

  return (
    <div className="signin-main-container">
      <div className="signin-wrapper">
        {/* Left Side Highlights */}
        <div className="signin-left glass-card">
          <span className="sectionBadge">Student Portal</span>
          <h1 className="signin-left-title">Welcome Back!</h1>
          <p className="signin-left-desc">
            Sign in to access your saved semester notes, previous year question papers, and customized study dashboards.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon"><FaBookOpen /></div>
              <div>
                <h4>Semester Notes PDF</h4>
                <p>Instant access to chapter summaries</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><FaSearch /></div>
              <div>
                <h4>Smart Filter Search</h4>
                <p>Locate topics by course & branch</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><FaShieldAlt /></div>
              <div>
                <h4>Verified Content</h4>
                <p>Curated by professors & toppers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="signin-right glass-card">
          <div className="signin-header">
            <h2>Sign In to Account</h2>
            <p>Enter your credentials to continue</p>
          </div>

          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" /> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@college.edu"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <FaLock className="input-icon" /> Password
              </label>
              <div className="password-input-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-primary signin-btn">
              <FaSignInAlt /> Sign In
            </button>

            <div className="signin-divider">
              <span>Or continue with</span>
            </div>

            <div className="social-signin">
              <button type="button" className="btn-secondary social-btn" onClick={() => onToast && onToast('Google sign-in demo connected!', 'info')}>
                <FaGoogle /> Google
              </button>
              <button type="button" className="btn-secondary social-btn" onClick={() => onToast && onToast('Facebook sign-in demo connected!', 'info')}>
                <FaFacebookF /> Facebook
              </button>
            </div>

            <div className="signin-footer">
              <p>Don't have an account? <Link to="/SignOut">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
