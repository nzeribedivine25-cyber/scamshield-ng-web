import { Calendar, Clock, ChevronRight } from 'lucide-react'

const posts = [
  {
    title: 'How to Spot a Fake CBN Grant Message',
    excerpt: 'The Central Bank of Nigeria does not send grants via WhatsApp or SMS. Here\'s exactly how to identify fake CBN messages and what to do if you receive one.',
    date: 'July 5, 2026',
    readTime: '4 min read',
    category: 'Scam Awareness',
    color: 'bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400',
  },
  {
    title: '7 Signs a Nigerian Bank Alert is Fake',
    excerpt: 'Fake bank alerts are one of the most common scam tactics in Nigeria. Learn the 7 telltale signs that an alert from "GTBank", "Access Bank" or "Zenith" is not real.',
    date: 'July 3, 2026',
    readTime: '5 min read',
    category: 'Banking Safety',
    color: 'bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Why .gov.ng Links Are Safe (And How Scammers Fake Them)',
    excerpt: 'All official Nigerian government websites use .gov.ng domains which are tightly controlled by NITDA. Here\'s how to verify you\'re on a real government site.',
    date: 'June 28, 2026',
    readTime: '3 min read',
    category: 'Digital Safety',
    color: 'bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400',
  },
  {
    title: 'The Rise of Typosquatting in Nigeria',
    excerpt: 'Scammers register domains like "gtb-bank-ng.com" or "paystack-verify.com" to steal your login details. Learn how to spot them before you type your password.',
    date: 'June 20, 2026',
    readTime: '6 min read',
    category: 'Cybersecurity',
    color: 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Investment Scams Targeting Young Nigerians in 2026',
    excerpt: 'From fake forex signals to MMM revivals — investment scams are evolving. Here\'s what to watch for and how ScamShield catches them before you lose money.',
    date: 'June 15, 2026',
    readTime: '7 min read',
    category: 'Investment Safety',
    color: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'How to Protect Your BVN from Scammers',
    excerpt: 'Your BVN is the master key to your Nigerian financial identity. Here\'s why you should never share it, who legitimately asks for it, and what to do if it\'s compromised.',
    date: 'June 10, 2026',
    readTime: '5 min read',
    category: 'Identity Safety',
    color: 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto section-pad">

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-6"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)', color: 'var(--muted)' }}>
          Scam Awareness
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Stay one step <span className="text-gradient">ahead of scammers.</span>
        </h1>
        <p className="text-lg" style={{ color: 'var(--muted)' }}>
          Guides, warnings, and awareness content — written for everyday Nigerians.
        </p>
      </div>

      {/* Featured post */}
      <div className="card-bg rounded-2xl p-8 mb-8 hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400">
            Featured
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400">
            Scam Awareness
          </span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          How to Spot a Fake CBN Grant Message
        </h2>
        <p className="leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          The Central Bank of Nigeria does not send grants via WhatsApp or SMS. Here's exactly how to identify fake CBN messages — the urgency language, the suspicious links, the BVN requests — and what to do if you receive one.
        </p>
        <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--muted)' }}>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> July 5, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min read</span>
          <span className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-medium">
            Read more <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(1).map(post => (
          <div key={post.title}
            className="card-bg rounded-2xl p-6 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col">
            <span className={`self-start px-3 py-1 rounded-full text-xs font-semibold mb-4 ${post.color}`}>
              {post.category}
            </span>
            <h3 className="font-display font-bold text-base mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex-1">
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs mt-auto" style={{ color: 'var(--muted)' }}>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Coming soon note */}
      <div className="mt-12 text-center card-bg rounded-2xl p-8">
        <h3 className="font-display font-bold text-xl mb-2">More articles coming soon</h3>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          We publish scam awareness content regularly. Follow us on Twitter{' '}
          <a href="https://twitter.com/scamshieldng" className="text-primary-600 dark:text-primary-400 hover:underline">
            @scamshieldng
          </a>{' '}
          to stay updated.
        </p>
      </div>

    </div>
  )
}
