import type { Metadata } from "next";
import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import SplashRemover from "./components/SplashRemover";

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
    <div id="initial-loading-splash">
    <p>Loading Divevora...</p>
  </div>

    <div id="app-root" className="app-hidden">
    <SplashRemover/>
    {children}
  </div>
  </body>
  </html>

   
  );
}