import React, { useState } from 'react';
import styles from './Phase4.module.css';
import { FaSearch, FaDownload, FaBookReader, FaFilter, FaFilePdf, FaCheck } from 'react-icons/fa';

const sampleStudyNotes = [
  {
    id: 1,
    title: 'Data Structures & Algorithms',
    code: 'CS-301',
    branch: 'CSE',
    semester: 'Semester 3',
    format: 'PDF',
    size: '4.2 MB',
    author: 'Prof. A. Sharma',
    downloads: 1420,
    tags: ['Arrays', 'Trees', 'Graphs', 'Sorting']
  },
  {
    id: 2,
    title: 'Object Oriented Programming with Java',
    code: 'CS-302',
    branch: 'CSE',
    semester: 'Semester 3',
    format: 'PDF',
    size: '5.1 MB',
    author: 'Dr. V. Gupta',
    downloads: 1180,
    tags: ['Classes', 'Inheritance', 'Polymorphism']
  },
  {
    id: 3,
    title: 'Database Management Systems (DBMS)',
    code: 'IT-401',
    branch: 'IT',
    semester: 'Semester 4',
    format: 'PDF',
    size: '3.8 MB',
    author: 'Prof. R. Verma',
    downloads: 1650,
    tags: ['SQL', 'Normalization', 'Transactions']
  },
  {
    id: 4,
    title: 'Operating Systems & System Architecture',
    code: 'CS-402',
    branch: 'CSE',
    semester: 'Semester 4',
    format: 'PDF',
    size: '6.0 MB',
    author: 'Dr. M. K. Rao',
    downloads: 980,
    tags: ['Processes', 'Memory Management', 'Threads']
  },
  {
    id: 5,
    title: 'Web Technologies & React.js Basics',
    code: 'IT-503',
    branch: 'IT',
    semester: 'Semester 5',
    format: 'PDF',
    size: '4.5 MB',
    author: 'Prof. S. Mehta',
    downloads: 2100,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React']
  },
  {
    id: 6,
    title: 'Computer Networks & Security',
    code: 'CS-504',
    branch: 'CSE',
    semester: 'Semester 5',
    format: 'PDF',
    size: '5.4 MB',
    author: 'Dr. P. Nair',
    downloads: 1340,
    tags: ['TCP/IP', 'OSI Model', 'Sockets', 'Cybersecurity']
  }
];

function Phase4({ onToast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [downloadedMap, setDownloadedMap] = useState({});

  const filteredNotes = sampleStudyNotes.filter((note) => {
    const matchesSearch = 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesBranch = selectedBranch === 'All' || note.branch === selectedBranch;

    return matchesSearch && matchesBranch;
  });

  const handleDownload = (id, title) => {
    setDownloadedMap((prev) => ({ ...prev, [id]: true }));
    if (onToast) {
      onToast(`Downloading "${title}"...`, 'success');
    } else {
      alert(`Downloading "${title}"...`);
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <span className={styles.badge}>Semester Notes & PYQs</span>
          <h2 className={styles.title}>Find Your Course Study Notes</h2>
          <p className={styles.subtitle}>
            Search, filter, and download verified semester notes and previous year question papers instantly.
          </p>
        </div>

        {/* Filter Controls */}
        <div className={`${styles.filterBar} glass-card`}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by subject name, code, or keyword (e.g. DBMS, CS-301)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={styles.branchPills}>
            <FaFilter className={styles.filterIcon} />
            {['All', 'CSE', 'IT'].map((branch) => (
              <button
                key={branch}
                className={`${styles.branchBtn} ${selectedBranch === branch ? styles.activeBranch : ''}`}
                onClick={() => setSelectedBranch(branch)}
              >
                {branch}
              </button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <div className={`${styles.emptyCard} glass-card`}>
            <p>No study notes match your search query "{searchTerm}". Try another keyword!</p>
          </div>
        ) : (
          <div className={styles.gridContainer}>
            {filteredNotes.map((note) => (
              <div key={note.id} className={`${styles.noteCard} glass-card`}>
                <div className={styles.cardHeader}>
                  <div className={styles.pdfIconWrap}>
                    <FaFilePdf />
                  </div>
                  <div className={styles.metaBadge}>
                    <span>{note.branch}</span>
                    <span>{note.semester}</span>
                  </div>
                </div>

                <h3 className={styles.noteTitle}>{note.title}</h3>
                <span className={styles.noteCode}>{note.code} • {note.author}</span>

                <div className={styles.tagWrap}>
                  {note.tags.map((tag, i) => (
                    <span key={i} className={styles.tagPill}>{tag}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.fileSize}>{note.format} ({note.size})</span>
                  <button
                    className={`${styles.downloadBtn} ${downloadedMap[note.id] ? styles.downloaded : ''}`}
                    onClick={() => handleDownload(note.id, note.title)}
                  >
                    {downloadedMap[note.id] ? (
                      <>
                        <FaCheck /> Downloaded
                      </>
                    ) : (
                      <>
                        <FaDownload /> Download
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Phase4;