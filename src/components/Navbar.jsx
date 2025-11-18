import { useState } from 'react'
import { Menu, Phone, Mail } from 'lucide-react'

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'White-label Services', href: '#white-label' },
  { label: 'Manufacturing', href: '#capacity' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-extrabold text-slate-900 tracking-tight">
            <span className="text-blue-600">VACBAG • WTF</span>
            <span className="hidden sm:inline text-slate-500 font-medium">Manufacturing Group</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4" /> Request a Quote
            </a>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <a href="#contact" className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm">
              <Mail className="w-4 h-4" /> Contact
            </a>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md border border-slate-300 text-slate-700">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
