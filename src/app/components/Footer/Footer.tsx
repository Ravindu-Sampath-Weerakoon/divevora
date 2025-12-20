'use client';

import React, { useState } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaChevronRight, FaPaperPlane } from 'react-icons/fa';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Scuba Diving', href: '/scuba-diving' },
  { label: 'Pricing', href: '/PRICING' },
  { label: 'Contact Us', href: '/contact' },
];

const Footer: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const body = encodeURIComponent(message);
    const subject = encodeURIComponent("Inquiry from Website");
    // Primary email remains info@divevora.com for the form logic
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
            Join our community and explore the underwater world with Divevora in Hikkaduwa.
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
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.linkItem}>
                  <FaChevronRight className={styles.linkIcon} /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Column - UPDATED WITH 2 NUMBERS & 2 EMAILS */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact Us</h3>
          <div className={styles.contactWrapper}>
            
            {/* Phone Numbers */}
            <a href="tel:+94755511055" className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>+94 75 551 1055</span>
            </a>
            <a href="tel:+94773321548" className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>+94 77 332 1548</span>
            </a>

            {/* Emails */}
            <a href="mailto:info@divevora.com" className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>info@divevora.com</span>
            </a>
            <a href="mailto:divevorasrilanka@gmail.com" className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>divevorasrilanka@gmail.com</span>
            </a>

            {/* Text Box Section */}
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

              {/* NEW HINT TEXT */}
              <p className={styles.hintText}>
                Please check your email sent box after clicking send to confirm. If not sent, contact us directly via phone or email.
              </p>
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