'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok, FaQuestionCircle } from 'react-icons/fa';

const COMMON_QUESTIONS = [
  "Do I need to know how to swim to dive?",
  "What is the price for a beginner dive?",
  "How long does the Open Water course take?",
  "Do you provide underwater photos?",
  "Is equipment rental included in the price?"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, topic, message } = formData;
    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:info@divevora.com?subject=${encodeURIComponent(topic)}&body=${emailBody}`;
  };

  const handleQuickQuestion = (question: string) => {
    const subject = `Question: ${question}`;
    const body = `Hi Divevora,%0D%0A%0D%0AI would like to know more about: ${question}%0D%0A%0D%0AThank you!`;
    window.location.href = `mailto:info@divevora.com?subject=${encodeURIComponent(subject)}&body=${body}`;
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

      {/* Intro Text */}
      <section className={styles.section}>
        <div className={styles.introContainer} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className={styles.text} style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            We love hearing from you! Since we prioritize direct and personal communication, 
            <strong> you can book your dive or ask questions directly via email ( info@divevora.com ).</strong> 
            <br /><br />
            The form below acts as a shortcut to open your email app. 
            For the fastest response, feel free to give us a call or send a message on WhatsApp!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        
        {/* Left Column: Info & Social Media */}
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <h2 className={styles.sectionTitle}>Let's Chat</h2>
            
            {/* Contact Text */}
            <p className={styles.text}>
              Ready to dive? Contact us for scheduling, pricing, or any questions about diving in <strong>Mirissa, Sri Lanka</strong>.
            </p>

            {/* --- NEW: Google Map Embed --- */}
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7506308268385!2d80.09038869999999!3d6.1641413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae183000d63164b%3A0x79c106c44817f1b7!2sDivevora%20Sri%20Lanka%20-%20PADI%20Diving%20Center%20(S-30430)!5e0!3m2!1sen!2slk!4v1765480393497!5m2!1sen!2slk" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className={styles.contactDetails}>
              <a href="tel:+94755511055" className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <span>+94 75 551 1055</span>
              </a>
              <a href="mailto:info@divevora.com" className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>info@divevora.com</span>
              </a>
            </div>

            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialIcons}>
                <a href="https://www.facebook.com/share/17DoGFmzQx/?mibextid=wwXIfr" target="_blank" className={styles.socialLink}><FaFacebookF /></a>
                <a href="https://www.instagram.com/divevora_sri_lanka?igsh=MWowcG92eTBjdHJ0bA==" target="_blank" className={styles.socialLink}><FaInstagram /></a>
                <a href="https://www.tiktok.com/@divevora.sri.lank?_t=ZS-8ygLtv2P0Es&_r=1" target="_blank" className={styles.socialLink}><FaTiktok /></a>
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
                <input type="text" name="name" className={styles.input} placeholder="John Doe" required onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" name="email" className={styles.input} placeholder="john@example.com" required onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Topic (Subject)</label>
                <select name="topic" className={styles.select} onChange={handleChange} value={formData.topic}>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Booking a Dive">Booking a Dive</option>
                  <option value="PADI Courses">PADI Courses</option>
                  <option value="Pricing">Pricing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea name="message" className={styles.textarea} placeholder="Tell us about your plans..." required onChange={handleChange}></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Open Email App to Send
              </button>

              <p className={styles.formNote}>
                Note: This will open your default email app. If nothing happens, please email us manually at <a href="mailto:info@divevora.com">info@divevora.com</a>
              </p>

            </form>
          </div>
        </div>

      </div>

      {/* Quick Questions Section */}
      <section className={styles.quickQSection}>
        <h3 className={styles.quickQTitle}>
          <FaQuestionCircle style={{ marginRight: '10px', color: '#ffd700' }} />
          Have a Quick Question? Click to Ask!
        </h3>
        <div className={styles.questionGrid}>
          {COMMON_QUESTIONS.map((q, index) => (
            <button 
              key={index} 
              className={styles.questionBtn} 
              onClick={() => handleQuickQuestion(q)}
            >
              {q}
            </button>
          ))}
        </div>
      </section>

    </div>
  );
}