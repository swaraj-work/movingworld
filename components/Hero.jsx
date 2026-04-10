"use client";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Carousel Section */}
      <section id="home" className="relative overflow-hidden lg:pt-20 pt-[4rem] overflow-x-hidden" style={{ scrollMarginTop: '120px' }}>
        <Carousel
          className="w-full 2xl:h-[65vh] xl:h-[65vh] lg:h-[60vh] md:h-[25rem] sm:h-[20rem] h-[15rem]"
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
      <section className="section bg-soft relative overflow-hidden">
        <div className="container-default relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            {/* Main Heading with Brand Gradient */}
            <motion.h1 variants={itemVariants} className="h1 mb-8 relative">
              <span className="block text-body font-heading mb-3 tracking-tight opacity-80 text-2xl sm:text-3xl">We Create and Nurture to</span>
              <span className="block gradient-text font-heading text-5xl sm:text-7xl lg:text-8xl py-2">
                Move the World
              </span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1.5 bg-highlight mx-auto mt-8 rounded-full"
              />
            </motion.h1>

            {/* Enhanced Description */}
            <motion.div variants={itemVariants} className="space-y-6 mb-12">
              <p className="p-large max-w-4xl mx-auto leading-relaxed text-body text-xl sm:text-2xl font-medium">
                At Moving World, we blend{" "}
                <span className="text-primary">creativity</span>,{" "}
                <span className="text-plum">imagination</span>, and{" "}
                <span className="text-highlight">strategy</span>{" "}
                to transform ideas into powerful brand stories.
              </p>
              <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
                From films and campaigns to digital experiences and live events, we help brands connect, inspire, and grow.
              </p>
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact-us" className="button-accent text-xl px-12 py-5 group button-smooth shadow-glow-highlight">
                Let's Build Your Story Together
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      </section>
    </>
  );
}
