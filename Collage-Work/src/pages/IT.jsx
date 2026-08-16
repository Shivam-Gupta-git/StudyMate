import React from 'react';
import { Link } from 'react-router-dom';
import './IT.css';
import { FaShieldAlt, FaNetworkWired, FaServer, FaCloud, FaBook } from 'react-icons/fa';

const IT = () => {
  return (
    <div className="it-main-container">
      <div className="it-container">
        {/* Hero */}
        <div className="it-hero-section glass-card">
          <div className="it-hero-content">
            <span className="sectionBadge">Department Branch</span>
            <h1 className="it-main-title">Information Technology</h1>
            <p className="it-subtitle">Empowering Modern Enterprises with Cybersecurity, Cloud, and Systems Architecture.</p>
            <div className="it-hero-actions">
              <Link to="/Services" className="btn-primary">
                <FaBook /> Access IT Notes
              </Link>
            </div>
          </div>
          <div className="it-hero-image">
            <img src="https://www.kzu.ac.in/storage/blogs/176621535573709797637.jpg" alt="IT Department" />
          </div>
        </div>

        {/* Info Grid */}
        <div className="it-content-section">
          <div className="it-info-card glass-card">
            <div className="it-icon-box">
              <FaShieldAlt />
            </div>
            <h2>Cybersecurity & Defenses</h2>
            <p>Learn to protect digital infrastructure, secure information systems, and prevent cyber threats.</p>
          </div>

          <div className="it-info-card glass-card">
            <div className="it-icon-box">
              <FaNetworkWired />
            </div>
            <h2>Network Infrastructure</h2>
            <p>Master designing, implementing, and administering computer networks, protocols, and routers.</p>
          </div>

          <div className="it-info-card glass-card">
            <div className="it-icon-box">
              <FaServer />
            </div>
            <h2>System Administration</h2>
            <p>Gain hands-on expertise in Linux/Windows server administration, virtualization, and enterprise databases.</p>
          </div>

          <div className="it-info-card glass-card">
            <div className="it-icon-box">
              <FaCloud />
            </div>
            <h2>Cloud Architecture</h2>
            <p>Explore AWS, Azure, and microservices architecture for building high-availability enterprise services.</p>
          </div>
        </div>

        {/* Specializations */}
        <div className="it-courses-section">
          <h2 className="it-section-title">IT Specializations & Subjects</h2>
          <div className="it-courses-grid">
            <div className="it-course-card glass-card">
              <h3>Network Security</h3>
              <p>Firewalls, Cryptography, VPNs & Ethical Hacking</p>
            </div>
            <div className="it-course-card glass-card">
              <h3>Enterprise Databases</h3>
              <p>Oracle SQL, PostgreSQL & MongoDB Clusters</p>
            </div>
            <div className="it-course-card glass-card">
              <h3>IT Project Management</h3>
              <p>Agile Framework, Scrum Sprints & DevOps</p>
            </div>
            <div className="it-course-card glass-card">
              <h3>Enterprise Systems</h3>
              <p>ERP, CRM Integration & Business Intelligence</p>
            </div>
            <div className="it-course-card glass-card">
              <h3>Mobile App Engineering</h3>
              <p>React Native, iOS & Android Development</p>
            </div>
            <div className="it-course-card glass-card">
              <h3>IT Service Management</h3>
              <p>ITIL Standards, SLA Monitoring & Delivery</p>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="it-career-section">
          <h2 className="it-section-title">Career Opportunities</h2>
          <div className="it-career-grid">
            <div className="it-career-card glass-card">
              <img src="/Images/student1.png" alt="Career" />
              <h3>IT Consultant</h3>
              <p>Advise Fortune 500 enterprises on digital technology transformation.</p>
            </div>
            <div className="it-career-card glass-card">
              <img src="/Images/student2.png" alt="Career" />
              <h3>Cloud Architect</h3>
              <p>Design and deploy scalable serverless infrastructures on AWS & GCP.</p>
            </div>
            <div className="it-career-card glass-card">
              <img src="/Images/student3.png" alt="Career" />
              <h3>Cybersecurity Analyst</h3>
              <p>Monitor security operations, audit code vulnerability, and protect data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IT;
