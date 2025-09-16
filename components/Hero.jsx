import Carousel from "./Carousel";

export default function Hero() {
  return (
    <>
      {/* Carousel Section */}
      <section className="relative overflow-hidden pt-20">
        <Carousel
          className="w-full 2xl:h-[40rem] xl:h-[35rem] lg:h-[30rem] md:h-[25rem] sm:h-[20rem]"
          images={[
            "https://images.unsplash.com/photo-1757601154408-402910067c40?q=80&w=1486&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1920&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
          ]}
          interval={4500}
        />
      </section>

      {/* Hero Content Section */}
      <section className="section bg-soft relative">
        <div className="container-default">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Transformative Brand Experiences</span>
            </div>
 
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-primary">
              Moving the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">
                World
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-body/80 mt-2">
                Through Brand Experiences
              </span>
            </h1>
 
            <p className="text-lg sm:text-xl text-body/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              We combine knowledge, data, aesthetics and audacity to create original,
              life-changing and meaningful work that helps brands engage deeper with their purpose.
            </p>
 
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="button-accent text-lg px-8 py-4 group">
                Explore Our Services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/contact-us" className="border-2 border-primary/30 text-primary px-8 py-4 rounded-full font-medium hover:bg-primary/5 transition-all duration-300 text-center">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-soft relative">
        <div className="container-default">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                About Moving World
              </div>

              <h2 className="h2 text-primary mb-6">
                Transformative Thinking,
                <span className="text-plum block">Meaningful Impact</span>
              </h2>

              <p className="text-lg text-body/80 leading-relaxed mb-6">
                Moving World is a unique experiential and creative organisation inspired by transformative thinking.
                We don't just create campaigns—we craft experiences that resonate, inspire, and drive meaningful change.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Creative Excellence</h3>
                    <p className="text-sm text-body/70">Award-winning creative solutions that captivate and convert</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-plum/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-plum mb-1">Data-Driven Strategy</h3>
                    <p className="text-sm text-body/70">Strategic insights backed by analytics and market intelligence</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/about-us" className="button-primary">
                  Learn More About Us
                </a>
                <a href="/our-offerings" className="border border-primary/20 text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition-all duration-300 text-center">
                  View Our Work
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-plum/20 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-2xl p-8 shadow-subtle border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-body/70">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-plum mb-1">200+</div>
                    <div className="text-sm text-body/70">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-highlight mb-1">5+</div>
                    <div className="text-sm text-body/70">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-body/70">Support</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-plum/20 border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-highlight/20 border-2 border-white" />
                    </div>
                    <div className="text-sm text-body/70">
                      <span className="font-medium text-primary">Trusted by leading brands</span>
                      <br />across various industries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
