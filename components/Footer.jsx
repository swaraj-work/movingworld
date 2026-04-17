"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToElement = (element) => {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        if (href === '#home') {
          window.history.pushState(null, null, '#home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(href);
          if (element) {
            window.history.pushState(null, null, href);
            scrollToElement(element);
          }
        }
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-highlight/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative container-default z-10">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr] mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => handleNavClick('#home')}>
              <div className="relative h-16 w-16 rounded-2xl bg-white shadow-soft p-2 border border-gray-100 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Moving World"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-primary tracking-tight">Moving World</span>
              </div>
            </div>

            <p className="text-body/70 leading-relaxed text-lg max-w-md">
              Moving the world through transformative brand experiences. We combine strategy, design,
              and innovation to create meaningful impact.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: "Instagram", color: "hover:bg-primary", path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" },
                { icon: "LinkedIn", color: "hover:bg-highlight", path: "M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h4v12.02H3zM9 8.98h3.84v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07v6.37H18.5v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75H9z" },
                { icon: "Twitter", color: "hover:bg-plum", path: "M22 5.92a8.2 8.2 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.23 8.23 0 01-2.61 1 4.1 4.1 0 00-7 3.74A11.63 11.63 0 013 5.16a4.1 4.1 0 001.27 5.47 4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 19.54 11.6 11.6 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.34 8.34 0 0022 5.92z" }
              ].map((social, i) => (
                <a key={i} href="#" className={`w-12 h-12 rounded-2xl bg-white shadow-soft border border-gray-100 flex items-center justify-center text-primary ${social.color} hover:text-white transition-all duration-500 group scale-click`}>
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h4 className="font-bold text-lg text-primary mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-highlight rounded-full"></div>
                Expertise
              </h4>
              <ul className="space-y-4">
                {['Campaigns', 'Social Media', 'Content', 'Branding'].map((link) => (
                  <li key={link}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="text-body/60 hover:text-primary transition-colors flex items-center gap-2 group text-sm font-medium">
                      <div className="w-1 h-1 rounded-full bg-highlight group-hover:scale-150 transition-transform"></div>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-primary mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-plum rounded-full"></div>
                Company
              </h4>
              <ul className="space-y-4">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Our Work', href: '#our-work' },
                  { label: 'Our Team', href: '/our-team' },
                  { label: 'Clients', href: '/clients' }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                      className="text-body/60 hover:text-primary transition-colors flex items-center gap-2 group text-sm font-medium"
                    >
                      <div className="w-1 h-1 rounded-full bg-plum group-hover:scale-150 transition-transform"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-primary mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-accent rounded-full"></div>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="group bg-surface rounded-3xl p-6 border border-gray-100 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Email Us</div>
                    <a href="mailto:mail2movingworld@gmail.com" className="text-primary font-semibold hover:text-plum transition-colors break-all">
                      mail2movingworld@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-surface rounded-3xl p-6 border border-gray-100 hover:border-highlight/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-highlight/5 flex items-center justify-center flex-shrink-0 group-hover:bg-highlight group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Our Studio</div>
                    <div className="text-primary font-semibold leading-relaxed">
                      Regus-1620, 16th Floor, WTT, Sector-16, Noida-201301
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