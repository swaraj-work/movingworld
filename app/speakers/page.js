import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SpeakersPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-brand text-white py-16 sm:py-20">
        <div className="container-default">
          <h1 className="text-3xl md:text-5xl font-bold">Speakers</h1>
          <p className="mt-4 max-w-3xl text-white/85">Discover our network of expert speakers and thought leaders.</p>
        </div>
      </section>
      <section className="container-default py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Brand Strategy", "Design Systems", "Digital Growth", "Culture & Research", "Content", "Leadership"].map((topic) => (
            <div key={topic} className="card p-6 text-center hover:border-plum/40 transition-all">
              <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 text-primary grid place-items-center font-semibold">{topic.split(' ')[0][0]}</div>
              <h3 className="font-heading text-xl text-body mt-4">{topic}</h3>
              <p className="text-body/70 text-sm mt-2">Talks, workshops, and keynotes tailored to your audience.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
