import type { Metadata } from "next";
import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${montserrat.variable} ${openSans.variable} ${roboto.variable}`}
      >
        {/*
          This div is purely for the initial splash screen.
          It's server-rendered and will be removed by a simple,
          non-React JavaScript. React will NOT hydrate this specific div.
          It should *not* be managed by React state.
        */}
        <div id="initial-loading-splash">
          <p>Loading Divevora...</p>
        </div>

        {/* This script runs immediately after the splash screen is parsed,
            but before the main React app hydrates. It hides the splash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const splash = document.getElementById('initial-loading-splash');
                if (splash) {
                  // Option 1: Immediately hide the splash for fast removal
                  splash.style.display = 'none';

                  // Option 2: Add a class for a CSS fade-out transition.
                  // If using this, ensure your CSS has the .fade-out class and
                  // that the component is eventually removed from the DOM
                  // (e.g., after the transition ends, or just leave it display:none)
                  // splash.classList.add('fade-out');

                  // If using a fade-out, you might want to remove it fully
                  // after the transition, but for a quick splash, display:none is often enough.
                  // splash.addEventListener('transitionend', () => splash.remove());
                }
              })();
            `,
          }}
        />

        {/* Your actual Next.js application content */}
        {children}
      </body>
    </html>
  );
}