import Hero from "../components/Hero";
import AboutUsHome from "../components/AboutUsHome";
import Services from "../components/Services";
import OurExpertise from "../components/OurExpertise";
import OurWork from "../components/OurWork";
import JoinUs from "../components/JoinUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="p-0">
        <Hero />
        <AboutUsHome />
        <Services />
        <OurExpertise />
        <OurWork />
        <JoinUs />
      </div>
    </main>
  );
}
