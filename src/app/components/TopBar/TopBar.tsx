import React from "react";
import TopBarIcon from "../TopBar/TopBarIcon";
import styles from "./TopBar.module.css";

import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

const TopBar: React.FC = () => (
  <div className={styles.topBar}>
    <div className={styles.leftContent}>
      Follow Our Social Media
    </div>
    <div className={styles.socialIcons}>
      <TopBarIcon label="Facebook" href="https://facebook.com" icon={<FaFacebookF size={24} />} />
      <TopBarIcon label="YouTube" href="https://youtube.com" icon={<FaYoutube size={24} />} />
      <TopBarIcon label="TikTok" href="https://tiktok.com" icon={<FaTiktok size={24} />} />
    </div>
  </div>
);

export default TopBar;