const people = [
  { name: "Asha Singh", role: "Strategy Director" },
  { name: "Luca Mendes", role: "Creative Director" },
  { name: "Mina Kato", role: "Cultural Research Lead" },
  { name: "Ethan Park", role: "Design Engineer" },
];

function Avatar({ name }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="h-16 w-16 rounded-full bg-primary/10 grid place-items-center text-primary font-semibold border border-indigo-100">
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="section bg-surface-2">
      <div className="container-default">
        <div className="max-w-3xl">
          <h2 className="h2 text-plum">Our Team</h2>
          <div className="divider mt-4" />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white p-6 shadow-subtle border border-gray-100 text-center hover:border-plum/40 transition-all">
              <div className="flex justify-center">
                <Avatar name={p.name} />
              </div>
              <h3 className="font-heading text-xl text-body mt-4">{p.name}</h3>
              <p className="text-body/70 text-sm">{p.role}</p>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-12 rounded-2xl bg-gradient-brand p-8 text-white shadow-subtle">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl">Have a vision? Let's move it forward.</h3>
              <p className="text-white/80 mt-2">Start a project conversation with our team.</p>
            </div>
            <a href="mailto:hello@movingworld.agency" className="button-accent bg-white text-primary hover:bg-gray-100">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
