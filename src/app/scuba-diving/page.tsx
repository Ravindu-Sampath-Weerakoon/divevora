'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './scuba-diving.module.css';
import { 
  FaUserAstronaut, 
  FaCertificate, 
  FaWater, 
  FaBolt, 
  FaGraduationCap, 
  FaFish, 
  FaSmile, 
  FaChalkboardTeacher, 
  FaSwimmer, 
  FaHandsHelping,
  FaHeartbeat,
  FaFileMedical,
  FaClock,
  FaUsers,
  FaShip,
  FaCoffee,
  FaBus,
  FaSun,
  FaHistory,
  FaMapMarkedAlt
} from 'react-icons/fa';

function ScubaContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Determine active tab from URL (Default to 'beginners')
  const activeTab = searchParams.get('tab') === 'certified' ? 'certified' : 'beginners';

  // Function to update URL
  const handleTabChange = (tab: 'beginners' | 'certified') => {
    router.push(`/scuba-diving?tab=${tab}`, { scroll: false });
  };

  return (
    <div className={styles.container}>
      
      {/* --- Hero Section --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Scuba Diving</h1>
          <p className={styles.heroSubtitle}>Explore the Unseen World</p>
        </div>

        <p className={styles.guideText}>Select your experience level below:</p>

        {/* Tab Navigation */}
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'beginners' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('beginners')}
          >
            <FaUserAstronaut style={{ marginRight: '8px' }} /> Beginners (Discover)
          </button>
          
          <button 
            className={`${styles.tabButton} ${activeTab === 'certified' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('certified')}
          >
            <FaCertificate style={{ marginRight: '8px' }} /> Certified Divers
          </button>
        </div>
      </section>

      {/* --- Tab Content Area --- */}
      <div className={styles.contentSection}>
        
        {/* ================================================= */}
        {/* TAB 1: BEGINNERS                    */}
        {/* ================================================= */}
        {activeTab === 'beginners' && (
          <div className={styles.tabContent}>
            
            <h2 className={styles.sectionTitle}>Discover Scuba Diving</h2>
            <p className={styles.text}>
              Have you ever dreamed of exploring the underwater world but aren’t ready for a full certification course? 
              <strong> Discover Scuba Diving</strong> is your gateway to the wonders beneath the waves. 
              This program is designed for complete beginners, offering a safe and easy introduction to scuba diving under the supervision of our experienced instructors.
            </p>

            {/* Benefits */}
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginTop: '60px' }}>Benefits</h3>
            <div className={styles.grid}>
              <div className={styles.card}>
                <FaBolt size={35} color="#ffd700" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Experience the Thrill</h4>
                <p className={styles.cardText}>
                  Feel the unique sensation of breathing underwater and explore a world unlike any other.
                </p>
              </div>

              <div className={styles.card}>
                <FaGraduationCap size={35} color="#00b4d8" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Learn Basic Skills</h4>
                <p className={styles.cardText}>
                  Gain essential diving skills and safety guidelines in a controlled environment.
                </p>
              </div>

              <div className={styles.card}>
                <FaFish size={35} color="#ffd700" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Discover Marine Life</h4>
                <p className={styles.cardText}>
                  Get up close with vibrant coral reefs and diverse marine species of the Indian Ocean.
                </p>
              </div>

              <div className={styles.card}>
                <FaSmile size={35} color="#00b4d8" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Build Confidence</h4>
                <p className={styles.cardText}>
                  Overcome initial apprehensions and build confidence with the help of our professional instructors.
                </p>
              </div>

              <div className={styles.card}>
                <FaCertificate size={35} color="#ffd700" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Prep for Certification</h4>
                <p className={styles.cardText}>
                  Get a taste of scuba diving that can lead to further certifications if you choose to pursue it.
                </p>
              </div>
            </div>

            {/* What You Can Expect */}
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginTop: '60px' }}>What You Can Expect</h3>
            <div className={styles.grid}>
              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaChalkboardTeacher size={35} color="#00b4d8" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Orientation Session</h4>
                <p className={styles.cardText}>
                  Start with a brief on diving theory, safety protocols, and an overview of the equipment.
                </p>
              </div>

              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaSwimmer size={35} color="#00b4d8" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Practice Session</h4>
                <p className={styles.cardText}>
                  In shallow water, learn how to use scuba gear, breathe underwater, and practice key skills.
                </p>
              </div>

              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaWater size={35} color="#00b4d8" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Open Water Dive</h4>
                <p className={styles.cardText}>
                  Experience an actual dive, exploring the underwater world and witnessing marine life up close.
                </p>
              </div>
            </div>

            {/* Requirements */}
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginTop: '60px' }}>Requirements</h3>
            <div className={styles.grid} style={{ justifyContent: 'center' }}>
              <div className={styles.card} style={{ minWidth: '200px' }}>
                <FaClock size={30} color="#555" style={{ marginBottom: '10px' }} />
                <h4 className={styles.cardTitle} style={{ fontSize: '1.1rem' }}>Age</h4>
                <p className={styles.cardText}>Must be at least 10 years old.</p>
              </div>
              
              <div className={styles.card} style={{ minWidth: '200px' }}>
                <FaHeartbeat size={30} color="#555" style={{ marginBottom: '10px' }} />
                <h4 className={styles.cardTitle} style={{ fontSize: '1.1rem' }}>Health</h4>
                <p className={styles.cardText}>Reasonable physical health required.</p>
              </div>

              <div className={styles.card} style={{ minWidth: '200px' }}>
                <FaFileMedical size={30} color="#555" style={{ marginBottom: '10px' }} />
                <h4 className={styles.cardTitle} style={{ fontSize: '1.1rem' }}>Medical</h4>
                <p className={styles.cardText}>Must fill out a medical questionnaire.</p>
              </div>
            </div>

            {/* Book Your Session */}
            <div style={{ textAlign: 'center', marginTop: '80px', background: 'rgba(255,255,255,0.9)', padding: '40px', borderRadius: '20px' }}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '10px' }}>Book Your Session</h2>
              <p className={styles.text} style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                Embark on this exciting adventure and discover the magic of scuba diving with us.
              </p>
              <button 
                onClick={() => router.push('/contact')}
                style={{
                  backgroundColor: '#ffd700',
                  color: '#000',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}
              >
                Book Your Session Today
              </button>
            </div>

          </div>
        )}

        {/* ================================================= */}
        {/* TAB 2: CERTIFIED DIVERS             */}
        {/* ================================================= */}
        {activeTab === 'certified' && (
          <div className={styles.tabContent}>
            
            {/* Intro */}
            <h2 className={styles.sectionTitle}>Certified Diver Fun Dives</h2>
            <p className={styles.text}>
              A <strong>Certified Diver</strong> is someone who has completed an accredited scuba diving course and holds a certification from agencies like PADI or SSI. 
              This signifies you have the skills to dive independently or with a buddy. 
              Join us to explore Sri Lanka's rich marine biodiversity and historical wrecks!
            </p>

            {/* What You Can Expect */}
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginTop: '60px' }}>What You Can Expect</h3>
            <div className={styles.grid}>
              <div className={styles.card}>
                <FaWater size={35} color="#00b4d8" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Diverse Dive Sites</h4>
                <p className={styles.cardText}>
                  Magnificent coral reefs, stunning wrecks, rock formations with swim-throughs, and spectacular marine life.
                </p>
              </div>

              <div className={styles.card}>
                <FaUsers size={35} color="#ffd700" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Small Groups</h4>
                <p className={styles.cardText}>
                  Maximum of 5 divers per PADI Divemaster or Instructor, ensuring a personalized and safe experience.
                </p>
              </div>

              <div className={styles.card}>
                <FaMapMarkedAlt size={35} color="#00b4d8" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Tailored Dives</h4>
                <p className={styles.cardText}>
                  We customize the dive plan based on your certification level and interests (wrecks, reefs, photography).
                </p>
              </div>

              <div className={styles.card}>
                <FaBus size={35} color="#ffd700" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Convenient Transport</h4>
                <p className={styles.cardText}>
                  Complimentary pickup/drop-off within 5 km of our center. Fair rates for further locations.
                </p>
              </div>

              <div className={styles.card}>
                <FaCoffee size={35} color="#00b4d8" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Additional Services</h4>
                <p className={styles.cardText}>
                  Enjoy complimentary water, tea, coffee, and light snacks between dives on the boat.
                </p>
              </div>

              <div className={styles.card}>
                <FaSun size={35} color="#ffd700" style={{ marginBottom: '15px' }} />
                <h4 className={styles.cardTitle}>Personal Items</h4>
                <p className={styles.cardText}>
                  Remember to bring your own sunscreen, swimwear, and towels for a comfortable day out.
                </p>
              </div>
            </div>

            {/* Our Schedule Timeline */}
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginTop: '60px' }}>Daily Schedule</h3>
            <div className={styles.grid}>
              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaClock size={30} color="#555" />
                <h4 className={styles.cardTitle} style={{ marginTop:'10px' }}>08:45 AM</h4>
                <p className={styles.cardText}>Meeting at Dive Center for briefing & paperwork.</p>
              </div>
              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaShip size={30} color="#555" />
                <h4 className={styles.cardTitle} style={{ marginTop:'10px' }}>09:30 AM</h4>
                <p className={styles.cardText}>Departure by boat to the first dive site.</p>
              </div>
              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaWater size={30} color="#555" />
                <h4 className={styles.cardTitle} style={{ marginTop:'10px' }}>Two Dives</h4>
                <p className={styles.cardText}>We typically conduct 2 dives with a 45-60 min surface interval.</p>
              </div>
              <div className={`${styles.card} ${styles.highlightCard}`}>
                <FaCoffee size={30} color="#555" />
                <h4 className={styles.cardTitle} style={{ marginTop:'10px' }}>01:30 PM</h4>
                <p className={styles.cardText}>Return to center for tea, snacks, and logbook signing.</p>
              </div>
            </div>

            {/* For Whom Section */}
            <h3 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginTop: '60px' }}>Who is this for?</h3>
            <div className={styles.grid} style={{ justifyContent: 'center' }}>
              <div className={styles.card} style={{ maxWidth: '400px' }}>
                <FaCertificate size={40} color="#00b4d8" style={{ marginBottom:'15px' }} />
                <h4 className={styles.cardTitle}>Certified Divers (All Levels)</h4>
                <p className={styles.cardText}>
                  Whether you are newly certified or have years of experience, we have sites that match your skill level.
                </p>
              </div>
              <div className={styles.card} style={{ maxWidth: '400px' }}>
                <FaHistory size={40} color="#ffd700" style={{ marginBottom:'15px' }} />
                <h4 className={styles.cardTitle}>Returning Divers</h4>
                <p className={styles.cardText}>
                  Haven't dived in 6+ months? We recommend a <strong>Refresher Dive</strong> to regain confidence and brush up on skills.
                </p>
              </div>
            </div>

            {/* Book Your Adventure (CTA) */}
            <div style={{ textAlign: 'center', marginTop: '80px', background: 'rgba(255,255,255,0.9)', padding: '40px', borderRadius: '20px' }}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '10px' }}>Book Your Adventure</h2>
              <p className={styles.text} style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                Ready to explore the underwater world of Sri Lanka? Contact us today to book your diving adventure and experience the thrill and beauty of certified diving with us!
              </p>
              <button 
                onClick={() => router.push('/contact')}
                style={{
                  backgroundColor: '#00b4d8',
                  color: '#fff',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}
              >
                Book Fun Dives Now
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default function ScubaDivingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScubaContent />
    </Suspense>
  );
}