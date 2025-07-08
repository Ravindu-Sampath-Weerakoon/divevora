'use client'

import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Image from 'next/image';
import logo from './logo.png';

const NAV_LINKS = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT US', href: '#' },
  { label: 'SCUBA DIVING', href: '#' },
  { label: 'PADIE COURSES', href: '#' },
  { label: 'ACTIVITIES', href: '#' },
  { label: 'DIVE SITES', href: '#' },
  { label: 'PRICING', href: '#' },
  { label: 'CONTACT US', href: '#' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        onClick={() => setMenuOpen(false)}
      >
        {NAV_LINKS.slice(0, 4).map((link) => (
          <li key={link.label} className={styles.navItem}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}

        <li className={styles.fakeLogoSpace} aria-hidden="true"></li>

        {NAV_LINKS.slice(4).map((link) => (
          <li key={link.label} className={styles.navItem}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Center Logo */}
      <div className={styles.logoItem}>
        <Image src={logo} alt="Divevora Logo" className={styles.logo} />
      </div>
    </nav>
  );
}
