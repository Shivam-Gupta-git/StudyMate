import { useState, useEffect } from "react";
import './Phase5.css'
import { Phase5_Gsap } from "./Gsap";



const Phase5 = () => {
    Phase5_Gsap()
    const boxes = [
      { 
        id: 1,
        title: "Programming Fundamentals", 
        desc: "Learn C, C++, Java, Python", 
        icon: "/Images/book1.png",
        price: "₹2,999",
        duration: "8 weeks",
        instructor: "Dr. Rajesh Kumar",
        level: "Beginner",
        students: "12,500+",
        rating: "4.8",
        description: "Master the fundamentals of programming with this comprehensive course covering C, C++, Java, and Python. Perfect for beginners who want to start their coding journey.",
        topics: ["Variables & Data Types", "Control Structures", "Functions & Methods", "Object-Oriented Programming", "File Handling", "Error Handling"],
        features: ["Lifetime Access", "Certificate of Completion", "24/7 Support", "Hands-on Projects", "Code Examples"]
      },
      { 
        id: 2,
        title: "Data Structures", 
        desc: "Master Arrays, Trees, Graphs", 
        icon: "/Images/search.png",
        price: "₹3,499",
        duration: "10 weeks",
        instructor: "Prof. Priya Sharma",
        level: "Intermediate",
        students: "8,900+",
        rating: "4.9",
        description: "Learn essential data structures and algorithms. Understand how to implement and use arrays, linked lists, trees, graphs, and more in real-world applications.",
        topics: ["Arrays & Linked Lists", "Stacks & Queues", "Trees & Binary Trees", "Graphs & Traversal", "Sorting Algorithms", "Search Algorithms"],
        features: ["Advanced Concepts", "Problem Solving", "Interview Prep", "Practice Problems", "Video Lectures"]
      },
      { 
        id: 3,
        title: "Web Development", 
        desc: "HTML, CSS, JavaScript, React", 
        icon: "/Images/userFriendly.png",
        price: "₹4,999",
        duration: "12 weeks",
        instructor: "Dr. Amit Kumar",
        level: "Beginner to Advanced",
        students: "15,200+",
        rating: "4.7",
        description: "Build modern, responsive websites and web applications. Learn HTML, CSS, JavaScript, and React from scratch. Create real-world projects and build your portfolio.",
        topics: ["HTML5 & CSS3", "JavaScript ES6+", "React Fundamentals", "State Management", "API Integration", "Deployment"],
        features: ["Real Projects", "Portfolio Building", "Industry Best Practices", "Responsive Design", "Modern Tools"]
      },
      { 
        id: 4,
        title: "Database Systems", 
        desc: "SQL, NoSQL, Database Design", 
        icon: "/Images/secure.png",
        price: "₹3,799",
        duration: "9 weeks",
        instructor: "Dr. Anjali Singh",
        level: "Intermediate",
        students: "6,800+",
        rating: "4.8",
        description: "Master database design and management. Learn SQL, NoSQL databases, normalization, indexing, and optimization techniques for efficient data storage and retrieval.",
        topics: ["SQL Queries", "Database Design", "Normalization", "MongoDB & NoSQL", "Database Security", "Performance Optimization"],
        features: ["Hands-on Practice", "Database Projects", "Real-world Scenarios", "Best Practices", "Expert Guidance"]
      },
      { 
        id: 5,
        title: "Machine Learning", 
        desc: "AI, Neural Networks, Deep Learning", 
        icon: "/Images/teaching.png",
        price: "₹5,999",
        duration: "14 weeks",
        instructor: "Prof. Rahul Verma",
        level: "Advanced",
        students: "9,500+",
        rating: "4.9",
        description: "Dive deep into machine learning and artificial intelligence. Learn neural networks, deep learning, and build AI models using Python and TensorFlow.",
        topics: ["Machine Learning Basics", "Neural Networks", "Deep Learning", "TensorFlow & Keras", "Computer Vision", "Natural Language Processing"],
        features: ["AI Projects", "Model Building", "Industry Applications", "Advanced Techniques", "Research Papers"]
      },
      { 
        id: 6,
        title: "Cloud Computing", 
        desc: "AWS, Azure, DevOps", 
        icon: "/Images/user1.png",
        price: "₹4,499",
        duration: "11 weeks",
        instructor: "Dr. Meera Patel",
        level: "Intermediate",
        students: "7,300+",
        rating: "4.6",
        description: "Learn cloud computing with AWS and Azure. Master DevOps practices, containerization, and cloud architecture. Deploy scalable applications on the cloud.",
        topics: ["AWS Services", "Azure Fundamentals", "Docker & Kubernetes", "CI/CD Pipelines", "Cloud Security", "Serverless Architecture"],
        features: ["Cloud Projects", "DevOps Tools", "Industry Certifications", "Real Deployments", "Best Practices"]
      }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleBoxes, setVisibleBoxes] = useState(1); // Default to 1 box on small screens
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Update the number of visible boxes based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleBoxes(2); // 1 box on phones
            } else if (window.innerWidth < 1024) {
                setVisibleBoxes(3); // 2 boxes on tablets
            } else {
                setVisibleBoxes(4); // 3 boxes on desktops
            }
        };

        // Set initial value
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        if (startIndex + 1 < boxes.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex - 1 >= 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleBoxClick = (box) => {
        setSelectedCourse(box);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const handleBuyCourse = () => {
        alert(`Thank you for your interest! You are about to purchase: ${selectedCourse.title} for ${selectedCourse.price}`);
        // Here you can add actual payment integration
    };

    return (
        <div className="phase5-main-container flex items-center justify-center   ">
            {/* Previous Button */}
            <button
                className=" button-box1  border-none   cursor-pointer text-base text-white rounded-full  bg-gray-500 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 flex justify-center items-center"
                onClick={handlePrev}
                disabled={startIndex === 0}
            >
                ◀️
            </button>

            {/* Carousel Boxes */}
            <div className=" carousel-boxes ">
                {boxes
                    .slice(startIndex, startIndex + visibleBoxes)
                    .map((box, index) => (
                        <div
                            key={index}
                            className="carousel-box flex flex-col items-center justify-center w-full h-60 text-lg font-bold rounded-lg bg-[#55aec4] p-5 cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => handleBoxClick(box)}
                        >
                            <img src={box.icon} alt={box.title} className="w-16 h-16 mb-3 object-contain" />
                            <h3 className="text-white text-center mb-2">{box.title}</h3>
                            <p className="text-white text-sm text-center opacity-90">{box.desc}</p>
                        </div>
                    ))}
            </div>

            {/* Next Button */}
            <button
                className=" button-box1  border-none cursor-pointer text-base text-white rounded-full  bg-gray-500 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 flex justify-center items-center"
                onClick={handleNext}
                disabled={startIndex + visibleBoxes >= boxes.length}
            >
                ▶️
            </button>

            {/* Course Details Modal */}
            {isModalOpen && selectedCourse && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
                        
                        <div className="modal-header">
                            <img src={selectedCourse.icon} alt={selectedCourse.title} className="modal-course-icon" />
                            <div className="modal-title-section">
                                <h2 className="modal-title">{selectedCourse.title}</h2>
                                <div className="modal-meta">
                                    <span className="modal-rating">⭐ {selectedCourse.rating}</span>
                                    <span className="modal-students">👥 {selectedCourse.students} students</span>
                                    <span className="modal-level">{selectedCourse.level}</span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p className="modal-description">{selectedCourse.description}</p>
                            
                            <div className="modal-info-grid">
                                <div className="modal-info-item">
                                    <img src="/Images/teaching.png" alt="Duration" className="info-icon" />
                                    <div>
                                        <strong>Duration:</strong>
                                        <span>{selectedCourse.duration}</span>
                                    </div>
                                </div>
                                <div className="modal-info-item">
                                    <img src="/Images/user1.png" alt="Instructor" className="info-icon" />
                                    <div>
                                        <strong>Instructor:</strong>
                                        <span>{selectedCourse.instructor}</span>
                                    </div>
                                </div>
                                <div className="modal-info-item">
                                    <img src="/Images/book1.png" alt="Level" className="info-icon" />
                                    <div>
                                        <strong>Level:</strong>
                                        <span>{selectedCourse.level}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-topics">
                                <h3>What You'll Learn:</h3>
                                <ul className="topics-list">
                                    {selectedCourse.topics.map((topic, idx) => (
                                        <li key={idx}>
                                            <img src="/Images/search.png" alt="Check" className="topic-icon" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-features">
                                <h3>Course Features:</h3>
                                <div className="features-grid">
                                    {selectedCourse.features.map((feature, idx) => (
                                        <div key={idx} className="feature-item">
                                            <img src="/Images/secure.png" alt="Feature" className="feature-icon" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <div className="modal-price-section">
                                <span className="price-label">Price:</span>
                                <span className="modal-price">{selectedCourse.price}</span>
                            </div>
                            <button className="buy-course-btn" onClick={handleBuyCourse}>
                                <img src="/Images/book1.png" alt="Buy" className="buy-icon" />
                                Buy Course
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Phase5;