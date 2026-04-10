import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppWrapper from "../components/AppWrapper";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "Moving World | Premium Brand Experiences",
  description: "Moving the World Through Creative Strategy, Design, and Innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.png"/>
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased selection:bg-primary selection:text-white`}>
        <Navbar />
        <AppWrapper>
          <main>{children}</main>
        </AppWrapper>
        <Footer />
      </body>
    </html>
  );
}