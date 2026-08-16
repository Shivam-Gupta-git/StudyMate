import React from 'react';
import Phase1 from '../Contact-Components/Phase1';
import Phase2 from '../Contact-Components/Phase2';
import './Contact.css';

const Contact = ({ onToast }) => {
  return (
    <div className="Contact-main-container">
      <Phase1 />
      <Phase2 onToast={onToast} />
    </div>
  );
};

export default Contact;