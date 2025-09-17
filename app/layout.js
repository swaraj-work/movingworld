import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Moving World",
  description: "Moving the World Through Brand Experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png"/>
      </head>
      <body className={`${playfair.variable} ${inter.variable} w-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}