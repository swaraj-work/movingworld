import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SanjeevaniPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-brand text-white py-16 sm:py-20">
        <div className="container-default">
          <h1 className="text-3xl md:text-5xl font-bold">Sanjeevani</h1>
          <p className="mt-4 max-w-3xl text-white/85">Initiatives and programs under Sanjeevani.</p>
        </div>
      </section>
      <section className="container-default py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">Health & Wellness</h3>
            <p className="text-body/80 mt-3">Awareness, workshops, and community engagement programs.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">CSR Activations</h3>
            <p className="text-body/80 mt-3">Collaborations with partners to drive measurable social impact.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
