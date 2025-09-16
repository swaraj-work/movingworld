import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-0"> {/* No padding needed since Hero is full-screen */}
        <Hero />
        <Services />
      </div>
      <Footer />
    </main>
  );
}
