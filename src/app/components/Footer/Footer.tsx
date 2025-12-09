'use client';

import React, { useState } from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaChevronRight, FaPaperPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
  // State for the text box message
  const [message, setMessage] = useState('');

  // Handle the "Send Message" button click
  const handleSendMessage = () => {
    const body = encodeURIComponent(message);
    const subject = encodeURIComponent("Inquiry from Website");
    window.location.href = `mailto:info@divevora.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className={styles.footer}>
      
      {/* --- Top Bar --- */}
      <div className={styles.footerTopBar}>
        <span className={styles.topBarText}>Ready to start your adventure?</span>
      </div>

      {/* --- Main Body --- */}
      <div className={styles.footerBody}>
        
        {/* Social Media Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Follow Our Social Media</h3>
          <p className={styles.description}>
            Join our community and explore the underwater world with Divevora.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/share/17DoGFmzQx/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/divevora_sri_lanka?igsh=MWowcG92eTBjdHJ0bA==" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@divevora.sri.lank?_t=ZS-8ygLtv2P0Es&_r=1" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {['Home', 'About Us', 'Scuba Diving', 'PADI Courses', 'Activities', 'Dive Sites', 'Pricing'].map((item) => (
              <li key={item}>
                <a href="#" className={styles.linkItem}>
                  <FaChevronRight className={styles.linkIcon} /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact Us</h3>
          <div className={styles.contactWrapper}>
            
            {/* 1. Clickable Phone */}
            <a href="tel:+94755511055" className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>+94 75 551 1055</span>
            </a>

            {/* 2. Clickable Email Link */}
            <a href="mailto:info@divevora.com" className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>info@divevora.com</span>
            </a>

            {/* 3. Text Box Section (Added Back) */}
            <div className={styles.emailBoxWrapper}>
              <p className={styles.inputLabel}>Send us a quick message:</p>
              
              <textarea 
                className={styles.emailInput} 
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3} 
              />
              
              <button onClick={handleSendMessage} className={styles.emailButton}>
                Send Message <FaPaperPlane style={{ marginLeft: '8px' }} />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* --- Copyright --- */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Divevora Sri Lanka. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;