import React, { useState } from 'react'
import './SignIn.css'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Sign in successful!')
    setFormData({
      email: '',
      password: ''
    })
  }

  return (
    <div className="signin-main-container">
      <div className="signin-container">
        <div className="signin-left">
          <div className="signin-hero-content">
            <h1>Welcome Back!</h1>
            <p>Sign in to access your study materials and resources</p>
            <div className="signin-features">
              <div className="feature-item">
                <img src="/Images/book1.png" alt="Notes" />
                <span>Access Study Notes</span>
              </div>
              <div className="feature-item">
                <img src="/Images/search.png" alt="Search" />
                <span>Quick Search & Filter</span>
              </div>
              <div className="feature-item">
                <img src="/Images/secure.png" alt="Secure" />
                <span>Secure & Reliable</span>
              </div>
            </div>
            <div className="signin-image">
              <img src="/Images/student1.png" alt="Student" />
            </div>
          </div>
        </div>

        <div className="signin-right">
          <div className="signin-form-wrapper">
            <div className="signin-header">
              <h2>Sign In</h2>
              <p>Enter your credentials to continue</p>
            </div>

            <form className="signin-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">
                  <img src="/Images/user1.png" alt="Email" className="input-icon" />
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
                <label htmlFor="password">
                  <img src="/Images/secure.png" alt="Password" className="input-icon" />
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="signin-btn">
                Sign In
              </button>

              <div className="signin-divider">
                <span>Or continue with</span>
              </div>

              <div className="social-signin">
                <button type="button" className="social-btn">
                  <img src="/Images/userFriendly.png" alt="Google" />
                  Google
                </button>
                <button type="button" className="social-btn">
                  <img src="/Images/teaching.png" alt="Facebook" />
                  Facebook
                </button>
              </div>

              <div className="signin-footer">
                <p>Don't have an account? <a href="/SignOut">Sign Up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
