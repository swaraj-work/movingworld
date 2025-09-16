import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ClientsPage() {
  const clients = [
    {
      name: "German Cooperation",
      logo: "/clients/german-coop.png",
      description: "Deutsche Zusammenarbeit - Strategic partnerships in international development",
      category: "International Development"
    },
    {
      name: "GIZ",
      logo: "/clients/giz.png",
      description: "Deutsche Gesellschaft für Internationale Zusammenarbeit - Global development cooperation",
      category: "Development Agency"
    },
    {
      name: "SDPA",
      logo: "/clients/sdpa.png",
      description: "Social Development & People's Action - Community empowerment initiatives",
      category: "Social Development"
    },
    {
      name: "NMNH",
      logo: "/clients/nmnh.png",
      description: "National Museum of Natural History - Cultural and educational experiences",
      category: "Cultural Institution"
    },
    {
      name: "SIRS",
      logo: "/clients/sirs.png",
      description: "Society for Information Research & Studies - Research and information services",
      category: "Research Organization"
    },
    {
      name: "LPA",
      logo: "/clients/lpa.png",
      description: "Library Professionals Association - Educational and professional development",
      category: "Professional Association"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-soft via-white to-surface-2">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-highlight/5 to-transparent rounded-full blur-3xl" />

        <div className="relative container-default text-center lg:top-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-primary">Trusted Partnerships</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">Clients</span>
          </h1>

          <p className="text-lg sm:text-xl text-body/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Partnering with leading organizations across diverse sectors to create meaningful brand experiences
            that drive positive change and lasting impact.
          </p>

          <div className="divider mx-auto" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-default">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-body/70">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-highlight mb-2">200+</div>
              <div className="text-sm text-body/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-body/70">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-plum mb-2">98%</div>
              <div className="text-sm text-body/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid Section */}
      <section className="section bg-soft relative">
        <div className="container-default">
          <div className="text-center mb-16">
            <h2 className="h2 text-primary mb-6">
              Trusted by Leading
              <span className="text-plum block">Organizations</span>
            </h2>
            <p className="text-lg text-body/80 max-w-2xl mx-auto">
              We're proud to work with organizations that share our commitment to creating
              meaningful impact through exceptional brand experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-subtle border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover-lift"
              >
                {/* Logo Container */}
                <div className="bg-white rounded-2xl p-6 mb-6 h-32 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Client Info */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {client.category}
                  </div>

                  <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-plum transition-colors">
                    {client.name}
                  </h3>

                  <p className="text-body/70 leading-relaxed text-sm">
                    {client.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                {/* <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">View Partnership</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Client Testimonial
            </div>

            <blockquote className="text-2xl lg:text-3xl font-medium text-body leading-relaxed mb-8">
              "Moving World transformed our brand presence with their innovative approach and
              deep understanding of our mission. Their team delivered exceptional results that
              exceeded our expectations."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-plum flex items-center justify-center text-white font-bold">
                MW
              </div>
              <div className="text-left">
                <div className="font-semibold text-primary">Michael Weber</div>
                <div className="text-sm text-body/70">Director, International Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        
        <div className="relative container-default text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Join Our
            <span className="block">Success Stories?</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's create something extraordinary together. Partner with Moving World 
            to transform your brand experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us" 
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/our-offerings" 
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
