export default function JoinUs() {
    return (
        <section id="contact" className="section bg-surface relative" style={{ scrollMarginTop: 'clamp(80px, 8vw, 120px)' }}>
            <div className="container-default">
                <div className="flex flex-col gap-8 items-center">
                    {/* Join Us / Careers Section */}
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="h2 text-primary mb-6">
                            Join Us / Careers
                        </h2>
                        <div className="divider mb-6 mx-auto"></div>

                        <p className="p-large leading-relaxed text-body mb-6">
                            We're always on the lookout for passionate{" "}
                            <span className="text-primary font-semibold">creators</span>,{" "}
                            <span className="text-plum font-semibold">strategists</span>, and{" "}
                            <span className="text-highlight font-semibold">innovators</span>{" "}
                            who believe in the power of storytelling.
                        </p>
                        <p className="p-large leading-relaxed text-body mb-6">
                            If you're ready to move the world with your ideas, <strong>let's connect.</strong>
                        </p>

                        {/* <div className="flex justify-center">
                            <a href="/contact-us" className="button-accent text-lg px-10 py-4 group button-smooth shadow-glow-highlight">
                                Start Your Journey
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div> */}
                    </div>

                    {/* Contact Us Section */}
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center mb-6">
                            <h3 className="h2 text-primary mb-3">
                                Contact Us
                            </h3>
                            {/* <div className="divider mx-auto"></div> */}
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            {/* Location */}
                            <div className="bg-surface rounded-2xl p-3 sm:p-4 shadow-subtle border border-gray-100/50 hover-lift transition-all duration-300 h-full">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Location</h4>
                                        <p className="text-muted text-xs sm:text-sm leading-relaxed">Moving World<br />New Delhi, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-surface rounded-2xl p-3 sm:p-4 shadow-subtle border border-gray-100/50 hover-lift transition-all duration-300 h-full">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-plum mb-2 text-sm sm:text-base">Phone</h4>
                                        <div className="space-y-1">
                                            <a href="tel:+919910017177" className="block text-muted hover:text-plum transition-colors text-xs sm:text-sm">
                                                +91 9910017177
                                            </a>
                                            <a href="tel:+918510017177" className="block text-muted hover:text-plum transition-colors text-xs sm:text-sm">
                                                +91 8510017177
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-surface rounded-2xl p-3 sm:p-4 shadow-subtle border border-gray-100/50 hover-lift transition-all duration-300 h-full">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-highlight mb-2 text-sm sm:text-base">Email</h4>
                                        <a href="mailto:mail2movingworld@gmail.com" className="text-muted hover:text-highlight transition-colors text-xs sm:text-sm break-all">
                                            mail2movingworld@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Website */}
                            <div className="bg-surface rounded-2xl p-3 sm:p-4 shadow-subtle border border-gray-100/50 hover-lift transition-all duration-300 h-full">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">Website</h4>
                                        <a href="https://www.movingworld.in" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors text-xs sm:text-sm inline-flex items-center gap-1">
                                            <span>www.movingworld.in</span>
                                            <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
