import React from "react";
import styles from "./TopBarIcon.module.css";

interface TopBarIconProps {
    label: string;           // e.g., "Facebook"
    href: string;            // e.g., "https://facebook.com"
    icon: React.ReactNode;   // e.g., <svg>...</svg>
}

const TopBarIcon: React.FC<TopBarIconProps> = ({ label, href, icon }) => (
    <a href={href} className={styles["social-icon"]} aria-label={label} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className={styles["sr-only"]}>{label}</span>
    </a>
);

export default TopBarIcon;