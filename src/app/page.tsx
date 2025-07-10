// import Image from "next/image";
// import styles from "./page.module.css";

import AdventureBanner from "./components/AdventureBannerSection/AdventureBanner";
import DiveWithUs from "./components/DiveWithUs/DiveWithUs";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import OfferCardSection from "./components/OfferSection/OfferCardSection";
import PeopleSaySection from "./components/PeopleSaySectio/PeopleSaySectio";
import TopBar from "./components/TopBar/TopBar";


export default function Home() {
  return (
    <div>
        <TopBar/>
        <NavBar/>
        <HeroSection/>
        <OfferCardSection/>
        <AdventureBanner/>
        <DiveWithUs/>
        <PeopleSaySection/>
      

    </div>
    
  );
}
