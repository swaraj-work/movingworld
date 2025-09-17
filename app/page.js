import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="p-0">
        <Hero />
        <Services />
      </div>
    </main>
  );
}
