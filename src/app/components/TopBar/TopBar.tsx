import React from "react";
import TopBarIcon from "../TopBar/TopBarIcon";
import styles from "./TopBar.module.css";

import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const TopBar: React.FC = () => (
  <div className={styles.topBar}>
    <div className={styles.leftContent}>
      Follow Our Social Media
    </div>
    <div className={styles.socialIcons}>
      <TopBarIcon label="Facebook" href="https://www.facebook.com/share/17DoGFmzQx/?mibextid=wwXIfr" icon={<FaFacebookF size={24} />} />
      <TopBarIcon label="Instagram" href="https://www.instagram.com/divevora_sri_lanka?igsh=MWowcG92eTBjdHJ0bA==" icon={<FaInstagram size={24} />} />
      <TopBarIcon label="TikTok" href="https://www.tiktok.com/@divevora.sri.lank?_t=ZS-8ygLtv2P0Es&_r=1" icon={<FaTiktok size={24} />} />
    </div>
  </div>
);

export default TopBar;