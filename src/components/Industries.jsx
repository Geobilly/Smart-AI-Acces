const industries = [
  { icon: 'factory', title: 'Factories & Industrial', sub: 'Shift meals & workforce management' },
  { icon: 'apartment', title: 'Corporate Offices', sub: 'Staff access & subsidy tracking' },
  { icon: 'school', title: 'Schools & Universities', sub: 'Student meals & attendance' },
  { icon: 'local_hospital', title: 'Hospitals & Institutions', sub: 'Staff & visitor service access' },
  { icon: 'construction', title: 'Mining & Large Workforce', sub: 'Scalable workforce solutions' },
  { icon: 'event', title: 'Event Management', sub: 'Check-ins & QR ticket validation' },
];

export default function Industries() {
  return (
    <section className="py-24 bg-background-off" id="industries">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-16">
          Built for Modern Organizations
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-sm text-center hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-3">{ind.icon}</span>
              <h3 className="font-bold text-slate-800">{ind.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{ind.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
