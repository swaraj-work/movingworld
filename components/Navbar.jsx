"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 box-shadow-bottom-lg">
      <div className="w-full bg-highlight/80"></div>

      <div className="ml-auto ontainer w-screen flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 lg:ml-20 ml-10">
          <div className="h-9 w-9 rounded-none bg-white grid place-items-center text-white font-bold p-0 scale-[1.9]">
            <img src="/images/logo.jpg" alt="movingworld.in" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-muted align-right mr-20">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/our-offerings" className="hover:text-primary transition-colors">Our Offerings</Link>
          <Link href="/speakers" className="hover:text-primary transition-colors">Speakers</Link>
          <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
          <Link href="/sanjeevani" className="hover:text-primary transition-colors">Sanjeevani</Link>
          <Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 mr-5"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-primary"></span>
            <span className="block h-0.5 w-5 bg-primary"></span>
            <span className="block h-0.5 w-5 bg-primary"></span>
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95">
          <div className="container-default py-3 grid gap-2 text-body">
            <Link href="/" onClick={() => setOpen(false)} className="py-2 hover:text-primary transition-colors">Home</Link>
            <Link href="/about-us" onClick={() => setOpen(false)} className="py-2 hover:text-primary transition-colors">About Us</Link>
            <Link href="/our-offerings" onClick={() => setOpen(false)} className="py-2 hover:text-primary transition-colors">Our Offerings</Link>
            <Link href="/speakers" onClick={() => setOpen(false)} className="py-2 hover:text-primary transition-colors">Speakers</Link>
            <Link href="/clients" onClick={() => setOpen(false)} className="py-2 hover:text-primary transition-colors">Clients</Link>
            <Link href="/sanjeevani" onClick={() => setOpen(false)} className="py-2 hover:text-primary transition-colors">Sanjeevani</Link>
            <Link href="/contact-us" onClick={() => setOpen(false)} className="py-2 hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
