export default function OurExpertise() {
  const expertise = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Brand Communication & Corporate Films",
      color: "text-primary"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Documentaries & Behaviour Change Communication",
      color: "text-plum"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "Television Commercials & Radio Production",
      color: "text-highlight"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Events & Digital Platforms",
      color: "text-accent"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Content Creation for New Media",
      color: "text-primary"
    }
  ];

  return (
    <section id="expertise" className="section bg-surface relative" style={{ scrollMarginTop: 'clamp(80px, 8vw, 120px)' }}>
      <div className="container-default">
        <div className="text-center max-w-4xl mx-auto">
          {/* Section Heading */}
          <h2 className="h2 text-primary mb-6">
            Our Expertise
          </h2>
          <div className="divider mx-auto mb-6"></div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-heading text-primary italic mb-8">
            "We don't just create campaigns — we build{" "}
            <span className="gradient-text">movements</span>."
          </p>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {expertise.map((item, index) => (
              <div key={index} className="card p-6 hover-lift interactive group text-center">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-surface-2 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/5 transition-colors duration-300">
                  <div className={`${item.color} group-hover:text-primary transition-colors duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-lg font-semibold font-heading ${item.color} group-hover:text-primary transition-colors duration-300 leading-tight`}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Strength Statement */}
          <div className="bg-soft rounded-2xl p-6 shadow-subtle border border-gray-100/50">
            <p className="p-large leading-relaxed text-body text-center">
              Our strength lies in merging{" "}
              <span className="text-primary font-semibold">international experience</span>{" "}
              with a deep understanding of{" "}
              <span className="text-highlight font-semibold">cultural values</span>, enabling us to deliver{" "}
              <span className="text-plum font-semibold">innovative solutions</span>{" "}
              that resonate across diverse audiences.
            </p>
          </div>

          {/* CTA Section */}
          {/* <div className="flex justify-center mt-12">
            <a href="/our-offerings" className="button-primary text-lg px-10 py-4 group button-smooth">
              See Our Work in Action
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
