import React from 'react'
import './IT.css'

const IT = () => {
  return (
    <div className="it-main-container">
      <div className="it-hero-section">
        <div className="it-hero-content">
          <h1 className="it-main-title">Information Technology</h1>
          <p className="it-subtitle">Empowering Businesses with Technology Solutions</p>
        </div>
        <div className="it-hero-image">
          <img src="https://www.kzu.ac.in/storage/blogs/176621535573709797637.jpg" alt="IT Department" />
        </div>
      </div>

      <div className="it-content-section">
        <div className="it-info-card">
          <div className="it-icon-box">
            <img src="/Images/secure.png" alt="Security" />
          </div>
          <h2>Cybersecurity</h2>
          <p>Learn to protect digital assets and secure information systems from threats and vulnerabilities.</p>
        </div>

        <div className="it-info-card">
          <div className="it-icon-box">
            <img src="/Images/search.png" alt="Networking" />
          </div>
          <h2>Network Management</h2>
          <p>Master the art of designing, implementing, and managing computer networks and infrastructure.</p>
        </div>

        <div className="it-info-card">
          <div className="it-icon-box">
            <img src="/Images/userFriendly.png" alt="Systems" />
          </div>
          <h2>System Administration</h2>
          <p>Gain expertise in managing servers, databases, and enterprise IT infrastructure.</p>
        </div>

        <div className="it-info-card">
          <div className="it-icon-box">
            <img src="/Images/teaching.png" alt="Cloud" />
          </div>
          <h2>Cloud Technologies</h2>
          <p>Explore cloud computing platforms and services for scalable business solutions.</p>
        </div>
      </div>

      <div className="it-courses-section">
        <h2 className="it-section-title">Specializations</h2>
        <div className="it-courses-grid">
          <div className="it-course-card">
            <h3>Network Security</h3>
            <p>Firewalls, VPNs, Intrusion Detection</p>
          </div>
          <div className="it-course-card">
            <h3>Database Systems</h3>
            <p>Oracle, MySQL, MongoDB</p>
          </div>
          <div className="it-course-card">
            <h3>IT Project Management</h3>
            <p>Agile, Scrum, PMP</p>
          </div>
          <div className="it-course-card">
            <h3>Enterprise Systems</h3>
            <p>ERP, CRM, Business Intelligence</p>
          </div>
          <div className="it-course-card">
            <h3>Mobile Technologies</h3>
            <p>iOS, Android Development</p>
          </div>
          <div className="it-course-card">
            <h3>IT Service Management</h3>
            <p>ITIL, Service Delivery</p>
          </div>
        </div>
      </div>

      <div className="it-career-section">
        <h2 className="it-section-title">Career Opportunities</h2>
        <div className="it-career-grid">
          <div className="it-career-card">
            <img src="/Images/student4.png" alt="Career" />
            <h3>IT Consultant</h3>
            <p>Advise businesses on technology solutions</p>
          </div>
          <div className="it-career-card">
            <img src="/Images/student5.png" alt="Career" />
            <h3>Network Administrator</h3>
            <p>Manage and maintain network infrastructure</p>
          </div>
          <div className="it-career-card">
            <img src="/Images/student6.png" alt="Career" />
            <h3>Systems Analyst</h3>
            <p>Analyze and improve IT systems</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IT
