import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-black/5 text-xs font-medium mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Registrations open • 2025 Season
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                Offroad Racing Across Hungary
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-xl">
                A modern racing organization blending rugged terrain with tech-driven clarity. Join hundreds of drivers and fans for high-adrenaline 4x4 events from the Bakony to the Great Plain.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#register" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-black transition">Register to Race</a>
                <a href="#tickets" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 bg-white/80 backdrop-blur font-semibold hover:bg-white transition">Buy Tickets</a>
              </div>
              <p className="mt-6 text-sm text-gray-600">Corporate team-building? Explore our private offroad experience days tailored for companies.</p>
            </div>
            <div className="lg:col-span-6" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
    </section>
  )
}
