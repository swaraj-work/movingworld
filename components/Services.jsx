export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Creative Strategy",
      description: "Turning insights into impactful campaigns.",
      color: "text-primary"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Marketing Services",
      description: "Crafting growth-driven communication.",
      color: "text-plum"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Event Marketing & Management",
      description: "Designing memorable experiences.",
      color: "text-highlight"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Film & Advertising Productions",
      description: "From concept to execution.",
      color: "text-accent"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Design & Printing",
      description: "Visual storytelling that makes a mark.",
      color: "text-primary"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Digital Marketing & Social Media",
      description: "Engaging audiences, building communities.",
      color: "text-plum"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10.5 8.5l2 2L17 6" />
        </svg>
      ),
      title: "Web & App Development",
      description: "Seamless, user-focused digital presence.",
      color: "text-highlight"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      title: "Celebrity & Speaker Management",
      description: "Connecting brands with influential voices.",
      color: "text-highlight"
    }
  ];

  return (
    <section id="services" className="section bg-soft relative" style={{ scrollMarginTop: 'clamp(80px, 8vw, 120px)' }}>
      <div className="container-default">
        <div className="text-center max-w-4xl mx-auto">
          {/* Section Heading */}
          <h2 className="h2 text-primary mb-6">
            Our Services
          </h2>
          <div className="divider mx-auto mb-6"></div>

          {/* Description */}
          <p className="p-large leading-relaxed text-body mb-10">
            We offer a complete suite of{" "}
            <span className="text-primary font-semibold">communication</span> and{" "}
            <span className="text-highlight font-semibold">marketing services</span>{" "}
            that help your brand stand out and thrive in today's fast-changing world.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card p-6 hover-lift interactive group">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-surface-2 flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors duration-300`}>
                  <div className={`${service.color} group-hover:text-primary transition-colors duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-semibold mb-3 font-heading ${service.color} group-hover:text-primary transition-colors duration-300`}>
                  {service.title}
                </h3>

                <p className="text-muted leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <a href="/our-offerings" className="button-accent text-lg px-10 py-4 group button-smooth shadow-glow-highlight">
              View Our Portfolio
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a href="/contact-us" className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-primary/30 text-primary rounded-full font-semibold text-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm">
              <span>Get Started</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}