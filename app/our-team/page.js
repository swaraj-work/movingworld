export const metadata = {
    title: "Our Team | Moving World",
    description: "Meet the leadership team behind Moving World",
};

const team = [
    {
        name: "Dr. Anand A. Jha",
        role: "Managing Director & Proprietor, Moving World",
        phone: "+91 9910017177",
        image:
            "/team/anand-anjani-jha.jpeg",
        blurb: [
            "Dr. Anand A. Jha is the Managing Director and Proprietor of Moving World, bringing with him over two decades of experience across academia, media, development, and cultural initiatives.",
            "A PhD in Library & Information Science, he has combined his expertise in knowledge management, content creation, video production, and publishing with his passion for global storytelling and cultural exchange.",
            "Before establishing Moving World, he spent more than a decade at the Centre for Media Studies (CMS), where he served as Team Leader for the internationally recognized CMS Vatavaran Environment & Wildlife Film Festival and Forum, and also coordinated projects under the Ministry of Environment, Forest & Climate Change, Government of India.",
            "As the founder and guiding force of Moving World, Dr. Jha sets the strategic direction and vision of the firm—ensuring the organization stays true to its mission of building a globally connected, creatively driven platform that fosters innovation, cultural dialogue, and meaningful collaborations.",
        ],
    },
    {
        name: "Swaranjeet Singh Sidhu",
        role: "Chief Brand & Strategy Officer, Moving World",
        phone: "+91 9815250009",
        image:
            "/team/swaranjeet-sidhu.jpeg",
        blurb: [
            "Swaranjeet Singh Sidhu is a strategic brand leader, edu-innovator, and entrepreneur with over 15 years of experience in branding, marketing, PR, and communication.",
            "He has spearheaded integrated marketing strategies, ATL/BTL campaigns, PR initiatives, celebrity-driven events, and digital outreach for leading institutions and ventures.",
            "A mentor to startups and an advocate of storytelling-led branding, he is passionate about designing experiences that connect deeply with people.",
            "At Moving World, he leads brand strategy, global outreach, and institutional positioning, ensuring the organization becomes a symbol of creative excellence, innovation, and cultural impact.",
        ],
    },
    {
        name: "Dr. Surraj Das",
        role: "Director – Creative Strategy & Global Partnerships, Moving World",
        phone: "+91 9643397846",
        image:
            "/team/surraj-das.jpeg",
        blurb: [
            "Dr. Surraj Das brings a rare confluence of management acumen and creative leadership to Moving World. A PhD in Management specializing in the globalization of popular culture (Hollywood vs. Bollywood), he has spent over a decade navigating the intersections of film, media, events, and cultural diplomacy.",
            "He has curated and managed international film festivals—including collaborations with the Canadian Embassy, UNDP, GIZ (German Embassy), and NETPAC Asia—and contributed as a director, producer, and creative strategist in the Indian film industry.",
            "He is also the author of the novel “In the Shadow’s of Jaipur's Love” and has received multiple recognitions as a filmmaker and actor.",
            "At Moving World, he steers creative strategy, cultural partnerships, and content innovation, ensuring the organization remains a catalyst for meaningful storytelling and global collaborations.",
        ],
    },
];

export default function OurTeamPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative top-10 overflow-hidden bg-soft text-body overflow-x-hidden overflow-y-visible">
                <div className="container-default section">
                    <div className="max-w-3xl">
                        <div className="badge-gold mb-5 text-accent bg-white/10">
                            Leadership Team Details
                        </div>
                        <h1 className="h1 text-primary">
                            People behind the
                            <span className="block gradient-text py-2">Moving World</span>
                        </h1>
                        <p className="p-large text-body/80 mt-4 max-w-2xl">
                            A multidisciplinary team blending strategy, creativity, and
                            cultural insight to build meaningful brand experiences.
                        </p>
                    </div>
                </div>


            </section>

            {/* Decorative shape */}
            <div
                aria-hidden="true"
                className="absolute top-46 right-2 w-80 h-80 bg-highlight/20 rounded-full blur-3xl"
            />

            {/* Team Feature Rows */}
            <section className="section bg-soft">
                <div className="container-default">
                    <div className="space-y-12 lg:space-y-16">
                        {team.map((member, idx) => {
                            return (
                                <article
                                    key={member.name}
                                    className={`relative rounded-3xl border border-gray-100 bg-white shadow-subtle overflow-hidden hover-lift interactive`}
                                >
                                    {/* Accent background shapes */}
                                    <div className="pointer-events-none absolute -top-10 -left-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />
                                    <div className="pointer-events-none absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-highlight/10 blur-3xl" />

                                    <div className={`relative grid lg:grid-cols-[2fr_3fr] md:grid-cols-[1fr_2fr] gap-0`}>
                                        {/* Visual Panel */}
                                        <div className={`relative md:my-auto md:mx-3 lg:mx-0 h-72 sm:h-80 lg:h-full min-h-[18rem] bg-surface`}>
                                            <div className="absolute inset-0">
                                                <img
                                                    src={member.image}
                                                    alt={`${member.name} portrait`}
                                                    className={`h-full w-full ${idx === 0 ? "object-center" : "object-top"} object-cover md:rounded-xl`}
                                                    loading="lazy"
                                                />
                                            </div>
                                            {/* Gradient scrim + framing */}
                                            {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" /> */}
                                            <div className="absolute inset-4 rounded-2xl ring-1 ring-white/30" />
                                        </div>

                                        {/* Content Panel */}
                                        <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center animate-fade-in-up`}>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit mb-4">
                                                {member.role}
                                            </div>
                                            <h3 className="text-3xl font-bold text-primary mb-2">{member.name}</h3>
                                            <div className="space-y-3 text-body/80 leading-relaxed">
                                                {member.blurb.map((para, i) => (
                                                    <p key={i} className="text-sm sm:text-base">{para}</p>
                                                ))}
                                            </div>

                                            {/* <div className="mt-6 flex flex-wrap items-center gap-3">
                                                <a
                                                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                                                    className="button-primary button-smooth focus-ring"
                                                    aria-label={`Call ${member.name}`}
                                                >
                                                    Call
                                                    <svg
                                                        className="w-4 h-4"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 5a2 2 0 012-2h3l2 4-3 3a16 16 0 007 7l3-3 4 2v3a2 2 0 01-2 2h-1C8.82 22 2 15.18 2 6V5z"
                                                        />
                                                    </svg>
                                                </a>
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618V15.5a1 1 0 01-1.447.894L15 14" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h8M4 10h8M4 14h6" />
                                                    </svg>
                                                    Strategy • Media • Culture
                                                </span>
                                            </div> */}


                                            <div className="mt-6 space-y-4">
                                                {/* Contact Information */}
                                                <div className="flex flex-wrap items-center gap-4">
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 text-primary border border-primary/10">
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3l2 4-3 3a16 16 0 007 7l3-3 4 2v3a2 2 0 01-2 2h-1C8.82 22 2 15.18 2 6V5z" />
                                                        </svg>
                                                        <span className="font-medium text-sm">{member.phone}</span>
                                                    </div>

                                                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                        </svg>
                                                        <span className="font-medium text-sm">{member.email}</span>
                                                    </div> */}
                                                </div>

                                                {/* Expertise Tags */}
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                        </svg>
                                                        Strategy
                                                    </span>
                                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h6a2 2 0 002-2V8M9 8h6" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6" />
                                                        </svg>
                                                        Media
                                                    </span>
                                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        Culture
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}