import React from "react";
import TopBarIcon from '../TopBar/TopBarIcon'
import styles from "./TopBar.module.css";


const FacebookSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

// YouTube SVG
const YouTubeSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
);

// TikTok SVG
const TikTokSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 3v12.6a3 3 0 1 1-2-2.83V9.5a5 5 0 1 0 5 5V8.2c.8.5 1.7.8 2.7.8h.3V6.5h-.3c-1 0-1.9-.4-2.7-1.1A4.2 4.2 0 0 1 11 3H9z"/>
    </svg>
);



const TopBar: React.FC = () => (
    <div className={styles["topBar"]}>
        <div className={styles["socialIcons"]}>
            <TopBarIcon label="Facebook" href="https://facebook.com" icon={FacebookSVG} />
            <TopBarIcon label="YouTube" href="https://youtube.com" icon={YouTubeSVG} />
            <TopBarIcon label="TikTok" href="https://tiktok.com" icon={TikTokSVG} />         
        </div>
    </div>
);

export default TopBar;