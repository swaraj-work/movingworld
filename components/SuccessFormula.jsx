export default function SuccessFormula() {
  return (
    <section id="formula" className="section">
      <div className="container-default">
        <div className="max-w-3xl">
          <h2 className="h2">Our Success Formula</h2>
          <div className="divider mt-4" />
        </div>

        <div className="mt-12 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center">
          <Card title="Creativity" color="bg-primary/10" badge="Imagination">
            Distinctive ideas that capture attention and hearts.
          </Card>
          <Plus />
          <Card title="Strategy" color="bg-highlight/10" badge="Clarity">
            Decisions guided by research, goals, and measurable outcomes.
          </Card>
          <Plus />
          <Card title="Culture" color="bg-accent/10" badge="Understanding">
            Deep respect for people and places—global perspective, local nuance.
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children, color, badge }) {
  return (
    <div className={`rounded-2xl ${color} p-6 border border-gray-100 shadow-subtle`}>
      <span className="badge-gold">{badge}</span>
      <h3 className="font-heading text-2xl text-primary mt-3">{title}</h3>
      <p className="text-body/80 mt-2 text-sm md:text-base">{children}</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="hidden md:flex items-center justify-center text-highlight" aria-hidden>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
      </svg>
    </div>
  );
}
