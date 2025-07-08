// import Image from "next/image";
// import styles from "./page.module.css";

import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";


export default function Home() {
  return (
    <div>
        <TopBar/>
        <NavBar/>
        <HeroSection/>
        <div style={{ height: "5000px" }}>
          {/* <img src="/main_image.jpg" alt="Description" style={{ width: "100%", maxWidth: "1200px" }} /> */}
        </div>
    </div>
    
  );
}
