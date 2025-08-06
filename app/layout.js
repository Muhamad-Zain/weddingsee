import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wedding See",
  description: "Undangan Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="icon" href="/logo.ico" type="image/x-icon" className="rounded-full" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Dancing+Script:wght@400..700&family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playpen+Sans:wght@100..800&display=swap" rel="stylesheet" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased sm:max-w-[1200px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
