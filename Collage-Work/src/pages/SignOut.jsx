import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignOut.css';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserPlus, FaGraduationCap, FaChalkboardTeacher, FaUserShield, FaGoogle, FaFacebookF } from 'react-icons/fa';

function SignOut({ onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      if (onToast) {
        onToast('Passwords do not match! Please check again.', 'error');
      } else {
        alert('Passwords do not match!');
      }
      return;
    }

    if (onToast) {
      onToast(`Welcome to StudyMate, ${formData.name}! Your ${formData.role} account is ready.`, 'success');
    } else {
      alert('Account created successfully!');
    }

    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'student'
    });
    navigate('/SignIn');
  };

  return (
    <div className="signout-main-container">
      <div className="signout-wrapper">
        {/* Left Side Info */}
        <div className="signout-left glass-card">
          <span className="sectionBadge">Join StudyMate</span>
          <h1 className="signout-left-title">Create Free Account</h1>
          <p className="signout-left-desc">
            Unlock complete access to semester-wise study notes, previous year question papers, and interactive learning features.
          </p>

          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon"><FaGraduationCap /></div>
              <div>
                <h4>Structured Notes Access</h4>
                <p>Curated notes for CSE, IT, ECE & more</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon"><FaChalkboardTeacher /></div>
              <div>
                <h4>Upload & Share Resources</h4>
                <p>Contribute notes and help fellow peers</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon"><FaUserShield /></div>
              <div>
                <h4>Verified & Secure</h4>
                <p>100% free academic portal for students</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Registration Form */}
        <div className="signout-right glass-card">
          <div className="signout-header">
            <h2>Create Account</h2>
            <p>Fill in your details to get started</p>
          </div>

          <form className="signout-form" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div className="form-group">
              <label>Select Role</label>
              <div className="role-pills">
                {['student', 'teacher', 'admin'].map((roleOption) => (
                  <button
                    key={roleOption}
                    type="button"
                    className={`role-btn ${formData.role === roleOption ? 'activeRole' : ''}`}
                    onClick={() => setFormData({ ...formData, role: roleOption })}
                  >
                    {roleOption.charAt(0).toUpperCase() + roleOption.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reg-name">
                <FaUser className="input-icon" /> Full Name
              </label>
              <input
                type="text"
                id="reg-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reg-email">
                <FaEnvelope className="input-icon" /> Email Address
              </label>
              <input
                type="email"
                id="reg-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@college.edu"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reg-password">
                <FaLock className="input-icon" /> Create Password
              </label>
              <div className="password-input-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="reg-password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
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

            <div className="form-group">
              <label htmlFor="confirmPassword">
                <FaLock className="input-icon" /> Confirm Password
              </label>
              <div className="password-input-wrap">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-checkbox">
              <label>
                <input type="checkbox" required />
                <span>I agree to the Terms & Conditions and Privacy Policy</span>
              </label>
            </div>

            <button type="submit" className="btn-primary signout-btn">
              <FaUserPlus /> Create Account
            </button>

            <div className="signout-divider">
              <span>Or sign up with</span>
            </div>

            <div className="social-signout">
              <button type="button" className="btn-secondary social-btn" onClick={() => onToast && onToast('Google sign-up demo connected!', 'info')}>
                <FaGoogle /> Google
              </button>
              <button type="button" className="btn-secondary social-btn" onClick={() => onToast && onToast('Facebook sign-up demo connected!', 'info')}>
                <FaFacebookF /> Facebook
              </button>
            </div>

            <div className="signout-footer">
              <p>Already have an account? <Link to="/SignIn">Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignOut;
