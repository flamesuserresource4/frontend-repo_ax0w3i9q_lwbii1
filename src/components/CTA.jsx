export default function CTA() {
  return (
    <section id="register" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-black/5 bg-gradient-to-tr from-gray-900 to-black p-10 sm:p-14 text-white overflow-hidden relative">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-tr from-orange-500/30 to-rose-500/30 blur-3xl" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to hit the dirt?</h2>
          <p className="mt-3 text-white/80">Register as a driver, buy spectator tickets, or subscribe for race updates and early-bird offers.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-semibold hover:bg-gray-100 transition">Register to Race</a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 bg-white/10 backdrop-blur font-semibold hover:bg-white/20 transition">Buy Tickets</a>
          </div>
          <form id="updates" className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl mx-auto">
            <input type="email" required placeholder="Enter your email for updates" className="h-11 rounded-md px-3 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none" />
            <button className="h-11 rounded-md px-4 bg-gradient-to-tr from-orange-500 to-rose-500 font-semibold">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
