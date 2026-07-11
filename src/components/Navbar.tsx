import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, Sun, Moon, Menu, X } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

const SCANNER_URL = 'https://scamshield-ng-sentinel.vercel.app'

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Report a Scam', to: '/report' },
    { label: 'Blog', to: '/blog' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', opacity: 0.97 }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-primary-600 dark:text-primary-400">
          <Shield className="w-6 h-6" />
          ScamShield NG
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                location.pathname === link.to
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>

          <a
            href={SCANNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <Shield className="w-4 h-4" />
            Check a Link
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-3"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-2 transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                location.pathname === link.to
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SCANNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary-600 text-white text-sm font-semibold"
          >
            <Shield className="w-4 h-4" />
            Check a Link Now
          </a>
        </div>
      )}
    </nav>
  )
}
