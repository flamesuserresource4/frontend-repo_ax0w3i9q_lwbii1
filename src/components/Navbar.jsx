import { Menu, Ticket, Calendar, Send } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-orange-500 to-rose-500 shadow-sm" />
            <span className="text-lg font-semibold tracking-tight">Hungary Offroad Series</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#events" className="hover:text-gray-900 transition">Events</a>
            <a href="#mission" className="hover:text-gray-900 transition">Our Mission</a>
            <a href="#partners" className="hover:text-gray-900 transition">Partners</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#tickets" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition">
              <Ticket className="h-4 w-4" /> Tickets
            </a>
            <a href="#register" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-black transition">
              <Calendar className="h-4 w-4" /> Register
            </a>
          </div>

          <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <a href="#events" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-50">Events</a>
              <a href="#mission" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-50">Our Mission</a>
              <a href="#partners" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-50">Partners</a>
              <a href="#updates" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-50">Updates</a>
            </div>
            <div className="flex gap-2">
              <a href="#tickets" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-gray-300"> <Ticket className="h-4 w-4"/> Tickets</a>
              <a href="#register" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white"> <Send className="h-4 w-4"/> Register</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
