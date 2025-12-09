'use client'

import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link'; // 1. Import Link
import logo from './logo.png';

// 2. Updated paths to match your actual pages
const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'SCUBA DIVING', href: '#' }, // Update these later when you create the pages
  { label: 'PADIE COURSES', href: '#' },
  { label: 'ACTIVITIES', href: '#' },
  { label: 'DIVE SITES', href: '#' },
  { label: 'PRICING', href: '#' },
  { label: 'CONTACT US', href: '/contact' },
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
        {/* Left Side Links */}
        {NAV_LINKS.slice(0, 4).map((link) => (
          <li key={link.label} className={styles.navItem}>
            {/* 3. Replaced <a> with <Link> */}
            <Link href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}

        {/* Space for Center Logo */}
        <li className={styles.fakeLogoSpace} aria-hidden="true"></li>

        {/* Right Side Links */}
        {NAV_LINKS.slice(4).map((link) => (
          <li key={link.label} className={styles.navItem}>
            <Link href={link.href} className={styles.navLink}>
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