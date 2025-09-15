function Icon({ children }) {
  return (
    <div className="h-12 w-12 rounded-xl bg-white grid place-items-center text-highlight border border-orange-100 shadow-subtle">
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section relative bg-white shadow-card">
      <div className="container-default">
        <div className="max-w-4xl">
          <h2 className="h2 text-plum">Our Services</h2>
          <p className="p-large mt-3 text-body/80">
            We provide a comprehensive range of services, addressing the overall growth and strategic positioning of your
            brand as per the current and emerging trends.
          </p>
          <div className="divider mt-6" />
        </div>

        <div className="mt-8 relative rounded-2xl overflow-hidden border border-gray-600 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/50 text-white shadow-xl">
          <div className="md:col-span-3 p-6 sm:p-8 lg:p-10">
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20" /><span className="font-semibold">Creative Strategy</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20" /><span className="font-semibold">Design & Printing</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20" /><span className="font-semibold">Marketing Services</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20" /><span className="font-semibold">Brand Communication</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20" /><span className="font-semibold">Events Marketing & Management</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20" /><span className="font-semibold">Digital Marketing and Social Media</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/20" /><span className="font-semibold">Productions (Film, TVC and Advertisement)</span></li>
            </ul>
            <div className="mt-8"><a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-plum px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition">Talk to Us<span aria-hidden>→</span></a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
