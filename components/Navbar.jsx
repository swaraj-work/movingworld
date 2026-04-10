"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
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
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        if (hash === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(hash);
          if (element) {
            scrollToElement(element);
          }
        }
      }, 100);
    }
  }, []);

  const isActive = (href) => {
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
    if (typeof window === 'undefined') {
      return;
    }
    
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  const handleNavClick = (href) => {
    if (typeof window === 'undefined') {
      return;
    }
    
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        if (href === '#home') {
          window.history.pushState(null, null, '#home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 100);
          
          setTimeout(() => {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          }, 200);
          
          setIsOpen(false);
        } else {
          const element = document.querySelector(href);
          if (element) {
            window.history.pushState(null, null, href);
            scrollToElement(element);
            setIsOpen(false);
          }
        }
      } else {
        window.location.href = `/${href}`;
        setIsOpen(false);
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
    <header className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-500 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-lg shadow-lg" 
        : "bg-white"
      } border-b border-gray-100/50`}>
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-plum to-highlight" />

      <div className={`container-default transition-all duration-500 ${
        isScrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
      }`}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick('#home')}
          >
            <div className="relative">
            <div className="relative h-10 w-28 lg:h-12 lg:w-36 transition-all duration-300">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Moving World"
                  fill
                  className="object-contain"
                  priority
                />
            </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl lg:text-2xl font-bold text-primary tracking-tight group-hover:text-plum transition-colors duration-300">Moving World</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full group ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/5'
                    : 'text-muted hover:text-primary hover:bg-gray-50'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.href) && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative h-10 w-10 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center group"
            aria-label="Toggle navigation"
          >
            <div className="relative flex flex-col items-center justify-center space-y-1.5 transform transition-transform duration-300 group-active:scale-95">
              <span className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                }`} />
              <span className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""
                }`} />
              <span className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="container-default py-8">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className={`block px-6 py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/5 shadow-sm border border-primary/10'
                        : 'text-muted hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}