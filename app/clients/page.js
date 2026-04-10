"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientsPage() {
  const clients = [
    // International & Development
    {
      name: "German Cooperation",
      logo: "/clients/german-coop.png",
      description: "Deutsche Zusammenarbeit – Strategic partnerships in international development.",
      category: "International Development"
    },
    {
      name: "GIZ",
      logo: "/clients/giz.png",
      description: "Deutsche Gesellschaft für Internationale Zusammenarbeit – Global development cooperation.",
      category: "Development Agency"
    },
    {
      name: "GSF",
      logo: "/clients/gsf.png",
      description: "Global Sustainability Forum – Advocacy and sustainability initiatives.",
      category: "Sustainability"
    },
    {
      name: "SDPA",
      logo: "/clients/sdpa.png",
      description: "Social Development & People's Action – Community empowerment initiatives.",
      category: "Social Development"
    },
    {
      name: "Samarth Bihar",
      logo: "/clients/samarth-bihar.png",
      description: "State-led capacity development and social impact programs.",
      category: "Govt. & Social Impact"
    },
    {
      name: "Gaon Jawar",
      logo: "/clients/gaon-jawar.png",
      description: "Grassroots rural development and capacity-building platform.",
      category: "Rural Development"
    },

    // Culture & Institutions
    {
      name: "NMNH",
      logo: "/clients/nmnh.png",
      description: "National Museum of Natural History – Cultural and educational experiences.",
      category: "Cultural Institution"
    },
    {
      name: "Nature Protects",
      logo: "/clients/nature-protects.jpg",
      description: "Conservation awareness and environmental education initiatives.",
      category: "Environment"
    },

    // Professional & Research Associations
    {
      name: "SIRS",
      logo: "/clients/sirs.png",
      description: "Society for Information Research & Studies – Research and information services.",
      category: "Research Organization"
    },
    {
      name: "LPA",
      logo: "/clients/lpa.png",
      description: "Library Professionals Association – Educational and professional development.",
      category: "Professional Association"
    },

    // Publishing & Knowledge
    {
      name: "Elsevier",
      logo: "/clients/elsevier.jpg",
      description: "Global information analytics for scientific research and health.",
      category: "Publishing"
    },
    {
      name: "Wiley",
      logo: "/clients/wiley.png",
      description: "Global research and learning company enabling discovery.",
      category: "Publishing"
    },
    {
      name: "Wolters Kluwer",
      logo: "/clients/wolters-kluwer.jpg",
      description: "Global leader in professional information and software solutions.",
      category: "Publishing"
    },
    {
      name: "SAGE Publishing",
      logo: "/clients/sage-publishing.png",
      description: "Independent academic publisher of books, journals, and digital media.",
      category: "Publishing"
    },
    {
      name: "BMJ",
      logo: "/clients/bmj.png",
      description: "Global healthcare knowledge provider and medical publisher.",
      category: "Publishing"
    },
    {
      name: "Bentham Science",
      logo: "/clients/bentham-science.png",
      description: "Publisher of scientific, technical, and medical research.",
      category: "Publishing"
    },
    {
      name: "EBSCO",
      logo: "/clients/ebsco.png",
      description: "Leading provider of research databases, e-journals, and discovery services.",
      category: "Information Services"
    },
    {
      name: "TERI",
      logo: "/clients/teri.jpg",
      description: "The Energy and Resources Institute – Research in energy, environment, and sustainability.",
      category: "Research Institute"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 bg-gradient-to-br from-soft via-white to-surface-2">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-highlight/5 to-transparent rounded-full blur-3xl" />

        <div className="relative container-default text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Trusted Partnerships</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary font-heading mb-6 tracking-tight">
              Our <span className="gradient-text">Clients</span>
            </h1>

            <p className="p-large text-body/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                Partnering with leading organizations across diverse sectors to create meaningful brand experiences
                that drive positive change and lasting impact.
            </p>

            <div className="divider mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-50">
        <div className="container-default">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
                { label: "Happy Clients", value: "50+", color: "text-primary" },
                { label: "Projects Delivered", value: "200+", color: "text-highlight" },
                { label: "Industries Served", value: "15+", color: "text-accent" },
                { label: "Client Satisfaction", value: "98%", color: "text-plum" }
            ].map((stat, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                >
                    <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
                    <div className="text-sm font-medium text-muted uppercase tracking-wide">{stat.label}</div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid Section */}
      <section className="section bg-soft relative overflow-hidden">
        <div className="container-default relative z-10">
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

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-3xl p-8 shadow-subtle border border-gray-100/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover-lift interactive"
              >
                {/* Logo Container */}
                <div className="bg-soft/50 rounded-2xl p-6 mb-8 h-36 flex items-center justify-center relative overflow-hidden group-hover:bg-white transition-colors duration-500">
                    <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                        <Image
                            src={client.logo}
                            alt={client.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Client Info */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider mb-4 border border-primary/10">
                    {client.category}
                  </div>

                  <h3 className="font-bold text-2xl text-primary mb-3 group-hover:text-plum transition-colors duration-300">
                    {client.name}
                  </h3>

                  <p className="text-body/70 leading-relaxed text-sm">
                    {client.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative background element */}
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/4 translate-y-1/4" />
      </section>
    </main>
  );
}
