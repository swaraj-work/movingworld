"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/our-offerings", label: "Services" },
    { href: "/our-team", label: "Team" },
    { href: "/clients", label: "Clients" },
    { href: "/contact-us", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-white"
      } overflow-x-hidden`}>
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-plum to-highlight" />

      <div className="container-default w-screen">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="h-12 w-12 lg:h-12 lg:w-12 rounded-none bg-white overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logo-transparent.png"
                  alt="Moving World"
                  className="w-full h-full object-contain bg-white scale-110"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl lg:text-2xl font-bold text-primary">Moving World</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group text-muted hover:text-primary hover:bg-primary/5"
              >
                {item.label}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-plum/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative h-10 w-10 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm group"
            aria-label="Toggle navigation"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-plum/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col items-center justify-center space-y-1.5">
              <span className={`block h-0.5 w-4 bg-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                }`} />
              <span className={`block h-0.5 w-4 bg-primary transition-all duration-300 ${isOpen ? "opacity-0" : ""
                }`} />
              <span className={`block h-0.5 w-4 bg-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
        }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="container-default py-6">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 text-muted hover:text-primary hover:bg-primary/5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}