import type { Metadata } from "next";
import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import SplashRemover from "./components/SplashRemover";

// 1. Import your global components here
import TopBar from "./components/TopBar/TopBar";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const roboto = Roboto({
  weight: ["400", "500", "700"], // Added weights for Roboto just in case
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Divevora",
  description: "Discover the Underwater World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} ${roboto.variable}`}>
        
        {/* Loading Screen */}
        <div id="initial-loading-splash">
           <p>Loading Divevora...</p>
        </div>

        {/* Main App Content */}
        <div id="app-root" className="app-hidden">
          <SplashRemover/>
          
          {/* 2. Add TopBar and NavBar above children */}
          <TopBar/>
          <NavBar/>

          {/* This represents the specific page content (Home, About, etc.) */}
          {children}

          {/* 3. Add Footer below children */}
          <Footer/>
        </div>

      </body>
    </html>
  );
}