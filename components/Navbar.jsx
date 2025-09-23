"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Track active section on home page
      if (window.location.pathname === '/') {
        const sections = ['#home', '#about', '#services', '#contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.querySelector(sections[i]);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash scrolling when component mounts or page loads
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        if (hash === '#home') {
          // Scroll to top of page
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(hash);
          if (element) {
            scrollToElement(element);
          }
        }
      }, 100); // Small delay to ensure page is fully loaded
    }
  }, []);

  const isActive = (href) => {
    // Check if we're on the client side
    if (typeof window === 'undefined') {
      return false;
    }
    
    if (href === '/') {
      return window.location.pathname === '/' && !activeSection;
    }
    if (href.startsWith('#')) {
      return window.location.pathname === '/' && activeSection === href;
    }
    return window.location.pathname === href;
  };

  const scrollToElement = (element) => {
    // Check if we're on the client side
    if (typeof window === 'undefined') {
      return;
    }
    
    // Get the actual navbar height by measuring it
    const navbar = document.querySelector('header');
    const navbarHeight = navbar ? navbar.offsetHeight : (window.innerWidth < 1024 ? 80 : 100);
    
    // Use scrollIntoView with proper options
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
    
    // Then adjust for navbar height
    setTimeout(() => {
      const currentScroll = window.pageYOffset;
      const newScroll = currentScroll - navbarHeight - 20;
      window.scrollTo({
        top: Math.max(0, newScroll),
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleNavClick = (href) => {
    // Check if we're on the client side
    if (typeof window === 'undefined') {
      return;
    }
    
    if (href.startsWith('#')) {
      // Check if we're on the home page
      if (window.location.pathname === '/') {
        // If on home page, just scroll to the section
        if (href === '#home') {
          // Scroll to top of page
          
          // Update URL hash to #home
          window.history.pushState(null, null, '#home');
          
          // Try multiple scroll methods to ensure it works
          window.scrollTo({ top: 0, behavior: 'smooth' });
          
          // Fallback: immediate scroll if smooth doesn't work
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 100);
          
          // Another fallback using document.documentElement
          setTimeout(() => {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          }, 200);
          
          setIsOpen(false);
        } else {
          const element = document.querySelector(href);
          if (element) {
            // Update URL hash to the section
            window.history.pushState(null, null, href);
            
            scrollToElement(element);
            setIsOpen(false); // Close mobile menu
          }
        }
      } else {
        // If on another page, navigate to home with hash
        window.location.href = `/${href}`;
        setIsOpen(false); // Close mobile menu
      }
    }
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "/our-team", label: "Team" },
    { href: "/clients", label: "Clients" },
    { href: "/gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 shadow-lg ${isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-white"
      } overflow-x-hidden`}>
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-plum to-highlight" />

      <div className="container-default">
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
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10 shadow-sm'
                    : 'text-muted hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-plum/10 transition-opacity duration-300 ${
                  isActive(item.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </a>
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
          ? "max-h-[26rem] opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
        }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="container-default py-6">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className={`block px-4 py-2 text-base font-medium rounded-xl transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10 shadow-sm'
                      : 'text-muted hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}