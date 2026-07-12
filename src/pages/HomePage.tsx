import { useState, useEffect, useRef } from 'react'
import { Shield, AlertTriangle, CheckCircle, ChevronRight, Zap, Users, Globe, BarChart3, Lock, Eye } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

const SCANNER_URL = 'https://scamshield-ng-sentinel.vercel.app'

// ── DATA ─────────────────────────────────────────────────────────────────────
const smartphoneData = [
  { year: '2020', users: 25 },
  { year: '2021', users: 38 },
  { year: '2022', users: 55 },
  { year: '2023', users: 75 },
  { year: '2024', users: 100 },
  { year: '2025', users: 125 },
  { year: '2026', users: 140, launch: true },
]

const detectionData = [
  { name: 'Whitelist', value: 45, color: '#16a34a' },
  { name: 'Heuristics', value: 30, color: '#f59e0b' },
  { name: 'Blacklist', value: 15, color: '#ef4444' },
  { name: 'AI (Gemini)', value: 10, color: '#3b82f6' },
]

const stats = [
  { label: 'Nigerians Protected', value: '140M+', icon: Users, desc: 'Smartphone users we serve' },
  { label: 'Verified Domains', value: '200+', icon: Globe, desc: 'Trusted Nigerian & global sites' },
  { label: 'Scams Flagged', value: '50+', icon: AlertTriangle, desc: 'Since our first launch' },
  { label: 'Detection Layers', value: '5', icon: Shield, desc: 'Whitelist to AI' },
]

const howItWorks = [
  {
    step: '01',
    title: 'Paste anything suspicious',
    desc: 'A link, phone number, or message. ScamShield accepts all three.',
    icon: Eye,
  },
  {
    step: '02',
    title: 'We run 5 layers of checks',
    desc: 'From a verified Nigerian domain database to AI — in under 3 seconds.',
    icon: Zap,
  },
  {
    step: '03',
    title: 'You get a clear verdict',
    desc: 'Safe, Suspicious, or Scam — with a plain explanation in simple English.',
    icon: CheckCircle,
  },
  {
    step: '04',
    title: 'Dangerous links get blocked',
    desc: 'Scam verdicts trigger an interception page. We stop you before you proceed.',
    icon: Lock,
  },
]

const features = [
  {
    title: 'Nigerian Domain Whitelist',
    desc: 'Every .gov.ng, .edu.ng, and verified Nigerian fintech is pre-cleared. JAMB, CBN, Paystack, Kuda — they\'re all safe by default.',
    icon: Globe,
    color: 'text-primary-600 dark:text-primary-400',
    bg: 'bg-primary-50 dark:bg-primary-950',
  },
  {
    title: 'Community Blacklist',
    desc: 'Every scam reported by a Nigerian user feeds our shared database. After 3 reports, a link is automatically blocked for everyone.',
    icon: Users,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950',
  },
  {
    title: 'AI Scam Detection',
    desc: 'Gemini AI trained on Nigerian scam patterns analyzes anything that passes the first 4 layers — BVN requests, fake grants, 419 patterns.',
    icon: BarChart3,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-950',
  },
  {
    title: 'Link Interception',
    desc: 'Scam links don\'t just get flagged — they get blocked. A 5-second mandatory pause forces you to think before proceeding.',
    icon: Lock,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950',
  },
  {
    title: 'Typosquatting Detection',
    desc: 'Catches fake domains pretending to be GTBank, Access Bank, OPay, JAMB, and other trusted Nigerian platforms.',
    icon: AlertTriangle,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950',
  },
  {
    title: 'Dark Mode',
    desc: 'Full dark mode support across the entire platform — designed for accessibility and comfortable use at any time of day.',
    icon: Eye,
    color: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-50 dark:bg-slate-900',
  },
]

// ── CUSTOM TOOLTIP ────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border p-3 text-sm shadow-lg"
        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
        <p className="font-semibold mb-1">{label}</p>
        <p className="text-primary-600 dark:text-primary-400">{payload[0].value}M users</p>
        {payload[0]?.payload?.launch && (
          <p className="text-xs mt-1 text-primary-500">🚀 ScamShield launches</p>
        )}
      </div>
    )
  }
  return null
}

// ── ANIMATED COUNTER ──────────────────────────────────────────────────────────
function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, start])
  return count
}

// ── STAT CARD ─────────────────────────────────────────────────────────────────
function StatCard({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  const Icon = stat.icon
  return (
    <div className="card-bg rounded-2xl p-6 text-center flex flex-col items-center gap-2 hover:glow transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-950 flex items-center justify-center mb-1">
        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div className="font-display text-3xl font-bold text-primary-600 dark:text-primary-400">
        {stat.value}
      </div>
      <div className="font-semibold text-sm">{stat.label}</div>
      <div className="text-xs" style={{ color: 'var(--muted)' }}>{stat.desc}</div>
    </div>
  )
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-pad flex flex-col items-center text-center min-h-[90vh] justify-center">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-400/10 dark:bg-primary-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-6"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)', color: 'var(--muted)' }}>
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Built for Nigeria · Powered by AI
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Stop scam now,
            <span className="text-gradient block">before it starts.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--muted)' }}>
            ScamShield NG checks any link, phone number, or message in seconds — using a 5-layer AI engine built specifically for Nigerian internet fraud patterns.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SCANNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Shield className="w-5 h-5" />
              Check a Link Now
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-8 py-4 rounded-full border font-semibold text-lg transition-all hover:bg-slate-50 dark:hover:bg-slate-900"
              style={{ borderColor: 'var(--border)' }}
            >
              How it works
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: 'var(--muted)' }}>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary-500" /> Free to use</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary-500" /> No sign-up needed</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary-500" /> Results in 3 seconds</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary-500" /> Nigerian-context AI</span>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="section-pad" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Built for <span className="text-gradient">Nigeria's scale</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Real numbers. Real protection. Real impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(stat => (
              <StatCard key={stat.label} stat={stat} animate={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CHARTS ───────────────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              The data behind <span className="text-gradient">the mission</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Nigeria's smartphone boom is creating more scam targets. ScamShield is the answer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Line chart */}
            <div className="card-bg rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg mb-1">Nigerian Smartphone Users</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
                Growth from 2020–2026 (millions) — ScamShield launches at the peak
              </p>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={smartphoneData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: 'var(--muted)' }} />
                  <YAxis tick={{ fontSize: 12, fill: 'var(--muted)' }} unit="M" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={(props) => {
                      const { cx, cy, payload } = props
                      if (payload.launch) {
                        return <circle key={`dot-${cx}`} cx={cx} cy={cy} r={8} fill="#16a34a" stroke="white" strokeWidth={2} />
                      }
                      return <circle key={`dot-${cx}`} cx={cx} cy={cy} r={4} fill="#16a34a" />
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-xs mt-3" style={{ color: 'var(--muted)' }}>
                Source: Vanguard News / Statista, 2025
              </p>
            </div>

            {/* Pie chart */}
            <div className="card-bg rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg mb-1">How ScamShield Detects Threats</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
                Breakdown of detection across our 5 layers
              </p>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={detectionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {detectionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, 'Share']}
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      fontSize: '13px',
                    }}
                  />
                  <Legend
                    formatter={(value) => <span style={{ color: 'var(--fg)', fontSize: '13px' }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-xs mt-3" style={{ color: 'var(--muted)' }}>
                Based on detection architecture — AI only runs on cases that pass all 4 prior layers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="section-pad" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              How it <span className="text-gradient">works</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Four steps. Three seconds. Full protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="card-bg rounded-2xl p-6 relative">
                  <div className="text-5xl font-display font-black text-primary-100 dark:text-primary-950 absolute top-4 right-4 select-none">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Built different. <span className="text-gradient">Built for Nigeria.</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Most scam detectors weren't designed with Nigeria in mind. We were.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(feature => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="card-bg rounded-2xl p-6 hover:-translate-y-1 transition-all duration-200">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary-50 dark:bg-primary-950 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Don't click before you <span className="text-gradient">check.</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
            It takes 3 seconds to verify a link. It could take years to recover from a scam. ScamShield is free, instant, and built for you.
          </p>
          <a
            href={SCANNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Shield className="w-5 h-5" />
            Start Checking for Free
            <ChevronRight className="w-4 h-4" />
          </a>
          <p className="text-sm mt-4" style={{ color: 'var(--muted)' }}>
            No account needed. No data stored. Just protection.
          </p>
        </div>
      </section>

    </div>
  )
}
