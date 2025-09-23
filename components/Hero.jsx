import Carousel from "./Carousel";

export default function Hero() {
  return (
    <>
      {/* Carousel Section */}
      <section className="relative overflow-hidden lg:pt-20 pt-[4rem] overflow-x-hidden">
        <Carousel
          className="w-full 2xl:h-[65vh] xl:h-[65vh] lg:h-[60vh] md:h-[25rem] sm:h-[20rem] h-[15rem]"
          images={[
            "/crousel/1.jpeg",
            "/crousel/2.jpeg",
            "/crousel/3.jpeg",
            "/crousel/4.jpeg",
            "/crousel/5.jpeg",
          ]}
          interval={4500}
        />
      </section>

      {/* Hero Content Section */}
      <section className="section bg-soft relative overflow-hidden">
        {/* Brand Background Pattern */}
        {/* <div className="absolute inset-0">
          <div className="bg-diagonal-corner absolute inset-0" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-vision rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-brand rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}} />
        </div> */}

        <div className="container-default relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge with Moving World Brand Colors */}
            {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface border-2 border-primary/20 mb-10 shadow-subtle hover-lift">
              <div className="w-3 h-3 bg-highlight rounded-full animate-pulse shadow-glow-highlight" />
              <span className="text-sm font-semibold text-primary tracking-wide">Transformative Brand Experiences</span>
              <div className="w-8 h-0.5 bg-highlight rounded-full"></div>
            </div> */}

            {/* Main Heading with Brand Gradient */}
            <h1 className="h1 mb-6 relative">
              <span className="block text-body font-heading mb-2">We Create and Nurture to</span>
              <span className="block gradient-text font-heading text-4xl sm:text-5xl lg:text-6xl">
                Move the World
              </span>
              <div className="divider mx-auto mt-4"></div>
            </h1>

            {/* Enhanced Description */}
            <div className="space-y-4 mb-8">
              <p className="p-large max-w-4xl mx-auto leading-relaxed text-body">
                At Moving World, we blend{" "}
                <span className="text-primary font-semibold">creativity</span>,{" "}
                <span className="text-plum font-semibold">imagination</span>, and{" "}
                <span className="text-highlight font-semibold">strategy</span>{" "}
                to transform ideas into powerful brand stories.
              </p>
              <p className="text-base text-muted max-w-3xl mx-auto leading-relaxed">
                From films and campaigns to digital experiences and live events, we help brands connect, inspire, and grow.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact-us" className="button-accent text-lg px-10 py-4 group button-smooth shadow-glow-highlight">
                Let's Build Your Story Together
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* <a href="/our-offerings" className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-primary/30 text-primary rounded-full font-semibold text-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm">
                <span>Explore Our Work</span>
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a> */}
            </div>

            {/* Brand Stats with Moving World Colors */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-12 border-t border-primary/10">
              <div className="text-center group hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:text-highlight transition-colors duration-300">50+</div>
                <div className="text-muted font-medium tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center group hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-plum mb-2 group-hover:text-highlight transition-colors duration-300">200+</div>
                <div className="text-muted font-medium tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center group hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-highlight mb-2 group-hover:text-primary transition-colors duration-300">5+</div>
                <div className="text-muted font-medium tracking-wide">Years Experience</div>
              </div>
              <div className="text-center group hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2 group-hover:text-plum transition-colors duration-300">24/7</div>
                <div className="text-muted font-medium tracking-wide">Support</div>
              </div>
            </div> */}

            {/* Trust Indicators */}
            {/* <div className="mt-16 pt-8 border-t border-primary/10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand border-3 border-surface shadow-glow flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MW</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary border-3 border-surface shadow-subtle flex items-center justify-center">
                    <span className="text-white font-bold text-sm">+</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-highlight border-3 border-surface shadow-glow-highlight flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg font-semibold text-primary">Trusted by Leading Brands</div>
                  <div className="text-muted">Across various industries worldwide</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
