const features = [
  {
    icon: 'face_retouching_natural',
    title: 'Facial Recognition Identification',
    description: 'Instantly identify employees, visitors, or users using secure AI face recognition technology.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: 'confirmation_number',
    title: 'Automatic Ticket & Coupon Generation',
    description: 'Generate digital tickets or coupons instantly after face scan — no manual verification needed.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: 'qr_code_2',
    title: 'QR Code Pass for Visitors',
    description: 'Create temporary QR cards for guests, visitors, or contractors for controlled service access.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: 'monitoring',
    title: 'Real-Time Usage Tracking',
    description: 'Monitor meals, entries, and service usage with accurate real-time data and reports.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: 'receipt',
    title: 'Transparent Billing & Reporting',
    description: 'Pay only for actual services used with automated records and analytics dashboards.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: 'hub',
    title: 'Multi-Service Integration',
    description: 'Supports canteens, events, staff access, visitor management, and more in one system.',
    color: 'bg-indigo-50 text-indigo-600',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Powerful AI Features in One Platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg ${f.color} group-hover:bg-primary group-hover:text-white transition-colors`}
              >
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
