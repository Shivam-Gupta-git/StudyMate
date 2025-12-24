import React from 'react'
import './CSE.css'

const CSE = () => {
  return (
    <div className="cse-main-container">
      <div className="cse-hero-section">
        <div className="cse-hero-content">
          <h1 className="cse-main-title">Computer Science Engineering</h1>
          <p className="cse-subtitle">Building the Future with Code and Innovation</p>
        </div>
        <div className="cse-hero-image">
          <img src="https://www.digipen.edu/sites/default/files/public/img/academics/04-social/digipen-academics-bs-in-computer-engineering-og.jpg" alt="CSE Department" />
        </div>
      </div>

      <div className="cse-content-section">
        <div className="cse-info-card">
          <div className="cse-icon-box">
            <img src="/Images/book1.png" alt="Curriculum" />
          </div>
          <h2>Comprehensive Curriculum</h2>
          <p>Our CSE program covers programming languages, data structures, algorithms, database systems, computer networks, and software engineering.</p>
        </div>

        <div className="cse-info-card">
          <div className="cse-icon-box">
            <img src="/Images/teaching.png" alt="Expert Faculty" />
          </div>
          <h2>Expert Faculty</h2>
          <p>Learn from experienced professors and industry professionals who bring real-world expertise to the classroom.</p>
        </div>

        <div className="cse-info-card">
          <div className="cse-icon-box">
            <img src="/Images/search.png" alt="Research" />
          </div>
          <h2>Research Opportunities</h2>
          <p>Engage in cutting-edge research projects in AI, machine learning, cybersecurity, and cloud computing.</p>
        </div>

        <div className="cse-info-card">
          <div className="cse-icon-box">
            <img src="/Images/userFriendly.png" alt="Labs" />
          </div>
          <h2>State-of-the-Art Labs</h2>
          <p>Access modern computer labs equipped with the latest software and hardware for hands-on learning.</p>
        </div>
      </div>

      <div className="cse-courses-section">
        <h2 className="cse-section-title">Core Courses</h2>
        <div className="cse-courses-grid">
          <div className="cse-course-card">
            <h3>Programming Fundamentals</h3>
            <p>C, C++, Java, Python</p>
          </div>
          <div className="cse-course-card">
            <h3>Data Structures & Algorithms</h3>
            <p>Arrays, Trees, Graphs, Sorting</p>
          </div>
          <div className="cse-course-card">
            <h3>Database Management</h3>
            <p>SQL, NoSQL, Database Design</p>
          </div>
          <div className="cse-course-card">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className="cse-course-card">
            <h3>Machine Learning</h3>
            <p>AI, Neural Networks, Deep Learning</p>
          </div>
          <div className="cse-course-card">
            <h3>Cloud Computing</h3>
            <p>AWS, Azure, DevOps</p>
          </div>
        </div>
      </div>

      <div className="cse-student-section">
        <h2 className="cse-section-title">Our Students</h2>
        <div className="cse-students-grid">
          <div className="cse-student-card">
            <img src="/Images/student1.png" alt="Student" />
            <h3>Active Learners</h3>
            <p>Engaged in projects and competitions</p>
          </div>
          <div className="cse-student-card">
            <img src="/Images/student2.png" alt="Student" />
            <h3>Industry Ready</h3>
            <p>Prepared for tech careers</p>
          </div>
          <div className="cse-student-card">
            <img src="/Images/student3.png" alt="Student" />
            <h3>Innovators</h3>
            <p>Creating solutions for real problems</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSE
