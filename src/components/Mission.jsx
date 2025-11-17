import { Flag, Gauge, ShieldCheck } from 'lucide-react'

export default function Mission() {
  const items = [
    {
      title: 'Safety First',
      desc: 'Professional marshals, medical teams, and strict protocols at every event.',
      icon: ShieldCheck,
    },
    {
      title: 'Performance & Precision',
      desc: 'Laser timing, live telemetry, and real-time leaderboards for racers and fans.',
      icon: Gauge,
    },
    {
      title: 'Adventure Culture',
      desc: 'Celebrating the spirit of exploration from forest trails to muddy plains.',
      icon: Flag,
    },
  ]

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
            <p className="mt-3 text-gray-700">We organize premium offroad racing experiences across Hungary—designed for serious competitors, passionate fans, and companies seeking unforgettable team events.</p>
            <p className="mt-3 text-gray-600">From permits to signage, from route surveying to safety logistics, we handle end-to-end operations with precision and care.</p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map(({ title, desc, icon: Icon }) => (
              <li key={title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
                <Icon className="h-5 w-5 text-gray-900" />
                <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-700">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
