import React, { useState, useEffect } from "react";
import "./Phase5.css";
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaStar, 
  FaUserGraduate, 
  FaClock, 
  FaChalkboardTeacher, 
  FaCheckCircle, 
  FaTimes, 
  FaBookOpen,
  FaShieldAlt
} from "react-icons/fa";

const Phase5 = ({ onToast }) => {
  const courses = [
    { 
      id: 1,
      title: "Programming Fundamentals", 
      desc: "Master C, C++, Java & Python from basics to core OOP concepts.", 
      price: "Free",
      duration: "8 weeks",
      instructor: "Dr. Rajesh Kumar",
      level: "Beginner",
      students: "12,500+",
      rating: "4.8",
      description: "Master the fundamentals of programming with this comprehensive course covering C, C++, Java, and Python. Perfect for beginners starting their technical journey.",
      topics: ["Variables & Control Flow", "Functions & Pointers", "Object-Oriented Programming", "File I/O & Exception Handling"],
      features: ["Verified Notes", "Coding Exercises", "Certificate of Completion", "24/7 Q&A Support"]
    },
    { 
      id: 2,
      title: "Data Structures & Algorithms", 
      desc: "Arrays, Trees, Graphs, Dynamic Programming & Sorting algorithms.", 
      price: "Free",
      duration: "10 weeks",
      instructor: "Prof. Priya Sharma",
      level: "Intermediate",
      students: "8,900+",
      rating: "4.9",
      description: "Learn essential data structures and algorithms. Master problem-solving techniques for semester exams and technical coding interviews.",
      topics: ["Arrays & Linked Lists", "Trees & Binary Search Trees", "Graph Algorithms (BFS/DFS)", "Dynamic Programming"],
      features: ["Interview Cheat Sheets", "Practice Problem Sets", "Video Walkthroughs", "Community Discussions"]
    },
    { 
      id: 3,
      title: "Full-Stack Web Development", 
      desc: "HTML5, CSS3, JavaScript, React.js & Node.js backend integration.", 
      price: "Free",
      duration: "12 weeks",
      instructor: "Dr. Amit Kumar",
      level: "All Levels",
      students: "15,200+",
      rating: "4.7",
      description: "Build modern, responsive websites and web applications. Master React, state management, REST APIs, and production deployment.",
      topics: ["Modern JavaScript (ES6+)", "React Hooks & Context API", "Express.js & MongoDB", "Deployment on Vercel/Netlify"],
      features: ["Hands-on Projects", "Portfolio Building", "Code Review Guides", "Responsive Design Rules"]
    },
    { 
      id: 4,
      title: "Database Management Systems", 
      desc: "Relational SQL, Schema Normalization, NoSQL & Query Tuning.", 
      price: "Free",
      duration: "9 weeks",
      instructor: "Dr. Anjali Singh",
      level: "Intermediate",
      students: "6,800+",
      rating: "4.8",
      description: "Master database design and management. Learn SQL queries, MongoDB, indexing, transactions, and ACID properties.",
      topics: ["Relational Algebra & SQL", "ER Diagrams & Normalization (1NF-BCNF)", "Transactions & Concurrency", "MongoDB NoSQL"],
      features: ["Lab Exercises", "SQL Playground", "Exam Notes PDF", "Expert Support"]
    },
    { 
      id: 5,
      title: "Artificial Intelligence & ML", 
      desc: "Supervised Learning, Neural Networks, Deep Learning & PyTorch.", 
      price: "Free",
      duration: "14 weeks",
      instructor: "Prof. Rahul Verma",
      level: "Advanced",
      students: "9,500+",
      rating: "4.9",
      description: "Explore machine learning algorithms and neural networks. Train AI models using Python, Scikit-Learn, and TensorFlow.",
      topics: ["Regression & Classification", "Neural Networks & Deep Learning", "Model Evaluation & Tuning", "Computer Vision Basics"],
      features: ["Jupyter Notebooks", "Real Datasets", "Model Checkpoints", "Research References"]
    },
    { 
      id: 6,
      title: "Cloud Computing & DevOps", 
      desc: "AWS Services, Docker Containers, Kubernetes & CI/CD Pipelines.", 
      price: "Free",
      duration: "11 weeks",
      instructor: "Dr. Meera Patel",
      level: "Intermediate",
      students: "7,300+",
      rating: "4.6",
      description: "Understand cloud architecture with AWS & Docker containers. Master DevOps pipelines for modern software deployment.",
      topics: ["AWS EC2 & S3 Basics", "Docker Containers & Images", "Kubernetes Orchestration", "CI/CD with GitHub Actions"],
      features: ["Hands-on Cloud Labs", "DevOps Templates", "Architecture Guides", "Exam Prep Notes"]
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleBoxes, setVisibleBoxes] = useState(3);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleBoxes(1);
      } else if (window.innerWidth < 1024) {
        setVisibleBoxes(2);
      } else {
        setVisibleBoxes(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex + 1 < courses.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleEnroll = (title) => {
    if (onToast) {
      onToast(`Enrolled in "${title}" successfully! Check your dashboard.`, 'success');
    } else {
      alert(`Enrolled in "${title}" successfully!`);
    }
    setSelectedCourse(null);
  };

  return (
    <section className="phase5-section">
      <div className="phase5-container">
        <div className="phase5-header">
          <span className="sectionBadge">Specialized Curricula</span>
          <h2 className="mainTitle">Featured Engineering Courses</h2>
          <p className="mainSub">Structured video notes, lab guides, and practice problem sets for core subjects.</p>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-nav-btn prev-btn"
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Previous courses"
          >
            <FaChevronLeft />
          </button>

          <div className="courses-grid">
            {courses
              .slice(startIndex, startIndex + visibleBoxes)
              .map((course) => (
                <div
                  key={course.id}
                  className="course-card glass-card"
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="course-badge-row">
                    <span className="level-pill">{course.level}</span>
                    <span className="rating-pill"><FaStar /> {course.rating}</span>
                  </div>

                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-desc">{course.desc}</p>

                  <div className="course-meta">
                    <span><FaClock /> {course.duration}</span>
                    <span><FaUserGraduate /> {course.students}</span>
                  </div>

                  <div className="course-card-footer">
                    <span className="course-price">{course.price}</span>
                    <button className="view-details-btn">
                      <FaBookOpen /> Course Details
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <button
            className="carousel-nav-btn next-btn"
            onClick={handleNext}
            disabled={startIndex + visibleBoxes >= courses.length}
            aria-label="Next courses"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCourse(null)} aria-label="Close modal">
              <FaTimes />
            </button>

            <div className="modal-top">
              <div className="modal-badge-row">
                <span className="level-pill">{selectedCourse.level}</span>
                <span className="rating-pill"><FaStar /> {selectedCourse.rating} ({selectedCourse.students})</span>
              </div>
              <h2 className="modal-heading">{selectedCourse.title}</h2>
              <p className="modal-instructor"><FaChalkboardTeacher /> Instructor: {selectedCourse.instructor}</p>
            </div>

            <div className="modal-body-content">
              <p className="modal-description">{selectedCourse.description}</p>

              <div className="modal-topics-section">
                <h3>Core Topics Covered:</h3>
                <div className="topics-grid">
                  {selectedCourse.topics.map((t, idx) => (
                    <div key={idx} className="topic-chip">
                      <FaCheckCircle className="chip-icon" /> {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-features-section">
                <h3>What's Included:</h3>
                <div className="features-chips">
                  {selectedCourse.features.map((f, idx) => (
                    <span key={idx} className="feature-chip"><FaShieldAlt /> {f}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer-bar">
              <div className="modal-price">
                <span>Access:</span> <strong>{selectedCourse.price}</strong>
              </div>
              <button className="btn-primary" onClick={() => handleEnroll(selectedCourse.title)}>
                <FaBookOpen /> Access Course Material
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Phase5;