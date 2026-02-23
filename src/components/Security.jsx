const points = [
  { icon: 'psychology', text: 'High-accuracy AI recognition' },
  { icon: 'shield', text: 'Secure user data management' },
  { icon: 'clean_hands', text: 'Contactless and hygienic system' },
  { icon: 'expand', text: 'Scalable for large organizations' },
];

export default function Security() {
  return (
    <section className="py-24 bg-white" id="security">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left – Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Secure, Fast & Reliable AI Technology
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our platform uses advanced facial recognition algorithms with high accuracy, secure data processing, and privacy-focused architecture to ensure safe and reliable identification across all service points.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((p) => (
                <div key={p.text} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <span className="material-symbols-outlined text-primary">{p.icon}</span>
                  <span className="text-sm font-medium text-slate-700">{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Visual */}
          <div className="mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="absolute inset-4 rounded-full bg-white shadow-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[80px] lg:text-[100px] text-primary">verified_user</span>
              </div>
              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary shadow-lg" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-4 w-4 rounded-full bg-secondary shadow-lg" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary-dark shadow-lg" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-secondary shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
