export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl mb-6">
          Transform Your Operations with Smart AI Access & Ticketing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 mb-10">
          Upgrade from manual tracking to an intelligent face recognition system that delivers accuracy, transparency, and automation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/233543370183"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 inline-flex items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg hover:bg-white hover:text-secondary transition-all"
          >
            Book a Demo
          </a>
          <a
            href="https://wa.me/233543370183"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 inline-flex items-center justify-center rounded-lg bg-transparent border-2 border-white px-8 text-base font-bold text-white hover:bg-white/10 transition-all"
          >
            Contact Sales
          </a>
          <a
            href="https://wa.me/233543370183"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/30 px-8 text-base font-bold text-white hover:bg-white/20 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
