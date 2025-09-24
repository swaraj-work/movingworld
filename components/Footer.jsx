"use client";

export default function Footer() {
  const scrollToElement = (element) => {
    // Use native scrollIntoView with scroll-margin-top CSS
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      // Check if we're on the home page
      if (window.location.pathname === '/') {
        // If on home page, just scroll to the section
        if (href === '#home') {
          // Update URL hash to #home
          window.history.pushState(null, null, '#home');
          // Scroll to top of page
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(href);
          if (element) {
            // Update URL hash to the section
            window.history.pushState(null, null, href);
            scrollToElement(element);
          }
        }
      } else {
        // If on another page, navigate to home with hash
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <footer className="relative bg-gray-100 border-t border-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-highlight/5 to-transparent rounded-full blur-3xl" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-default py-16">
          <div className="w-full grid gap-12 md:gap-8 lg:grid-cols-[1.5fr_1.2fr_1.2fr]">
            {/* Brand Section */}
            <div className="lg:pr-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-none bg-transparent overflow-hidden">
                  <img src="/images/logo-transparent.png" alt="Moving World" className="w-full h-full object-contain bg-gray-100 scale-110" />
                </div>
                <div>
                  <span className="font-heading text-2xl font-bold text-primary">Moving World</span>
                </div>
              </div>

              <p className="text-body/80 leading-relaxed mb-8 text-lg text-left">
                Moving the world through transformative brand experiences. We combine strategy, design,
                and innovation to create meaningful impact that helps brands connect deeper with their purpose.
              </p>

              {/* Social Links */}
              <div>
                <div className="font-semibold text-primary mb-4">Follow Our Journey</div>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-500/30 border border-primary/20 flex items-center justify-center text-primary hover:bg-gradient-to-br hover:from-red/20 hover:to-red/10 hover:text-white transition-all duration-300 group hover-lift">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-gradient-to-br from-highlight/10 to-accent/10 border border-highlight/20 flex items-center justify-center text-highlight hover:bg-gradient-to-br hover:from-highlight hover:to-accent hover:text-white transition-all duration-300 group hover-lift">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h4v12.02H3zM9 8.98h3.84v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07v6.37H18.5v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75H9z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10 border border-plum/20 flex items-center justify-center text-plum hover:bg-gradient-to-br hover:from-plum hover:to-primary hover:text-white transition-all duration-300 group hover-lift">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 5.92a8.2 8.2 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.23 8.23 0 01-2.61 1 4.1 4.1 0 00-7 3.74A11.63 11.63 0 013 5.16a4.1 4.1 0 001.27 5.47 4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 19.54 11.6 11.6 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.34 8.34 0 0022 5.92z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl text-primary mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-highlight to-accent rounded-full"></div>
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
                <div>
                  <h5 className="font-semibold text-primary mb-4">Services</h5>
                  <ul className="space-y-3">
                    <li>
                      <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight/60 group-hover:bg-highlight transition-colors"></div>
                        Creative Strategy
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight/60 group-hover:bg-highlight transition-colors"></div>
                        Marketing Services
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight/60 group-hover:bg-highlight transition-colors"></div>
                        Events & Management
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight/60 group-hover:bg-highlight transition-colors"></div>
                        Film & Advertising Productions
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight/60 group-hover:bg-highlight transition-colors"></div>
                        Design & Printing
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-primary mb-4">Company</h5>
                  <ul className="space-y-3">
                    <li>
                      <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors"></div>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#expertise" onClick={(e) => { e.preventDefault(); handleNavClick('#expertise'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors"></div>
                        Our Expertise
                      </a>
                    </li>
                    <li>
                      <a href="#our-work" onClick={(e) => { e.preventDefault(); handleNavClick('#our-work'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors"></div>
                        Our Work
                      </a>
                    </li>
                    <li>
                      <a href="/our-team" className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors"></div>
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="/clients" className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors"></div>
                        Our Clients
                      </a>
                    </li>
                    <li>
                      <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="text-body/70 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors"></div>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-bold text-xl text-primary mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-highlight to-accent rounded-full"></div>
                Get in Touch
              </h4>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary/5 to-plum/5 rounded-2xl p-4 border border-primary/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Email Us</div>
                      <a href="mailto:mail2movingworld@gmail.com" className="text-body/70 hover:text-highlight transition-colors text-sm">
                        mail2movingworld@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/5 to-highlight/5 rounded-2xl p-4 border border-accent/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Call Us</div>
                      <div className="text-body/70 text-sm">9910017177, 8510017177</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-plum/5 to-primary/5 rounded-2xl p-4 border border-plum/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Visit Us</div>
                      <div className="text-body/70 text-sm leading-relaxed">
                        Regus-1620, 16th Floor, WTT, Sector-16, Noida-201301
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}