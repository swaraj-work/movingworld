"use client";
import { motion } from "framer-motion";

export default function AboutUsHome() {
  return (
    <section id="about" className="section bg-surface relative overflow-hidden" style={{ scrollMarginTop: 'clamp(80px, 8vw, 120px)' }}>
      <div className="container-default relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Section Heading */}
          <h2 className="h2 text-primary mb-6">
            About Us
          </h2>
          <div className="divider mx-auto mb-10"></div>

          {/* Content */}
          <div className="space-y-8 text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="p-large leading-relaxed text-body"
            >
              At the heart of Moving World lies a passionate team of{" "}
              <span className="text-primary font-semibold">creators</span>,{" "}
              <span className="text-plum font-semibold">strategists</span>, and{" "}
              <span className="text-highlight font-semibold">storytellers</span>{" "}
              united by one vision — to move people, communities, and businesses with meaningful ideas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="p-large leading-relaxed text-body"
            >
              We believe creativity is only valuable when it delivers results. That's why we design campaigns that not only capture attention but also foster growth, strengthen reputation, and create long-lasting impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center py-10 bg-soft rounded-3xl border border-gray-100/50 shadow-subtle"
            >
              <p className="text-2xl sm:text-3xl font-heading text-primary italic px-6">
                "Your vision becomes our <span className="gradient-text">approach</span>."
              </p>
              <div className="w-20 h-1 bg-highlight mx-auto mt-6 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}