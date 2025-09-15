import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactUsPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-brand text-white py-16 sm:py-20">
        <div className="container-default">
          <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 max-w-3xl text-white/85">We'd love to hear from you. Reach out to us with your queries or collaboration ideas.</p>
        </div>
      </section>
      <section className="container-default py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">Email</h3>
            <p className="text-body/80 mt-3">hello@movingworld.agency</p>
          </div>
          <div className="card p-6">
            <h3 className="font-heading text-2xl text-primary">Phone</h3>
            <p className="text-body/80 mt-3">+91-00000 00000</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
