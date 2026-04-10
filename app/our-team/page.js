"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
    {
        name: "Dr. Anand A. Jha",
        role: "Managing Director & Proprietor",
        image: "/team/anand-anjani-jha.jpeg",
        blurb: [
            "Dr. Anand A. Jha is the Managing Director and Proprietor of Moving World, bringing with him over two decades of experience across academia, media, development, and cultural initiatives.",
            "A PhD in Library & Information Science, he has combined his expertise in knowledge management, content creation, video production, and publishing with his passion for global storytelling and cultural exchange.",
            "Before establishing Moving World, he spent more than a decade at the Centre for Media Studies (CMS), where he served as Team Leader for the internationally recognized CMS Vatavaran Environment & Wildlife Film Festival and Forum, and also coordinated projects under the Ministry of Environment, Forest & Climate Change, Government of India.",
            "As the founder and guiding force of Moving World, Dr. Jha sets the strategic direction and vision of the firm—ensuring the organization stays true to its mission of building a globally connected, creatively driven platform that fosters innovation, cultural dialogue, and meaningful collaborations.",
        ],
    },
    {
        name: "Swaranjeet Singh Sidhu",
        role: "Chief Brand & Strategy Officer",
        image: "/team/swaranjeet-sidhu.jpeg",
        blurb: [
            "Swaranjeet Singh Sidhu is a strategic brand leader, edu-innovator, and entrepreneur with over 15 years of experience in branding, marketing, PR, and communication.",
            "He has spearheaded integrated marketing strategies, ATL/BTL campaigns, PR initiatives, celebrity-driven events, and digital outreach for leading institutions and ventures.",
            "A mentor to startups and an advocate of storytelling-led branding, he is passionate about designing experiences that connect deeply with people.",
            "At Moving World, he leads brand strategy, global outreach, and institutional positioning, ensuring the organization becomes a symbol of creative excellence, innovation, and cultural impact.",
        ],
    },
    {
        name: "Dr. Surraj Das",
        role: "Director – Creative Strategy & Global Partnerships",
        image: "/team/surraj-das.jpeg",
        blurb: [
            "Dr. Surraj Das brings a rare confluence of management acumen and creative leadership to Moving World. A PhD in Management specializing in the globalization of popular culture (Hollywood vs. Bollywood), he has spent over a decade navigating the intersections of film, media, events, and cultural diplomacy.",
            "He has curated and managed international film festivals—including collaborations with the Canadian Embassy, UNDP, GIZ (German Embassy), and NETPAC Asia—and contributed as a director, producer, and creative strategist in the Indian film industry.",
            "He is also the author of the novel “In the Shadow’s of Jaipur's Love” and has received multiple recognitions as a filmmaker and actor.",
            "At Moving World, he steers creative strategy, cultural partnerships, and content innovation, ensuring the organization remains a catalyst for meaningful storytelling and global collaborations.",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function OurTeamPage() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-soft text-body overflow-visible">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container-default"
                >
                    <div className="max-w-3xl">
                        <h1 className="h1 text-primary">
                            <span className="block gradient-text py-2">Leadership Team Details</span>
                        </h1>
                        <p className="p-large text-body/80 mt-4 max-w-2xl">
                            A multidisciplinary team blending strategy, creativity, and
                            cultural insight to build meaningful brand experiences.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Team Feature Rows */}
            <section className="section bg-soft relative">
                {/* Decorative shape */}
                <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl -z-10"
                />
                
                <div className="container-default">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12 lg:space-y-16"
                    >
                        {team.map((member, idx) => {
                            return (
                                <motion.article
                                    key={member.name}
                                    variants={itemVariants}
                                    className={`relative rounded-3xl border border-gray-100 bg-white shadow-subtle overflow-hidden hover-lift interactive group`}
                                >
                                    {/* Accent background shapes */}
                                    <div className="pointer-events-none absolute -top-10 -left-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="pointer-events-none absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-highlight/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="relative grid lg:grid-cols-[2fr_3fr] gap-0">
                                        {/* Visual Panel */}
                                        <div className="relative h-72 sm:h-80 lg:h-full lg:min-h-[32rem] overflow-hidden">
                                            <Image
                                                src={member.image}
                                                alt={`${member.name} portrait`}
                                                fill
                                                className={`object-cover ${idx === 0 ? "object-center" : "object-top"} transition-transform duration-700 group-hover:scale-110`}
                                                loading={idx === 0 ? "eager" : "lazy"}
                                                priority={idx === 0}
                                                sizes="(max-width: 1024px) 100vw, 40vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Content Panel */}
                                        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold w-fit mb-6 tracking-wider uppercase">
                                                {member.role}
                                            </div>
                                            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6">{member.name}</h3>
                                            <div className="space-y-4 text-body/80 leading-relaxed">
                                                {member.blurb.map((para, i) => (
                                                    <p key={i} className="text-base sm:text-lg">{para}</p>
                                                ))}
                                            </div>
                                            
                                            <div className="mt-10 pt-8 border-t border-gray-100">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold border border-primary/10">
                                                        Strategy
                                                    </span>
                                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-plum/5 text-plum text-sm font-semibold border border-plum/10">
                                                        Media
                                                    </span>
                                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-highlight/5 text-highlight text-sm font-semibold border border-highlight/10">
                                                        Culture
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}