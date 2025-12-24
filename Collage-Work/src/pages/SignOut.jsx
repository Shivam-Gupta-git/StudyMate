import React, { useState } from 'react'
import './SignOut.css'

function SignOut() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert('Account created successfully!')
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'student'
    })
  }

  return (
    <div className="signout-main-container">
      <div className="signout-container">
        <div className="signout-left">
          <div className="signout-hero-content">
            <h1>Join Us Today!</h1>
            <p>Create your account and start accessing quality study materials</p>
            <div className="signout-benefits">
              <div className="benefit-item">
                <img src="/Images/book1.png" alt="Notes" />
                <div>
                  <h3>Study Materials</h3>
                  <p>Access semester-wise notes and resources</p>
                </div>
              </div>
              <div className="benefit-item">
                <img src="/Images/search.png" alt="Search" />
                <div>
                  <h3>Easy Search</h3>
                  <p>Find materials quickly with smart filters</p>
                </div>
              </div>
              <div className="benefit-item">
                <img src="/Images/secure.png" alt="Secure" />
                <div>
                  <h3>Secure Platform</h3>
                  <p>Your data is safe and protected</p>
                </div>
              </div>
            </div>
            <div className="signout-image">
              <img src="/Images/student2.png" alt="Student" />
            </div>
          </div>
        </div>

        <div className="signout-right">
          <div className="signout-form-wrapper">
            <div className="signout-header">
              <h2>Create Account</h2>
              <p>Fill in your details to get started</p>
            </div>

            <form className="signout-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <img src="/Images/user1.png" alt="Name" className="input-icon" />
                  Full Name
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
                  <img src="/Images/search.png" alt="Email" className="input-icon" />
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
                <label htmlFor="role">
                  <img src="/Images/teaching.png" alt="Role" className="input-icon" />
                  I am a
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                </select>
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
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  <img src="/Images/secure.png" alt="Confirm" className="input-icon" />
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="form-checkbox">
                <label>
                  <input type="checkbox" required />
                  <span>I agree to the Terms & Conditions and Privacy Policy</span>
                </label>
              </div>

              <button type="submit" className="signout-btn">
                Create Account
              </button>

              <div className="signout-divider">
                <span>Or sign up with</span>
              </div>

              <div className="social-signout">
                <button type="button" className="social-btn">
                  <img src="/Images/userFriendly.png" alt="Google" />
                  Google
                </button>
                <button type="button" className="social-btn">
                  <img src="/Images/book1.png" alt="Facebook" />
                  Facebook
                </button>
              </div>

              <div className="signout-footer">
                <p>Already have an account? <a href="/SignIn">Sign In</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignOut
