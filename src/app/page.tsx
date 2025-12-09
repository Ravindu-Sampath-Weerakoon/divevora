// import TopBar, NavBar, and Footer are NO LONGER NEEDED here
import AdventureBanner from "./components/AdventureBannerSection/AdventureBanner";
import DiveWithUs from "./components/DiveWithUs/DiveWithUs";
import HeroSection from "./components/HeroSection/HeroSection";
import OfferCardSection from "./components/OfferSection/OfferCardSection";
import PeopleSaySection from "./components/PeopleSaySectio/PeopleSaySectio";

export default function Home() {
  return (
    <div>
        {/* Only include page-specific sections */}
        <HeroSection/>
        <OfferCardSection/>
        <AdventureBanner/>
        <DiveWithUs/>
        <PeopleSaySection/>
    </div>
  );
}