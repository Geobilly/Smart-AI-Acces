const steps = [
  {
    icon: 'person_search',
    step: 'STEP 01',
    title: 'Face Scan',
    description: 'User scans face at the self-service kiosk or device.',
  },
  {
    icon: 'fact_check',
    step: 'STEP 02',
    title: 'AI Identification',
    description: 'AI system instantly identifies the registered user.',
  },
  {
    icon: 'confirmation_number',
    step: 'STEP 03',
    title: 'Ticket Generated',
    description: 'Digital ticket, coupon, or QR pass is automatically generated.',
  },
  {
    icon: 'cloud_done',
    step: 'STEP 04',
    title: 'Record & Track',
    description: 'Service usage is recorded and updated in the dashboard in real time.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-background-off" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How the Smart Access System Works</h2>
          <p className="mt-4 text-lg text-slate-600">A seamless process from identification to service tracking.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 -z-10" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center group">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-gray-100 shadow-sm group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-4xl text-slate-700 group-hover:text-primary">
                    {s.icon}
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-sm font-bold text-primary mb-1">{s.step}</div>
                  <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
