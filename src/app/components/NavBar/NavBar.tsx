import React from 'react';
import styles from './NavBar.module.css';
import Image from 'next/image';
import logo from './logo.jpeg';

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
  return (
    <nav className={styles.navbarWrapper}>
      <ul className={styles.navList}>
        {NAV_LINKS.slice(0, 4).map((link) => (
          <li key={link.label} className={styles.navItem}>
            <a href={link.href} className={styles.navLink}>{link.label}</a>
          </li>
        ))}
        <li className={styles.logoItem}>
          <Image src={logo} alt="Divevora Logo" className={styles.logo} />
        </li>
        {NAV_LINKS.slice(4).map((link) => (
          <li key={link.label} className={styles.navItem}>
            <a href={link.href} className={styles.navLink}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
