import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "./components/home/header"



import "./globals.css";
import Script from "next/script";
import Head from "next/head";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Paytude",
//   description: "Paytude is a payment gateway for the modern web.",
//   keywords:
//     "payment gateway, paytude, paytude payment gateway, payment gateway for modern web",
//   openGraph: {
//     title: "Paytude",
//     description: "Paytude is a payment gateway for the modern web.",
//     url: "https://www.paytude.com",
//     siteName: "Paytude",
//     type: "website",
//     locale: "en_IN",
//     images: [
//       {
//         url: "https://www.paytude.com/PayTude_Favicon180X180.png",
//         alt: "Paytude Logo",
//       },
//     ],
//   },
//   icons: {
//     icon: [{ rel: "icon", url: "/PayTude_Favicon180X180.png?" }],
//     apple: "/PayTude_Favicon180X180.png?",
//     shortcut: { url: "/PayTude_Favicon180X180.png?" },
//   },
// };

export const metadata: Metadata = {
  title: "PinTude",
  description: "Grow Your Business Online for Just ₹500 Per Year",
  keywords: "PinTude, PinTude.com, PinTude Website, PinTude.com Website, PinTude.com Website, PinTude.com, PinTude, PinTude.com, PinTude.com",
  icons: {
    icon: "/favicon.svg", // Add your favicon here
  },
  openGraph: {
    title: "PinTude",
    description: "Grow Your Business Online for Just ₹500 Per Year",
    url: "https://pintude.com",
    siteName: "PinTude",
    locale: "en_IN, hi_IN",
    images: [
      {
        url: "https://www.hellopintude.com/PinTude_Website_Thumbnail.png",
        alt: "PinTude",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header/>
        {children}

        <Script
          src="https://reportzai.com/script.js"
          data-website-id="238976fb-f3f6-48f6-b01a-f1daa2867db3"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
