"use client";

import { useState } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Creative Strategy",
      description: "Brand positioning, market research, and strategic planning to establish your unique market presence.",
      features: ["Brand Architecture", "Market Analysis", "Competitive Research", "Strategic Planning"],
      color: "primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Marketing Services",
      description: "Comprehensive marketing solutions that drive engagement and deliver measurable results.",
      features: ["Campaign Development", "Content Marketing", "Lead Generation", "Performance Analytics"],
      color: "plum"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Designing & Printing",
      description: "Visual identity creation and high-quality print production that brings your brand to life.",
      features: ["Logo Design", "Brand Guidelines", "Print Materials", "Packaging Design"],
      color: "highlight"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Events Marketing & Management",
      description: "End-to-end event planning and execution that creates memorable brand experiences.",
      features: ["Event Strategy", "Venue Management", "Experience Design", "Post-Event Analysis"],
      color: "accent"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10.5 8.5l2 2L17 6" />
        </svg>
      ),
      title: "Digital Marketing & Social Media",
      description: "Data-driven digital strategies that amplify your brand's online presence and engagement.",
      features: ["Social Media Strategy", "Paid Advertising", "SEO Optimization", "Analytics & Reporting"],
      color: "primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Productions (Film and Advertisement)",
      description: "Professional video production and advertising content that tells your brand story effectively.",
      features: ["Video Production", "Commercial Ads", "Post-Production", "Motion Graphics"],
      color: "plum"
    }
  ];

  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft via-white to-surface-2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-plum/5 to-transparent rounded-full blur-3xl" />

      <div className="relative container-default">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Our Services
          </div>

          <h2 className="h2 text-primary mb-6">
            Comprehensive Solutions for
            <span className="text-plum block">Your Brand Journey</span>
          </h2>

          <p className="text-lg text-body/80 leading-relaxed">
            We provide a comprehensive range of services, addressing the overall growth and strategic
            positioning of your brand as per the current and emerging trends.
          </p>

          <div className="divider mx-auto mt-6" />
        </div>

        {/* Interactive Services Grid */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center justify-center">
          {/* Services Navigation */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveService(index)}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${activeService === index
                    ? `bg-white shadow-lg border-${service.color}/20`
                    : "bg-white/50 border-gray-100 hover:bg-white hover:shadow-md"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${activeService === index
                      ? `bg-${service.color}/10 text-${service.color}`
                      : "bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary"
                    }`}>
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeService === index ? `text-${service.color}` : "text-body group-hover:text-primary"
                      }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-body/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className={`transition-transform duration-300 ${
                    activeService === index ? "rotate-90" : "group-hover:translate-x-1"
                  }`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Details Panel */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white rounded-3xl p-8 shadow-subtle border border-gray-100">
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-${services[activeService].color}/10 flex items-center justify-center mb-4`}>
                  <div className={`text-${services[activeService].color} text-xl`}>
                    {services[activeService].icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {services[activeService].title}
                </h3>
                
                <p className="text-body/80 leading-relaxed">
                  {services[activeService].description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-primary mb-4">What We Deliver:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${services[activeService].color}`} />
                      <span className="text-sm text-body/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/our-offerings" className="button-primary flex-1 text-center">
                  Learn More
                </a>
                <a href="/contact-us" className="border border-primary/20 text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition-all duration-300 text-center flex-1">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 text-center">
          <div className="bg-gradient-brand rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            <div className="relative max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h3>
              <p className="text-white/90 mb-8 text-lg">
                Let's discuss how our comprehensive services can help your brand achieve its full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact-us" className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors">
                  Start Your Project
                </a>
                <a href="/our-offerings" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}