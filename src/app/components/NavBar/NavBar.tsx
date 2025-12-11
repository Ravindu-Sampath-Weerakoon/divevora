'use client'

import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from './logo.png';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about-us' },
  { 
    label: 'SCUBA DIVING', 
    href: '/scuba-diving', 
    dropdown: [
      { label: 'Beginners (Discover)', href: '/scuba-diving?tab=beginners' },
      { label: 'Certified Divers', href: '/scuba-diving?tab=certified' },
    ]
  },
  { 
    label: 'PADI COURSES', 
    href: '#', 
    dropdown: [
      { label: 'Bubblemaker', href: '/padi-courses/bubblemaker' },
      { label: 'PADI Scuba Diver', href: '/padi-courses/PADIScubaDiver' },
      { label: 'Open Water Diver', href: '/padi-courses/OpenWaterDiver' },
      { label: 'Advanced Open Water Diver', href: '/padi-courses/AdvancedOpenWaterDiver' },
      { label: 'Rescue Diver', href: '/padi-courses/RescueDiver' },
      { label: 'Emergency First Response (EFR)', href: '/padi-courses/EmergencyFirstResponse' },
      { label: 'Divemaster', href: '/padi-courses/Divemaster' },
      { label: 'Specialties', href: '/padi-courses/Specialties' },
    ]
  },
  { 
    label: 'ACTIVITIES', 
    href: '#',
    dropdown: [
      { label: 'Snorkeling', href: '#' }, 
    ]
  },
  { 
    label: 'DIVE SITES', 
    href: '#',
    dropdown: [
      { label: 'Hikkaduwa Dive Sites', href: '#' }, 
    ]
  },
  { label: 'PRICING', href: '#' },
  { label: 'CONTACT US', href: '/contact' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleDropdownClick = (e: React.MouseEvent, label: string) => {
    if (window.innerWidth <= 1400) { 
      e.preventDefault(); 
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  return (
    <nav className={styles.navbarWrapper}>
      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
           <FaTimes size={24} color="#333" />
        ) : (
           <>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
           </>
        )}
      </button>

      {/* Nav List */}
      <div className={`${styles.navContainer} ${menuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          
          {/* LEFT SIDE: First 4 items (Home, About, Scuba, PADI) */}
          {NAV_LINKS.slice(0, 4).map((link) => (
            <li 
              key={link.label} 
              className={`${styles.navItem} ${link.dropdown ? styles.hasDropdown : ''}`}
            >
              <Link 
                href={link.href} 
                className={styles.navLink}
                onClick={(e) => {
                  if (link.dropdown) {
                    handleDropdownClick(e, link.label);
                  } else {
                    closeMenu(); 
                  }
                }}
              >
                {link.label}
                {link.dropdown && <FaChevronDown className={styles.dropdownIcon} />}
              </Link>

              {link.dropdown && (
                <ul className={`${styles.dropdownMenu} ${activeDropdown === link.label ? styles.showDropdownMobile : ''}`}>
                  {link.dropdown.map((subItem) => (
                    <li key={subItem.label} className={styles.dropdownItem}>
                      <Link 
                        href={subItem.href} 
                        className={styles.dropdownLink}
                        onClick={closeMenu} 
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* CENTER SPACE FOR LOGO */}
          <li className={styles.fakeLogoSpace} aria-hidden="true"></li>

          {/* RIGHT SIDE: Last 4 items (Activities, Sites, Pricing, Contact) */}
          {NAV_LINKS.slice(4).map((link) => (
            <li 
              key={link.label} 
              className={`${styles.navItem} ${link.dropdown ? styles.hasDropdown : ''}`}
            >
              <Link 
                href={link.href} 
                className={styles.navLink} 
                onClick={(e) => {
                  if (link.dropdown) {
                    handleDropdownClick(e, link.label);
                  } else {
                    closeMenu();
                  }
                }}
              >
                {link.label}
                {link.dropdown && <FaChevronDown className={styles.dropdownIcon} />}
              </Link>

              {link.dropdown && (
                <ul className={`${styles.dropdownMenu} ${activeDropdown === link.label ? styles.showDropdownMobile : ''}`}>
                  {link.dropdown.map((subItem) => (
                    <li key={subItem.label} className={styles.dropdownItem}>
                      <Link 
                        href={subItem.href} 
                        className={styles.dropdownLink}
                        onClick={closeMenu} 
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Mobile Bottom Close Button */}
          <li className={styles.mobileCloseItem}>
            <button className={styles.mobileCloseButton} onClick={closeMenu}>
              <FaTimes /> Close Menu
            </button>
          </li>

        </ul>
      </div>

      {/* Center Logo */}
      <div className={styles.logoItem}>
        <Link href="/" onClick={closeMenu}>
          <Image src={logo} alt="Divevora Logo" className={styles.logo} priority/>
        </Link>
      </div>
    </nav>
  );
}