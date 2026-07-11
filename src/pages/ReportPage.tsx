import { useState } from 'react'
import { Flag, CheckCircle, AlertTriangle } from 'lucide-react'

const SCANNER_URL = 'https://scamshield-ng-sentinel.vercel.app'

export default function ReportPage() {
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const categories = [
    'Fake CBN/Government Grant',
    'Fake Bank Alert',
    'Investment Scam (Ponzi/Forex)',
    'Phishing Site',
    'Fake Job Offer',
    '419 Advance Fee Fraud',
    'Fake Npower/Trader Moni',
    'URL Shortener Hiding Scam',
    'Typosquatted Domain',
    'Other',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('https://scamshield-ng-sentinel.vercel.app/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })
      if (res.ok) {
        setStatus('success')
        setUrl('')
        setCategory('')
        setDescription('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-2xl mx-auto section-pad">
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950 flex items-center justify-center mx-auto mb-4">
          <Flag className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="font-display text-4xl font-bold mb-3">
          Report a <span className="text-gradient">Scam</span>
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          Every report you submit helps protect other Nigerians. After 3 reports, a link is automatically flagged as scam for everyone.
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-8 p-6 rounded-2xl bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 flex items-start gap-4">
          <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-primary-700 dark:text-primary-300 mb-1">Report submitted!</h3>
            <p className="text-sm text-primary-600 dark:text-primary-400">Thank you for helping keep Nigeria safe.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-8 p-6 rounded-2xl bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-700 dark:text-red-300 mb-1">Could not submit report</h3>
            <p className="text-sm text-red-600 dark:text-red-400">Please check your connection and try again.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="card-bg rounded-2xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Suspicious Link or Message <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Paste the suspicious link, phone number, or message here..."
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-primary-500 transition-all"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--fg)' }}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Scam Category</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-primary-500 transition-all"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--fg)' }}
          >
            <option value="">Select a category (optional)</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">What happened? (optional)</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Briefly describe how you encountered this scam..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-primary-500 transition-all resize-none"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--fg)' }}
          />
        </div>

        <button
          type="submit"
          disabled={!url.trim() || status === 'loading'}
          className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-all"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Report'}
        </button>

        <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
          Or use the{' '}
          <a href={SCANNER_URL} target="_blank" rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline">
            ScamShield scanner
          </a>{' '}
          to check and report in one step.
        </p>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-bg rounded-2xl p-5">
          <h3 className="font-semibold text-sm mb-2">How reports work</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
            Once a link hits 3 reports from different users, it's automatically flagged as scam for everyone who checks it — in real time.
          </p>
        </div>
        <div className="card-bg rounded-2xl p-5">
          <h3 className="font-semibold text-sm mb-2">What to report</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
            Fake bank alerts, fake CBN grants, investment scams, phishing links, typosquatted domains, and messages asking for your BVN, PIN, or OTP.
          </p>
        </div>
      </div>
    </div>
  )
}
