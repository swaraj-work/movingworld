import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutUsPage() {
  return (
    <main>
      <Navbar />
      {/* Header band */}
      <section className="bg-gradient-brand text-white py-16 sm:py-20">
        <div className="container-default">
          <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 max-w-3xl text-white/85">Learn more about Moving World Agency, our mission, values, and the team driving brand experiences.</p>
        </div>
      </section>

      {/* Content area */}
      <section className="container-default py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">Who We Are</h3>
            <p className="text-body/80 mt-3">We’re a collective of strategists, designers, and producers passionate about crafting brand experiences that move people and markets.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">What We Believe</h3>
            <p className="text-body/80 mt-3">Imagination paired with strategy builds trust and results. We honor culture while driving measurable outcomes.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
