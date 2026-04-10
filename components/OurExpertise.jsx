"use client";
import { motion } from "framer-motion";

export default function OurExpertise() {
  const expertise = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Brand Communication & Corporate Films",
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Documentaries & Behaviour Change",
      color: "text-plum",
      bg: "bg-plum/5"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "TV Commercials & Radio Production",
      color: "text-highlight",
      bg: "bg-highlight/5"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Events & Digital Platforms",
      color: "text-accent",
      bg: "bg-accent/5"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Content Creation for New Media",
      color: "text-primary",
      bg: "bg-primary/5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="expertise" className="section bg-surface relative overflow-hidden" style={{ scrollMarginTop: 'clamp(80px, 8vw, 120px)' }}>
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,transparent_70%)] pointer-events-none" />

      <div className="container-default relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Section Heading */}
          <h2 className="h2 text-primary mb-6"> Our Expertise </h2>
          <div className="divider mx-auto mb-10"></div>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-3xl font-heading text-primary italic mb-12"
          >
            "We don't just create campaigns — we build{" "}
            <span className="gradient-text">movements</span>."
          </motion.p>

          {/* Expertise Areas */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {expertise.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group relative bg-white p-8 rounded-3xl shadow-subtle border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover-lift interactive"
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-primary transition-all duration-500`}>
                  <div className={`${item.color} group-hover:text-white transition-colors duration-500`}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-primary group-hover:text-plum transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Strength Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-primary/5 rounded-[2.5rem] p-10 sm:p-14 border border-primary/10 relative overflow-hidden group"
          >
            {/* Animated accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            
            <p className="p-large leading-relaxed text-body text-center relative z-10">
              Our strength lies in merging{" "}
              <span className="text-primary font-bold">international experience</span>{" "}
              with a deep understanding of{" "}
              <span className="text-highlight font-bold">cultural values</span>, enabling us to deliver{" "}
              <span className="text-plum font-bold">innovative solutions</span>{" "}
              that resonate across diverse audiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
