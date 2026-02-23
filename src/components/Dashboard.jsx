export default function Dashboard() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Real-Time Analytics & Smart Reporting</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Get complete visibility into service usage, ticket generation, and user activity through a powerful dashboard designed for transparency and operational control.
        </p>

        <div className="relative mx-auto w-full max-w-5xl">
          {/* Laptop Bezel */}
          <div className="relative rounded-t-xl bg-gray-800 p-2 shadow-2xl ring-1 ring-gray-900/10">
            <div className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-b-md bg-gray-700" />

            <div className="overflow-hidden rounded-lg bg-white aspect-[16/9] relative border border-gray-200">
              {/* Dashboard CSS Art */}
              <div className="flex h-full w-full bg-slate-50">
                {/* Sidebar */}
                <div className="w-16 md:w-48 bg-white border-r border-gray-200 hidden sm:flex flex-col p-4 gap-4">
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-32 bg-gray-100 rounded mt-4" />
                  <div className="h-4 w-28 bg-gray-100 rounded" />
                  <div className="h-4 w-32 bg-gray-100 rounded" />
                  <div className="h-4 w-24 bg-gray-100 rounded" />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-48 bg-gray-200 rounded" />
                    <div className="h-8 w-8 bg-gray-200 rounded-full" />
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-white rounded shadow-sm border border-gray-200 p-4">
                      <div className="h-8 w-8 bg-green-100 rounded mb-2" />
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                    <div className="h-24 bg-white rounded shadow-sm border border-gray-200 p-4">
                      <div className="h-8 w-8 bg-blue-100 rounded mb-2" />
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                    <div className="h-24 bg-white rounded shadow-sm border border-gray-200 p-4">
                      <div className="h-8 w-8 bg-purple-100 rounded mb-2" />
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 bg-white rounded shadow-sm border border-gray-200 p-4 flex items-end gap-2 justify-around pb-8">
                    <div className="w-8 bg-green-400 h-[40%] rounded-t" />
                    <div className="w-8 bg-green-400 h-[60%] rounded-t" />
                    <div className="w-8 bg-green-400 h-[30%] rounded-t" />
                    <div className="w-8 bg-green-400 h-[80%] rounded-t" />
                    <div className="w-8 bg-green-400 h-[55%] rounded-t" />
                    <div className="w-8 bg-green-400 h-[90%] rounded-t" />
                    <div className="w-8 bg-green-400 h-[70%] rounded-t" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative mx-auto h-4 w-full max-w-[calc(100%+2rem)] -translate-x-4 rounded-b-xl bg-gray-700 shadow-xl" />
        </div>

        {/* Dashboard Highlights */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {['Daily usage reports', 'User activity logs', 'Service consumption tracking', 'Exportable reports for accounting', 'Accurate cost analysis'].map(
            (item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span>{item}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
