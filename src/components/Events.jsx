import { CalendarDays, MapPin, Clock, ChevronRight } from 'lucide-react'

const events = [
  {
    title: 'Budapest Mud Sprint',
    date: 'Apr 12, 2025',
    location: 'Pest County',
    time: '09:00',
    tag: 'Sprint'
  },
  {
    title: 'Bakony Forest Rally',
    date: 'May 10, 2025',
    location: 'Veszprém County',
    time: '08:30',
    tag: 'Rally'
  },
  {
    title: 'Great Plain Endurance',
    date: 'Jun 7, 2025',
    location: 'Great Hungarian Plain',
    time: '10:00',
    tag: 'Endurance'
  },
]

export default function Events() {
  return (
    <section id="events" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Upcoming Events</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Iconic routes, technical challenges, and roaring engines. Choose your race and secure your spot.</p>
          </div>
          <a href="#register" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-900">See full calendar <ChevronRight className="h-4 w-4"/></a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-tr from-orange-500/10 to-rose-500/10 blur-2xl" />
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <CalendarDays className="h-4 w-4"/> {e.date} • <Clock className="h-4 w-4"/> {e.time}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{e.title}</h3>
              <div className="mt-1 inline-flex items-center gap-1 text-sm text-gray-700"><MapPin className="h-4 w-4"/> {e.location}</div>
              <span className="mt-4 inline-flex self-start px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700">{e.tag}</span>
              <div className="mt-6 flex items-center gap-3">
                <a href="#register" className="inline-flex px-3 py-2 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black">Register</a>
                <a href="#tickets" className="inline-flex px-3 py-2 rounded-md border border-gray-300 text-sm font-semibold hover:bg-gray-50">Tickets</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
