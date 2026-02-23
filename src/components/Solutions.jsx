const solutions = [
  {
    icon: 'restaurant',
    title: 'Canteen & Meal Management',
    description: 'Track employee meals accurately and eliminate food loss with automated ticket generation.',
    image: '/src/assets/meal.jpeg',
  },
  {
    icon: 'badge',
    title: 'Factory & Staff Access Control',
    description: 'Monitor staff entry, shift meals, and service usage with face recognition authentication.',
    image: '/src/assets/factory.jpeg',
  },
  {
    icon: 'celebration',
    title: 'Events & Conferences',
    description: 'Enable fast face-based check-ins and QR ticket validation for events and programs.',
    image: '/src/assets/event.jpeg',
  },
  {
    icon: 'school',
    title: 'Schools & Institutions',
    description: 'Manage student meals, attendance, and service access with a single AI system.',
    image: '/src/assets/school.jpeg',
  },
  {
    icon: 'how_to_reg',
    title: 'Visitor & Guest Management',
    description: 'Issue secure QR passes for visitors with controlled service access and tracking.',
    image: '/src/assets/Visitor.jpeg',
  },
  {
    icon: 'qr_code',
    title: 'Asset & Equipment Tracking',
    description: 'Track and control access to valuable assets or equipment using face or QR authentication.',
    image: '/src/assets/analytics.jpeg',
  },
];

export default function Solutions() {
  return (
    <section className="py-24 bg-background-off" id="solutions">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Versatile platform</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            One Platform, Multiple Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-primary/30"
            >
              {s.image && (
                <img
                  src={s.image}
                  alt={s.title + ' image'}
                  className="mb-5 w-full h-32 object-cover rounded-lg border border-primary/10"
                  style={{ maxHeight: 120 }}
                />
              )}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
