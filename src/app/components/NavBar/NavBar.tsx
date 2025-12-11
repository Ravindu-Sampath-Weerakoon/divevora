'use client'

import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from './logo.png';
import { FaChevronDown, FaTimes } from 'react-icons/fa'; // Import FaTimes for the X icon

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'SCUBA DIVING', href: '/scuba-diving' },
  { 
    label: 'PADI COURSES', 
    href: '#', 
    dropdown: [
      { label: 'Bubblemaker', href: '/padi-courses/bubblemaker' },
      { label: 'PADI Scuba Diver', href: '#' },
      { label: 'Open Water Diver', href: '#' },
      { label: 'Advanced Open Water Diver', href: '#' },
      { label: 'Rescue Diver', href: '#' },
      { label: 'Emergency First Response (EFR)', href: '#' },
      { label: 'Divemaster', href: '#' },
      { label: 'Specialties', href: '#' },
    ]
  },
  { label: 'ACTIVITIES', href: '#' },
  { label: 'DIVE SITES', href: '#' },
  { label: 'PRICING', href: '#' },
  { label: 'CONTACT US', href: '/contact' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdownClick = (e: React.MouseEvent, label: string) => {
    if (window.innerWidth <= 1068) { 
      e.preventDefault(); 
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  return (
    <nav className={styles.navbarWrapper}>
      {/* Hamburger / Close Icon (Top Left) */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {/* Toggle between Hamburger bars and X icon based on state */}
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

      {/* Navigation Links */}
      <ul className={`${styles.navList} ${menuOpen ? styles.navOpen : ''}`}>
        
        {/* Left Side Links */}
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
                  setMenuOpen(false);
                }
              }}
            >
              {link.label}
              {link.dropdown && <FaChevronDown className={styles.dropdownIcon} />}
            </Link>

            {/* Dropdown Menu */}
            {link.dropdown && (
              <ul className={`${styles.dropdownMenu} ${activeDropdown === link.label ? styles.showDropdownMobile : ''}`}>
                {link.dropdown.map((subItem) => (
                  <li key={subItem.label} className={styles.dropdownItem}>
                    <Link 
                      href={subItem.href} 
                      className={styles.dropdownLink}
                      onClick={() => setMenuOpen(false)} 
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* Space for Center Logo */}
        <li className={styles.fakeLogoSpace} aria-hidden="true"></li>

        {/* Right Side Links */}
        {NAV_LINKS.slice(4).map((link) => (
          <li key={link.label} className={styles.navItem}>
            <Link 
              href={link.href} 
              className={styles.navLink} 
              onClick={() => setMenuOpen(false)} 
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* --- NEW: Bottom Close Button (Mobile Only) --- */}
        <li className={styles.mobileCloseItem}>
          <button className={styles.mobileCloseButton} onClick={() => setMenuOpen(false)}>
            <FaTimes /> Close Menu
          </button>
        </li>

      </ul>

      {/* Center Logo */}
      <div className={styles.logoItem}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="Divevora Logo" className={styles.logo} />
        </Link>
      </div>
    </nav>
  );
}