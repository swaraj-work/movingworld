import Carousel from "./Carousel";

export default function Hero() {
  return (
    <>
      {/* Carousel Section */}
      <section className="relative overflow-hidden lg:pt-20 pt-[4rem] overflow-x-hidden">
        <Carousel
          className="w-full 2xl:h-[45rem] xl:h-[40rem] lg:h-[35rem] md:h-[25rem] sm:h-[20rem] h-[15rem]"
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
      {/* <section className="section bg-soft relative">
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
      </section> */}

      {/* About Section */}

      <section className="section bg-soft relative overflow-hidden">
        {/* Enhanced Background Gradients */}
        <div className="absolute inset-0">
          {/* Large animated gradient orbs */}
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200/35 via-indigo-100/25 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-gradient-to-r from-cyan-200/30 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000" />

          {/* Medium floating gradients */}
          <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-gradient-to-bl from-purple-300/25 via-pink-200/15 to-transparent rounded-full blur-2xl animate-bounce"
            style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 right-1/5 w-[200px] h-[200px] bg-gradient-to-tl from-blue-300/30 via-cyan-200/20 to-transparent rounded-full blur-2xl animate-bounce"
            style={{ animationDuration: '8s', animationDelay: '2s' }} />

          {/* Subtle mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30" />

          {/* Dot pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.08)_1px,transparent_0)] bg-[length:32px_32px]" />
        </div>

        {/* Floating decorative elements */}
        {/* <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-ping"
          style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-40 animate-ping"
          style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-70 animate-ping"
          style={{ animationDuration: '5s', animationDelay: '1s' }} /> */}

        <div className="container-default relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="h2 text-primary mb-6">About
                <span className="text-plum block">Moving World</span>
              </h2>

              <p className="text-lg text-body/80 leading-relaxed mb-6">
                Moving World is a unique experiential and creative organisation inspired by transformative thinking.
                We don't just create campaigns—we craft experiences that resonate, inspire, and drive meaningful change.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/about-us" className="button-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="relative">Learn More About Us</span>
                </a>
                <a href="/our-offerings" className="border border-primary/20 text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition-all duration-300 text-center relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-all duration-300" />
                  <span className="relative">View Our Work</span>
                </a>
              </div>
            </div>

            {/* Enhanced Stats Card */}
            <div className="relative">
              {/* Multiple layered glows for depth */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-purple-300/15 to-plum/20 rounded-3xl blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 via-transparent to-pink-200/25 rounded-3xl blur-xl" />

              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-subtle border border-gradient-to-br from-gray-200/50 to-transparent">
                {/* Inner subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 rounded-2xl" />

                <div className="relative grid grid-cols-2 gap-6">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-sm text-body/70">Happy Clients</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-plum mb-1 group-hover:scale-110 transition-transform duration-300">200+</div>
                    <div className="text-sm text-body/70">Projects Delivered</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-highlight mb-1 group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-sm text-body/70">Years Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-sm text-body/70">Support</div>
                  </div>
                </div>

                <div className="relative mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-blue-300/60 border-2 border-white shadow-sm" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-plum/40 to-purple-300/60 border-2 border-white shadow-sm" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-highlight/40 to-yellow-300/60 border-2 border-white shadow-sm" />
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
