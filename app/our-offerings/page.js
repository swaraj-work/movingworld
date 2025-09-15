import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function OurOfferingsPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-brand text-white py-16 sm:py-20">
        <div className="container-default">
          <h1 className="text-3xl md:text-5xl font-bold">Our Offerings</h1>
          <p className="mt-4 max-w-3xl text-white/85">Explore our suite of services and solutions designed to move the world through brand experiences.</p>
        </div>
      </section>
      <section className="container-default py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">Strategy</h3>
            <p className="text-body/80 mt-3">Positioning, architecture, research, and go-to-market plans.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">Design</h3>
            <p className="text-body/80 mt-3">Identity systems, guidelines, and multi-channel creative.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">Activation</h3>
            <p className="text-body/80 mt-3">Campaigns, experiences, content, and measurement.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
