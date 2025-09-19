export default function AboutUsHome() {
  return (
    <section className="section bg-surface relative">
      <div className="container-default">
        <div className="text-center max-w-4xl mx-auto">
          {/* Section Heading */}
          <h2 className="h2 text-primary mb-8">
            About Us
          </h2>
          <div className="divider mx-auto mb-12"></div>

          {/* Content */}
          <div className="space-y-8 text-left">
            <p className="p-large leading-relaxed text-body">
              At the heart of Moving World lies a passionate team of{" "}
              <span className="text-primary font-semibold">creators</span>,{" "}
              <span className="text-plum font-semibold">strategists</span>, and{" "}
              <span className="text-highlight font-semibold">storytellers</span>{" "}
              united by one vision — to move people, communities, and businesses with meaningful ideas.
            </p>

            <p className="p-large leading-relaxed text-body">
              We believe creativity is only valuable when it delivers results. That's why we design campaigns that not only capture attention but also foster growth, strengthen reputation, and create long-lasting impact.
            </p>

            <div className="text-center py-8">
              <p className="text-xl sm:text-2xl font-heading text-primary italic">
                "Your vision becomes our <span className="gradient-text">approach</span>."
              </p>
              <div className="w-16 h-0.5 bg-highlight mx-auto mt-4"></div>
            </div>
          </div>

          {/* CTA Section */}
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a href="/about-us" className="button-primary text-lg px-10 py-4 group button-smooth">
              Learn More About Us
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