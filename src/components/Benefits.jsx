const benefits = [
  { icon: 'trending_down', text: 'Reduce operational losses' },
  { icon: 'block', text: 'Eliminate manual ticket fraud' },
  { icon: 'visibility', text: 'Improve transparency and accountability' },
  { icon: 'auto_fix_high', text: 'Automate service tracking' },
  { icon: 'speed', text: 'Enhance operational efficiency' },
  { icon: 'payments', text: 'Accurate billing based on real usage' },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-background-off" id="benefits">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Organizations Choose Our System
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.text}
              className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">{b.icon}</span>
              </div>
              <span className="text-base font-medium text-slate-700 pt-1.5">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
