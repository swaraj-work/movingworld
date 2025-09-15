export default function Footer() {
  return (
    <footer className="mt-0 bg-surface-2 border-t border-gray-100">
      <div className="container-default py-12">
        {/* Top area */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-lg bg-white grid place-items-center text-white font-bold"><img src="/images/logo.jpg" alt="movingworld.in" /></div>
              <span className="font-heading text-xl text-body">Moving World</span>
            </div>
            <p className="mt-4 text-body/70 text-sm max-w-xs">
              Moving the world through brand experiences. We combine strategy, design, and culture to create meaningful impact.
            </p>
            <div className="mt-5 flex items-center gap-3 text-body/70">
              <a aria-label="Instagram" className="hover:text-primary transition-colors" href="#">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" /></svg>
              </a>
              <a aria-label="LinkedIn" className="hover:text-primary transition-colors" href="#">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h4v12.02H3zM9 8.98h3.84v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07v6.37H18.5v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75H9z" /></svg>
              </a>
              <a aria-label="Twitter" className="hover:text-primary transition-colors" href="#">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92a8.2 8.2 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.23 8.23 0 01-2.61 1 4.1 4.1 0 00-7 3.74A11.63 11.63 0 013 5.16a4.1 4.1 0 001.27 5.47 4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 19.54 11.6 11.6 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.34 8.34 0 0022 5.92z" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-body text-lg">Services</h4>
            <div className="divider mt-3" />
            <ul className="mt-4 space-y-2 text-sm text-body/80">
              <li><p className="hover:text-primary transition-colors">Creative Strategy</p></li>
              <li><p className="hover:text-primary transition-colors">Design & Printing</p></li>
              <li><p className="hover:text-primary transition-colors">Brand Communication</p></li>
              <li><p className="hover:text-primary transition-colors">Events & Management</p></li>
              <li><p className="hover:text-primary transition-colors">Digital & Social</p></li>
              <li><p className="hover:text-primary transition-colors">Productions</p></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-body text-lg">Company</h4>
            <div className="divider mt-3" />
            <ul className="mt-4 space-y-2 text-sm text-body/80">
              <li><a className="hover:text-primary transition-colors" href="/about-us">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="/our-offerings">Our Offerings</a></li>
              <li><a className="hover:text-primary transition-colors" href="/clients">Clients</a></li>
              <li><a className="hover:text-primary transition-colors" href="/sanjeevani">Sanjeevani</a></li>
              <li><a className="hover:text-primary transition-colors" href="/contact-us">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-body text-lg">Get in touch</h4>
            <div className="divider mt-3" />
            <ul className="mt-4 space-y-3 text-sm text-body/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" /><a href="mailto:mail2movingworld@gmail.com">mail2movingworld@gmail.com</a></li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent" /> 9910017177, 8510017177</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-highlight" /> Regus-1620, 16th Floor, WTT, Sector- 16, Noida- 201301</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
