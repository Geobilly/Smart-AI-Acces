export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-background-light">
      {/* Background Gradient Blob */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7fd959] to-[#2E7D32] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:text-left items-center">
          {/* Left – Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-secondary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              AI-Powered Access & Ticketing
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl mb-6">
              Smart Access & <br />
              <span className="text-secondary">Ticketing System</span> <br />
              Powered by Face Recognition
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Automate identification, ticket generation, access control, and service tracking with one intelligent AI platform for companies, factories, schools, and institutions.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-500">
              A contactless facial recognition system that instantly identifies users and generates digital tickets, coupons, or QR passes for services like canteens, events, visitor access, and more — with real-time analytics and full transparency.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start">
              <button className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-white shadow-sm hover:bg-primary-dark transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Request Demo
              </button>
              <a href="#how-it-works" className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-all">
                View How It Works
              </a>
            </div>
          </div>

          {/* Right – Hero Image */}
          <div className="relative mt-16 h-[28rem] lg:mt-0 lg:h-auto flex items-center justify-center">
            <img
              src="/src/assets/heroimage.jpeg"
              alt="Smart Access & Ticketing System Hero"
              className="rounded-2xl shadow-xl object-cover w-full h-full max-w-xl max-h-[28rem] border-4 border-primary/20"
              style={{ background: 'linear-gradient(to bottom right, #f6f9f5, #fff)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
