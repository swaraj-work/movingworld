"use client";

import { useState } from "react";
import { ExternalLink, Calendar, Users, Award, Play } from "lucide-react";

export default function OurWork() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="our-work" className="section bg-soft relative">
            <div className="container-default">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h2 className="h2 text-primary mb-6">
                        Our Work
                    </h2>
                    <div className="divider mx-auto mb-6" />

                    <p className="p-large leading-relaxed text-body mb-6">
                        From{" "}
                        <span className="text-primary font-semibold">government ministries</span>{" "}
                        to global development projects, from{" "}
                        <span className="text-plum font-semibold">corporates</span>{" "}
                        to{" "}
                        <span className="text-highlight font-semibold">NGOs</span>{" "}
                        — we've helped organizations bring their stories to life.
                    </p>

                    {/* Work Categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        <div className="flex items-center gap-3 p-4 bg-surface-2 rounded-xl border border-gray-100/50">
                            <span className="text-2xl">🎬</span>
                            <span className="text-body font-medium">Documentaries on environment and wildlife</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-surface-2 rounded-xl border border-gray-100/50">
                            <span className="text-2xl">🎯</span>
                            <span className="text-body font-medium">Strategic campaigns for behaviour change</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-surface-2 rounded-xl border border-gray-100/50">
                            <span className="text-2xl">📢</span>
                            <span className="text-body font-medium">National and international brand activations</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-surface-2 rounded-xl border border-gray-100/50">
                            <span className="text-2xl">📺</span>
                            <span className="text-body font-medium">TV and radio commercials, print and digital</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-surface-2 rounded-xl border border-gray-100/50 sm:col-span-2 lg:col-span-1">
                            <span className="text-2xl">🌱</span>
                            <span className="text-body font-medium">Impactful initiatives like Community Nutrition Gardens</span>
                        </div>
                    </div>
                </div>

                {/* 1. Feature Film Section */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-subtle grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Left: Video */}
                    <div className="relative group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-subtle my-auto">
                        <div className="aspect-video bg-black/5 relative">
                            {!isPlaying ? (
                                <button
                                    type="button"
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 w-full h-full"
                                    aria-label="Play video"
                                >
                                    <img
                                        src="https://img.youtube.com/vi/OgUxdLdX3BM/hqdefault.jpg"
                                        alt="Community Nutrition Gardens for Food Security video thumbnail"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <span className="absolute inset-0 bg-black/20" />
                                    <span className="absolute inset-0 flex items-center justify-center">
                                        <span className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition group-hover:scale-105">
                                            <Play className="w-6 h-6" />
                                        </span>
                                    </span>
                                </button>
                            ) : (
                                <iframe
                                    className="w-full h-full rounded-3xl"
                                    src="https://www.youtube.com/embed/OgUxdLdX3BM?start=26&rel=0&autoplay=1"
                                    title="Community Nutrition Gardens for Food Security: A Pilot by GIZ in Madhya Pradesh"
                                    frameBorder="0"
                                    loading="lazy"
                                    allow="fullscreen; picture-in-picture"
                                    sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            )}
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-max mb-4">
                            Social Impact • Film
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                            Community Nutrition Gardens for Food Security: A Pilot by GIZ in Madhya Pradesh.
                        </h3>
                        <p className="text-body/80 leading-relaxed mb-4">
                            Food and Nutrition Security, Enhanced Resilience (FaNS) India in collaboration with Water
                            Security and Climate Adaptation in Rural India (WASCA) and with the support of Mahatma Gandhi
                            National Rural Employment Scheme (MGNREGA), piloted 20 Community Nutrition Gardens in two
                            districts of Chhatarpur and Sheopur in Madhya Pradesh.
                        </p>
                        <div className="bg-surface-2 rounded-xl p-4 mb-4">
                            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                Impact & Results
                            </h4>
                            <p className="text-sm text-body/80 leading-relaxed">
                                Using this approach to improve nutrition security and dietary diversity and achieve year-round
                                availability of nutritious food, the gardens have impacted the lives of the women self-help group
                                members in more ways than one, including livelihood and empowerment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Event Spotlight */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-subtle grid lg:grid-cols-2 gap-8 mb-16">
                    <div className="">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 text-highlight text-xs font-medium w-max mb-3">
                            Event • Webinar
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                            Free Online Webinars on short Film making.
                        </h3>
                        <p className="text-body/80 text-left leading-relaxed mb-8">
                            This free webinar provides easy get-started tips that everyone from beginners to advanced
                            filmmakers can use to jump into short film making like a professional.
                        </p>
                        <div className="grid grid-cols-1 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span className="text-body/80">Sunday, May 31, 2020 • ZOOM • 4:30 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-body/80">Expert: Mr. Anshul Sinha, award winning filmmaker</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-subtle my-auto">
                        <img src="/our-work/webinar.jpg" alt="Event Image" className="w-full h-auto object-cover rounded-3xl" />
                    </div>
                </div>

                {/* 3. Publications Showcase */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-subtle grid lg:grid-cols-2 gap-8 mb-16">
                    
                    {/* Sample Booklets with Images */}
                    <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                        {/* My Book of Green Good Deeds */}
                        <div className="group relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <img
                                    src="/booklets/green-good-deeds.png"
                                    alt="My Book of Green Good Deeds - Environmental Education Booklet"
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h4 className="font-bold text-sm mb-1">My Book of Green Good Deeds</h4>
                                    <p className="text-xs">Environmental Education</p>
                                </div>
                            </div>
                        </div>

                        {/* Animal Workbook */}
                        <div className="group relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <img
                                    src="/booklets/animal-workbook.png"
                                    alt="Animal Workbook - Wildlife Education Booklet"
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h4 className="font-bold text-sm mb-1">Animal Workbook</h4>
                                    <p className="text-xs">Wildlife Education</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 text-plum text-xs font-medium w-max mb-3">
                            Publications
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">National Museum Publications</h3>
                        <p className="text-body/80 leading-relaxed mb-8">
                            Samples of previously developed booklets for National Museum for Natural History, Ministry of
                            Environment, Forest & Climate Change, Government of India.
                        </p>
                    </div>

                    {/* Additional Info */}
                    {/* <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-plum/5 rounded-2xl border border-primary/10">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary mb-2">Educational Impact</h4>
                                <p className="text-body/80 text-sm leading-relaxed">
                                    These publications have been distributed to schools and educational institutions across India, 
                                    reaching thousands of students and contributing to environmental awareness and conservation education.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
