import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="pt-0"> {/* No padding needed since Hero is full-screen */}
        <Hero />
        <Services />
      </div>
    </main>
  );
}
