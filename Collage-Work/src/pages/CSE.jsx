import React from 'react';
import { Link } from 'react-router-dom';
import './CSE.css';
import { FaLaptopCode, FaBook, FaChalkboardTeacher, FaMicrochip, FaFlask, FaRocket, FaArrowRight } from 'react-icons/fa';

const CSE = () => {
  return (
    <div className="cse-main-container">
      <div className="cse-container">
        {/* Hero */}
        <div className="cse-hero-section glass-card">
          <div className="cse-hero-content">
            <span className="sectionBadge">Department Branch</span>
            <h1 className="cse-main-title">Computer Science Engineering</h1>
            <p className="cse-subtitle">Building the Future with Code, Algorithms, and Cloud Innovation.</p>
            <div className="cse-hero-actions">
              <Link to="/Services" className="btn-primary">
                <FaBook /> Access CSE Notes
              </Link>
            </div>
          </div>
          <div className="cse-hero-image">
            <img src="https://www.digipen.edu/sites/default/files/public/img/academics/04-social/digipen-academics-bs-in-computer-engineering-og.jpg" alt="CSE Department" />
          </div>
        </div>

        {/* Info Grid */}
        <div className="cse-content-section">
          <div className="cse-info-card glass-card">
            <div className="cse-icon-box">
              <FaLaptopCode />
            </div>
            <h2>Comprehensive Curriculum</h2>
            <p>Our CSE branch covers programming languages, data structures, algorithms, DBMS, operating systems, and web technologies.</p>
          </div>

          <div className="cse-info-card glass-card">
            <div className="cse-icon-box">
              <FaChalkboardTeacher />
            </div>
            <h2>Expert Faculty</h2>
            <p>Learn from experienced professors and industry practitioners who bring real-world software engineering expertise.</p>
          </div>

          <div className="cse-info-card glass-card">
            <div className="cse-icon-box">
              <FaMicrochip />
            </div>
            <h2>AI & ML Research</h2>
            <p>Engage in cutting-edge projects in artificial intelligence, machine learning, computer vision, and cloud computing.</p>
          </div>

          <div className="cse-info-card glass-card">
            <div className="cse-icon-box">
              <FaFlask />
            </div>
            <h2>State-of-the-Art Labs</h2>
            <p>Access high-performance computing labs equipped with modern IDEs, GPUs, and cloud sandbox environments.</p>
          </div>
        </div>

        {/* Core Courses */}
        <div className="cse-courses-section">
          <h2 className="cse-section-title">Core Semester Subjects</h2>
          <div className="cse-courses-grid">
            <div className="cse-course-card glass-card">
              <h3>Programming Fundamentals</h3>
              <p>C, C++, Java & Python Core Syntax</p>
            </div>
            <div className="cse-course-card glass-card">
              <h3>Data Structures & Algorithms</h3>
              <p>Arrays, Trees, Graphs, Sorting & Searching</p>
            </div>
            <div className="cse-course-card glass-card">
              <h3>Database Systems (DBMS)</h3>
              <p>SQL, NoSQL, Normalization & Transactions</p>
            </div>
            <div className="cse-course-card glass-card">
              <h3>Web Development</h3>
              <p>HTML5, CSS3, JavaScript, React & Node</p>
            </div>
            <div className="cse-course-card glass-card">
              <h3>Machine Learning & AI</h3>
              <p>Neural Networks, Deep Learning & PyTorch</p>
            </div>
            <div className="cse-course-card glass-card">
              <h3>Cloud & DevOps</h3>
              <p>AWS, Docker Containers, Kubernetes & CI/CD</p>
            </div>
          </div>
        </div>

        {/* Students Spotlight */}
        <div className="cse-student-section">
          <h2 className="cse-section-title">Student Achievements</h2>
          <div className="cse-students-grid">
            <div className="cse-student-card glass-card">
              <img src="/Images/student1.png" alt="Student" />
              <h3>Hackathon Champions</h3>
              <p>1st place winners at National Hackathons building smart AI solutions.</p>
            </div>
            <div className="cse-student-card glass-card">
              <img src="/Images/student2.png" alt="Student" />
              <h3>Industry Ready</h3>
              <p>Interned at top tech product companies as Software Engineering interns.</p>
            </div>
            <div className="cse-student-card glass-card">
              <img src="/Images/student3.png" alt="Student" />
              <h3>Open Source Contributors</h3>
              <p>Active contributors to GitHub open-source dev tools & React packages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSE;
