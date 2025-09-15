export default function VisionMission() {
  return (
    <section id="vision" className="section bg-gradient-vision text-white">
      <div className="container-default">
        <div className="max-w-3xl">
          <h2 className="h2 text-white">Vision & Mission</h2>
          <div className="divider mt-4" />
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white/10 backdrop-blur p-8 border border-white/15">
            <h3 className="font-heading text-2xl text-white">Our Vision</h3>
            <p className="mt-4 text-white/80">
              To inspire a world where brands foster understanding, spark imagination, and move people toward meaningful progress.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur p-8 border border-white/15">
            <h3 className="font-heading text-2xl text-white">Our Mission</h3>
            <p className="mt-4 text-white/80">
              We partner with ambitious teams to build culturally aware brand systems that convert strategic clarity into business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
