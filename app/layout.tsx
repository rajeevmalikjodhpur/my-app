import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <meta
          name="google-site-verification"
          content="JI-KFo-E4eCxh5edWdpYN7aCzbxvHY0baxcRUlxJl8c"
        />
       {/* Google Analytics */}
       <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5BN3J5GLX0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-5BN3J5GLX0');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Header />
         <Carousel/>
         {children}
         <Footer/> 
      </body>
    </html>
  );
}
