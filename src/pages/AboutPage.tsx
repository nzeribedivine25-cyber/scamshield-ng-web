import { Shield, Target, Heart, Code } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto section-pad">

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-6"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)', color: 'var(--muted)' }}>
          Our Story
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Built by a Nigerian,
          <span className="text-gradient block">for Nigerians.</span>
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          ScamShield NG was born from a simple frustration: Nigeria has one of the highest rates of internet fraud in the world, yet most scam detection tools weren't built with Nigeria in mind.
        </p>
      </div>

      {/* Story */}
      <div className="card-bg rounded-2xl p-8 mb-8">
        <h2 className="font-display text-2xl font-bold mb-4">The Problem</h2>
        <p className="leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Every day, millions of Nigerians receive suspicious links through WhatsApp, SMS, and email. Fake CBN grants. Phishing sites pretending to be GTBank or Access Bank. Investment schemes promising guaranteed returns. Fake Npower payment portals.
        </p>
        <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
          Existing tools would flag legitimate Nigerian government sites like jamb.gov.ng as suspicious — because they were built for Western audiences who don't know what a .gov.ng domain is. We needed something different.
        </p>
      </div>

      {/* Mission */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: Shield, title: 'Our Mission', desc: 'Make scam detection accessible to every Nigerian with a smartphone — free, instant, and in plain English.' },
          { icon: Target, title: 'Our Focus', desc: 'Nigerian-specific fraud patterns. We know the CBN grant scam. We know the fake JAMB portal. We built for that.' },
          { icon: Heart, title: 'Our Commitment', desc: 'Free forever for individual users. No data sold. No ads. Protection should not cost money.' },
        ].map(item => {
          const Icon = item.icon
          return (
            <div key={item.title} className="card-bg rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-950 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Team */}
      <div className="card-bg rounded-2xl p-8 mb-8">
        <h2 className="font-display text-2xl font-bold mb-6">The Builder</h2>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-primary-50 dark:bg-primary-950 flex items-center justify-center shrink-0">
            <Code className="w-10 h-10 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Nzeribe Divine Chidiebube</h3>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
              Founder, DeVine Tech · CS Student, University of Calabar
            </p>
            <p className="leading-relaxed text-sm mb-3" style={{ color: 'var(--muted)' }}>
              Divine is a first-year Computer Science student at the University of Calabar and the founder of DeVine Tech — a solo design and development studio. He holds a Microsoft SC-900 Security Fundamentals certification and is affiliated with Google Developers Aba and the Microsoft Elevate AI Developers Program.
            </p>
            <p className="leading-relaxed text-sm" style={{ color: 'var(--muted)' }}>
              ScamShield NG started as a competition project and grew into a mission. The goal is simple: make cybersecurity accessible to everyday Nigerians, not just enterprise organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="card-bg rounded-2xl p-8">
        <h2 className="font-display text-2xl font-bold mb-4">What Powers ScamShield</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'React + Vite', desc: 'Frontend' },
            { name: 'Gemini 2.5 Flash', desc: 'AI Layer' },
            { name: 'Supabase', desc: 'Community DB' },
            { name: 'Vercel', desc: 'Deployment' },
          ].map(tech => (
            <div key={tech.name} className="text-center p-4 rounded-xl"
              style={{ backgroundColor: 'var(--bg)' }}>
              <div className="font-semibold text-sm">{tech.name}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
