import React from 'react'
import styles from './Phase9.module.css'

function Phase9() {
  return (
    <div className={styles.Phase9_main_container}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: 'white',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Get Started Today!
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '30px',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Join thousands of students who are already using our platform to excel in their studies. 
          Access quality study materials, connect with peers, and achieve your academic goals.
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '15px 25px',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <img src="/Images/book1.png" alt="Notes" style={{width: '30px', height: '30px', objectFit: 'contain'}} />
            <span style={{color: 'white', fontWeight: '600'}}>Study Notes</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '15px 25px',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <img src="/Images/search.png" alt="Search" style={{width: '30px', height: '30px', objectFit: 'contain'}} />
            <span style={{color: 'white', fontWeight: '600'}}>Easy Search</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '15px 25px',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <img src="/Images/secure.png" alt="Secure" style={{width: '30px', height: '30px', objectFit: 'contain'}} />
            <span style={{color: 'white', fontWeight: '600'}}>Secure Platform</span>
          </div>
        </div>
        <div style={{
          marginTop: '30px',
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <img src="/Images/student1.png" alt="Student" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover'}} />
          <img src="/Images/student2.png" alt="Student" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover'}} />
          <img src="/Images/student3.png" alt="Student" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover'}} />
          <img src="/Images/student4.png" alt="Student" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover'}} />
        </div>
      </div>
    </div>
  )
}
export default Phase9
