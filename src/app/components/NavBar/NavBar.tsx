'use client'

import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from './logo.png';
import { FaChevronDown } from 'react-icons/fa'; // Import an icon for the dropdown indicator

// Updated Link Structure
const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'SCUBA DIVING', href: '/scuba-diving' },
  { 
    label: 'PADI COURSES', // Corrected spelling
    href: '#', 
    // Add the dropdown items here
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
  // State to track active dropdown on mobile/click (optional, but good for UX)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Helper to toggle dropdown on mobile
  const handleDropdownClick = (e: React.MouseEvent, label: string) => {
    if (window.innerWidth <= 1068) { // Mobile breakpoint
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
        <span className={menuOpen ? styles.barActive : styles.bar}></span>
        <span className={menuOpen ? styles.barActive : styles.bar}></span>
        <span className={menuOpen ? styles.barActive : styles.bar}></span>
      </button>

      {/* Navigation Links */}
      <ul
        className={`${styles.navList} ${menuOpen ? styles.navOpen : ''}`}
      >
        {/* Left Side Links */}
        {NAV_LINKS.slice(0, 4).map((link) => (
          <li 
            key={link.label} 
            className={`${styles.navItem} ${link.dropdown ? styles.hasDropdown : ''}`}
          >
            <Link 
              href={link.href} 
              className={styles.navLink}
              onClick={(e) => link.dropdown && handleDropdownClick(e, link.label)}
            >
              {link.label}
              {/* Add arrow if it has dropdown */}
              {link.dropdown && <FaChevronDown className={styles.dropdownIcon} />}
            </Link>

            {/* Render Dropdown if it exists */}
            {link.dropdown && (
              <ul className={`${styles.dropdownMenu} ${activeDropdown === link.label ? styles.showDropdownMobile : ''}`}>
                {link.dropdown.map((subItem) => (
                  <li key={subItem.label} className={styles.dropdownItem}>
                    <Link 
                      href={subItem.href} 
                      className={styles.dropdownLink}
                      onClick={() => setMenuOpen(false)} // Close menu on click
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
            <Link href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Center Logo */}
      <div className={styles.logoItem}>
        <Link href="/">
          <Image src={logo} alt="Divevora Logo" className={styles.logo} />
        </Link>
      </div>
    </nav>
  );
}