import { Link } from 'react-router-dom'
import { Shield, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-xl text-primary-600 dark:text-primary-400 mb-3">
              <Shield className="w-6 h-6" />
              ScamShield NG
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              AI-powered scam detection built for Nigerians. Protecting 140M+ smartphone users from fraud, phishing, and cybercrime — one check at a time.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://twitter.com/scamshieldng" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Twitter">
                <Twitter className="w-4 h-4" style={{ color: 'var(--muted)' }} />
              </a>
              <a href="https://linkedin.com/company/scamshieldng" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" style={{ color: 'var(--muted)' }} />
              </a>
              <a href="https://github.com/nzeribedivine25-cyber/scamshield-ng-sentinel" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub">
                <Github className="w-4 h-4" style={{ color: 'var(--muted)' }} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2">
              {[
                { label: 'Check a Link', href: 'https://scamshield-ng-sentinel.vercel.app', external: true },
                { label: 'Report a Scam', href: '/report', external: false },
                { label: 'How it Works', href: '/#how-it-works', external: false },
              ].map(item => (
                <li key={item.label}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                      style={{ color: 'var(--muted)' }}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href}
                      className="text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                      style={{ color: 'var(--muted)' }}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Blog', to: '/blog' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to}
                    className="text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                    style={{ color: 'var(--muted)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © 2026 ScamShield NG • Built by <a href="https://devine-tech.vercel.app" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">DeVine Tech</a> • Made for Nigeria 🇳🇬
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Powered by 5-layer AI detection + 200+ verified Nigerian domains
          </p>
        </div>
      </div>
    </footer>
  )
}
