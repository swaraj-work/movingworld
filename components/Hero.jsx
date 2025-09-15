import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft">
      {/* Full-width image carousel at the very top */}
      <Carousel
        // className="w-full h-[400px] sm:h-[460px] md:h-[560px] lg:h-[660px]"
        className="w-full 2xl:h-[40rem] xl:h-[35rem] lg:h-[30rem] md:h-[25rem] sm:h-[20rem]"
        images={[
          "https://images.unsplash.com/photo-1757601154408-402910067c40?q=80&w=1486&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1920&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
        ]}
        interval={4500}
      />

      {/* About blurb inspired by brochure, directly below carousel */}
      <div className="container-default py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1.4fr]">
          <div className="relative">
            <div className="hidden lg:block absolute -left-10 -top-2 h-6 w-10 rotate-180 bg-gradient-to-r from-transparent to-plum/20 clip-path-chevron" />
            <div className="hidden lg:block absolute -left-6 top-28 h-8 w-14 rotate-180 bg-gradient-to-r from-transparent to-gray-400/20 clip-path-chevron" />

            <div className="rounded-2xl p-8 bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-subtle border border-white/20">
              <div className="flex items-center gap-3">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.9 1.97 3.45V19h7v-2.5c0-2.33-4.67-3.5-8-3.5z" />
                </svg>
                <span className="uppercase tracking-wider text-sm font-semibold text-white/90">About Us</span>
              </div>
              <div className="mt-4 text-white/90 text-sm">Experiential + Creative</div>
            </div>
          </div>

          <div className="hidden lg:block h-44 w-px bg-gradient-to-b from-transparent via-plum to-transparent" />

          <div>
          <h2 className="h2 text-plum">About Moving World</h2>
            {/* <h3 className="font-heading text-2xl sm:text-3xl text-primary">About Moving World</h3> */}
            <p className="mt-4 text-body/80 leading-relaxed text-base sm:text-lg">
              Moving World is a unique experiential and creative organisation inspired by transformative thinking. We combine
              knowledge, data, aesthetics and audacity to create original, life changing and meaningful work that helps our
              clients to engage deeper with their purpose.
            </p>
          </div>
        </div>
      </div> 

    </section>
  );
}
