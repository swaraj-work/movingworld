"use client";
import { motion } from "framer-motion";

export default function JoinUs() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="contact" className="section bg-soft relative overflow-hidden" style={{ scrollMarginTop: 'clamp(80px, 8vw, 120px)' }}>
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.01)_0,transparent_70%)] pointer-events-none" />
            
            <div className="container-default relative z-10">
                <div className="flex flex-col gap-16 items-center">
                    {/* Join Us / Careers Section */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <h2 className="h2 text-primary mb-6"> Join Us / Careers </h2>
                        <div className="divider mb-8 mx-auto"></div>

                        <p className="p-large leading-relaxed text-body mb-6">
                            We're always on the lookout for passionate{" "}
                            <span className="text-primary font-bold">creators</span>,{" "}
                            <span className="text-plum font-bold">strategists</span>, and{" "}
                            <span className="text-highlight font-bold">innovators</span>{" "}
                            who believe in the power of storytelling.
                        </p>
                        <p className="p-large leading-relaxed text-body">
                            If you're ready to move the world with your ideas, <strong>let's connect.</strong>
                        </p>
                    </motion.div>

                    {/* Contact Us Section */}
                    <div className="w-full max-w-6xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h3 className="h2 text-primary mb-4"> Contact Us </h3>
                        </motion.div>
                        
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                        >
                            {/* Location */}
                            <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-subtle border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover-lift interactive h-full group">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                        <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-3 text-lg">Location</h4>
                                        <p className="text-muted text-sm leading-relaxed">Moving World<br />New Delhi, India</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-subtle border border-gray-100 hover:shadow-2xl hover:border-plum/20 transition-all duration-500 hover-lift interactive h-full group">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-14 h-14 rounded-2xl bg-plum/5 flex items-center justify-center flex-shrink-0 group-hover:bg-plum group-hover:scale-110 transition-all duration-500">
                                        <svg className="w-7 h-7 text-plum group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-plum mb-3 text-lg">Phone</h4>
                                        <div className="space-y-1">
                                            <a href="tel:+919910017177" className="block text-muted hover:text-plum transition-colors font-medium"> +91 9910017177 </a>
                                            <a href="tel:+918510017177" className="block text-muted hover:text-plum transition-colors font-medium"> +91 8510017177 </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-subtle border border-gray-100 hover:shadow-2xl hover:border-highlight/20 transition-all duration-500 hover-lift interactive h-full group">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-14 h-14 rounded-2xl bg-highlight/5 flex items-center justify-center flex-shrink-0 group-hover:bg-highlight group-hover:scale-110 transition-all duration-500">
                                        <svg className="w-7 h-7 text-highlight group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-highlight mb-3 text-lg">Email</h4>
                                        <a href="mailto:mail2movingworld@gmail.com" className="text-muted hover:text-highlight transition-colors font-medium break-all text-sm px-2">
                                            mail2movingworld@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Website */}
                            <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-subtle border border-gray-100 hover:shadow-2xl hover:border-accent/20 transition-all duration-500 hover-lift interactive h-full group">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                        <svg className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-accent mb-3 text-lg">Website</h4>
                                        <a href="https://www.movingworld.in" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors font-medium inline-flex items-center gap-2">
                                            <span>www.movingworld.in</span>
                                            <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
