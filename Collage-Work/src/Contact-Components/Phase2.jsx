import React, { useState } from 'react';
import styles from './Phase2.module.css';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube,
  FaCopy,
  FaCheck,
  FaClock,
  FaChevronDown,
  FaQuestionCircle,
  FaBook,
  FaShieldAlt,
  FaBuilding
} from 'react-icons/fa';

const campusLocations = [
  {
    id: 'main',
    name: 'Main Academic Campus',
    address: '123 Education Hub, Tech Park Block A, Bangalore 560001',
    phone: '+91 98765 43210',
    email: 'support@studymate.edu',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
    status: 'Open Now'
  },
  {
    id: 'library',
    name: 'Digital Library & Research Hub',
    address: 'Library Complex, Knowledge City, New Delhi 110001',
    phone: '+91 98765 43211',
    email: 'library@studymate.edu',
    hours: 'Mon - Sat: 8:00 AM - 9:00 PM IST',
    status: 'Open Now'
  },
  {
    id: 'tech',
    name: 'Regional Academic Desk',
    address: 'Sector 62, Innovation Zone, Noida 201309',
    phone: '+91 98765 43212',
    email: 'noida@studymate.edu',
    hours: 'Mon - Fri: 9:30 AM - 5:30 PM IST',
    status: 'Open Now'
  }
];

const quickFaqs = [
  {
    q: "How fast will I receive a response to my note request?",
    a: "Our academic support team processes all student and faculty inquiries within 12 to 24 hours during business days."
  },
  {
    q: "Can I request notes for a specific semester or elective subject?",
    a: "Yes! Select 'Note Request' in the query category above, specify your Branch and Subject Code, and our team will add it to the publishing queue."
  },
  {
    q: "How do I report a missing page or formatting issue in a PDF?",
    a: "Choose 'Technical Issue' in the form category and paste the note title. Our content verification team will update the file immediately."
  }
];

function Phase2({ onToast }) {
  const [category, setCategory] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: 'CSE',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('main');
  const [activeFaq, setActiveFaq] = useState(null);

  const activeCampus = campusLocations.find((c) => c.id === selectedLocation) || campusLocations[0];

  const categories = [
    { id: 'general', label: 'General Inquiry', placeholder: 'How can we help you today?' },
    { id: 'notes', label: 'Note Request', placeholder: 'Specify Subject Name, Code (e.g. CS-301) and Semester...' },
    { id: 'tech', label: 'Technical Issue', placeholder: 'Describe the bug or PDF issue you encountered...' },
    { id: 'faculty', label: 'Faculty & Partnerships', placeholder: 'Tell us about your institution or publishing proposal...' }
  ];

  const currentCategory = categories.find((c) => c.id === category) || categories[0];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onToast) {
      onToast(`Copied ${fieldName} to clipboard!`, 'info');
    }
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (onToast) {
        onToast(`Thank you ${formData.name}! Your ${currentCategory.label} message has been sent. Ticket ID: #SM-${Math.floor(10000 + Math.random() * 90000)}`, 'success');
      } else {
        alert(`Thank you ${formData.name}! Your message has been sent.`);
      }

      setFormData({
        name: '',
        email: '',
        branch: 'CSE',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Left Column: Contact Cards & Campus Selector */}
        <div className={styles.leftCol}>
          <div className={`${styles.infoCard} glass-card`}>
            <span className={styles.badge}>Academic Help Desk</span>
            <h2 className={styles.title}>We're Here to Help</h2>
            <p className={styles.subtitle}>
              Connect with our academic support team, request semester study notes, or visit our digital hub campuses.
            </p>

            {/* Quick Contact Action Pills */}
            <div className={styles.quickContactItems}>
              <div className={styles.detailItem}>
                <div className={styles.iconCircle}><FaEnvelope /></div>
                <div className={styles.detailText}>
                  <h4>Email Support</h4>
                  <p>{activeCampus.email}</p>
                </div>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={() => handleCopy(activeCampus.email, 'Email')}
                  aria-label="Copy Email"
                >
                  {copiedField === 'Email' ? <FaCheck className={styles.checkIcon} /> : <FaCopy />}
                </button>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconCircle}><FaPhoneAlt /></div>
                <div className={styles.detailText}>
                  <h4>Helpline</h4>
                  <p>{activeCampus.phone}</p>
                </div>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={() => handleCopy(activeCampus.phone, 'Phone')}
                  aria-label="Copy Phone"
                >
                  {copiedField === 'Phone' ? <FaCheck className={styles.checkIcon} /> : <FaCopy />}
                </button>
              </div>
            </div>

            {/* Campus Location Tabs */}
            <div className={styles.campusSection}>
              <span className={styles.campusLabel}><FaBuilding /> Select Campus / Hub Location</span>
              <div className={styles.campusTabs}>
                {campusLocations.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    className={`${styles.campusTabBtn} ${selectedLocation === loc.id ? styles.activeCampus : ''}`}
                    onClick={() => setSelectedLocation(loc.id)}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>

              <div className={styles.campusBox}>
                <p className={styles.campusAddress}><FaMapMarkerAlt className={styles.mapIcon} /> {activeCampus.address}</p>
                <div className={styles.campusHoursRow}>
                  <span><FaClock /> {activeCampus.hours}</span>
                  <span className={styles.statusBadge}>🟢 {activeCampus.status}</span>
                </div>
              </div>
            </div>

            <div className={styles.socialRow}>
              <span>Follow Us:</span>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form & Category Pills */}
        <div className={styles.rightCol}>
          <div className={`${styles.formCard} glass-card`}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Send Us a Message</h3>
              <p className={styles.formSub}>Select your topic below to customize your inquiry.</p>
            </div>

            {/* Interactive Category Selector Pills */}
            <div className={styles.categoryPills}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.catPill} ${category === cat.id ? styles.activeCat : ''}`}
                  onClick={() => setCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="student@college.edu"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label htmlFor="contact-branch">Engineering Branch</label>
                  <select
                    id="contact-branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                  >
                    <option value="CSE">Computer Science (CSE)</option>
                    <option value="IT">Information Technology (IT)</option>
                    <option value="ECE">Electronics (ECE)</option>
                    <option value="ME">Mechanical (ME)</option>
                    <option value="CE">Civil Engineering (CE)</option>
                    <option value="OTHER">Other Stream</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="contact-subject">Subject / Ticket Title</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="e.g. Data Structures CS-301 Notes"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="contact-message">Message Details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder={currentCategory.placeholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    <FaPaperPlane /> Send {currentCategory.label}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick Contact FAQ Accordion */}
          <div className={`${styles.faqCard} glass-card`}>
            <h4 className={styles.faqTitle}><FaQuestionCircle /> Quick Contact FAQs</h4>
            <div className={styles.faqList}>
              {quickFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${activeFaq === idx ? styles.activeFaqItem : ''}`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <div className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <FaChevronDown className={`${styles.chevron} ${activeFaq === idx ? styles.chevronOpen : ''}`} />
                  </div>
                  {activeFaq === idx && (
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phase2;