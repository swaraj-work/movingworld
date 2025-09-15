import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ClientsPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-brand text-white py-16 sm:py-20">
        <div className="container-default">
          <h1 className="text-3xl md:text-5xl font-bold">Clients</h1>
          <p className="mt-4 max-w-3xl text-white/85">Meet the brands and organizations we've partnered with.</p>
        </div>
      </section>
      <section className="container-default py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Acme Corp", "Globex", "Initech", "Umbrella", "Stark", "Wayne", "Hooli", "Wonka"].map((name) => (
            <div key={name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-subtle hover:border-plum/40 transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary grid place-items-center font-semibold">{name[0]}</div>
              <h3 className="font-heading text-lg text-body mt-4">{name}</h3>
              <p className="text-body/70 text-sm">Brand, digital, or experiential collaborations.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
