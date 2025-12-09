'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ContactPage() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submission (Mailto)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, topic, message } = formData;

    // Construct Email Body
    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Construct Mailto Link
    // Subject = Topic
    // Body = User details
    window.location.href = `mailto:info@divevora.com?subject=${encodeURIComponent(topic)}&body=${emailBody}`;
  };

  return (
    <div className={styles.container}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>Get in Touch with Divevora</p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        
        {/* Left Column: Info & Social Media */}
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <h2 className={styles.sectionTitle}>Let's Chat</h2>
            <p className={styles.text}>
              Ready to dive? Contact us for scheduling, pricing, or any questions about diving in <strong>Mirissa, Sri Lanka</strong>.
            </p>

            <div className={styles.contactDetails}>
              {/* Phone */}
              <a href="tel:+94755511055" className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <span>+94 75 551 1055</span>
              </a>
              
              {/* Email */}
              <a href="mailto:info@divevora.com" className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>info@divevora.com</span>
              </a>
            </div>

            {/* NEW: Social Media Section */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
                  <FaTiktok />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Form */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            <h2 className={styles.sectionTitle}>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  className={styles.input} 
                  placeholder="John Doe" 
                  required 
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  className={styles.input} 
                  placeholder="john@example.com" 
                  required 
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Topic (Subject)</label>
                <select 
                  name="topic"
                  className={styles.select} 
                  onChange={handleChange}
                  value={formData.topic}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Booking a Dive">Booking a Dive</option>
                  <option value="PADI Courses">PADI Courses</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea 
                  name="message"
                  className={styles.textarea} 
                  placeholder="Tell us about your plans..." 
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message via Email
              </button>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
}