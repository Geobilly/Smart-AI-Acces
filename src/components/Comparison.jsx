export default function Comparison() {
  return (
    <section className="py-24 bg-background-off">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Problem with Manual Tracking & Ticket Systems
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Why leading organizations are switching to AI-powered access and ticketing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Problem Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                <span className="material-symbols-outlined">close</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Manual Systems</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-red-500 mt-0.5">error</span>
                <span>Inaccurate manual counting and record keeping.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-red-500 mt-0.5">money_off</span>
                <span>Meal and service overbilling due to guesswork.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-red-500 mt-0.5">report_problem</span>
                <span>Ticket fraud, misuse, and lack of transparency.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-red-500 mt-0.5">visibility_off</span>
                <span>Poor visitor tracking and service usage oversight.</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-md ring-1 ring-primary/30">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-secondary">
                <span className="material-symbols-outlined">check</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Intelligent AI Solution</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-primary mt-0.5">verified_user</span>
                <span>Advanced face recognition auto-identifies users — zero fraud.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-primary mt-0.5">confirmation_number</span>
                <span>Secure digital tickets, QR passes, and service records generated in real time.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-primary mt-0.5">analytics</span>
                <span>Eliminates manual errors and improves operational transparency.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <span className="material-symbols-outlined text-primary mt-0.5">speed</span>
                <span>Contactless, fast, and works across multiple service points.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
