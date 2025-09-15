import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VisionMission from "../components/VisionMission";
import Services from "../components/Services";
import SuccessFormula from "../components/SuccessFormula";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <VisionMission /> */}
      <Services />
      <SuccessFormula />
      <Team />
      <Footer />
    </main>
  );
}
