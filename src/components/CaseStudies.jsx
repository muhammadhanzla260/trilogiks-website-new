const CASES = [
  {
    industry: 'Accounting Integration',
    emoji: '🔗',
    title: 'Odoo ↔ QuickBooks Connector',
    role: 'Odoo Full Stack Developer · Functional Consultant',
    problem: 'Client needed to unify accounting between QuickBooks and Odoo — manual entry was causing errors and costly delays across their finance team.',
    solution: 'Built a full QuickBooks–Odoo connector module with OAuth authentication, API communication, account/tax/partner mapping, and cron-based automated sync with centralised logs and wizards.',
    result1: '30%', label1: 'Efficiency increase',
    result2: '84%', label2: 'Manual workflows eliminated',
    color: '#0a78ff',
  },
  {
    industry: 'Retail & E-Commerce',
    emoji: '📊',
    title: 'Custom Odoo Sales Dashboard',
    role: 'Odoo Techno Functional',
    problem: 'An eyewear retailer needed interactive sales dashboards allowing management to compare current-month sales vs. prior periods across multiple stores and salespeople.',
    solution: 'Developed global date filters, period offsets, and relational filters so admins can dynamically define "month to date" or custom ranges and auto-compare vs. prior periods.',
    result1: '64%', label1: 'More accurate decisions',
    result2: '30%', label2: 'Live business visibility',
    color: '#7c5cff',
  },
  {
    industry: 'Subscription & Rental',
    emoji: '🔄',
    title: 'WordPress ↔ Odoo Subscription & Rental Integration',
    role: 'Odoo Senior Developer',
    problem: 'A European self-storage business ran customer bookings on WordPress while Odoo handled operations — disconnected systems caused manual data entry, delayed orders, and booking inconsistencies.',
    solution: 'Developed a custom two-way integration syncing products, rental plans, and sales orders. Bookings on WordPress now automatically create corresponding records in Odoo in real time.',
    result1: '70%', label1: 'Less manual data entry',
    result2: '40%', label2: 'Operational efficiency gain',
    color: '#0a9e6e',
  },
]

export default function CaseStudies() {
  return (
    <section id="cases" className="ks-section" style={{ background: '#fff' }}>
      <div className="ks-container">
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 48px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>Case Studies</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>Real results for real businesses</h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7 }}>
            Numbers speak louder than promises. Here's what we've delivered.
          </p>
        </div>

        <div className="ks-grid-3">
          {CASES.map((c, i) => (
            <div key={i} data-reveal style={{
              opacity: 0, animationDelay: `${i * .1}s`,
              borderRadius: 20, border: '1px solid #e7edf6', overflow: 'hidden',
              background: '#fff', transition: 'transform .3s ease, box-shadow .3s ease',
              display: 'flex', flexDirection: 'column',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 32px 64px -32px rgba(12,40,90,.24)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              {/* Header band */}
              <div style={{
                padding: '28px 24px 22px',
                background: `linear-gradient(135deg, ${c.color}18, ${c.color}08)`,
                borderBottom: `2px solid ${c.color}22`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{c.emoji}</span>
                  <span style={{
                    fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999,
                    background: `${c.color}18`, color: c.color, letterSpacing: '.06em',
                  }}>{c.industry}</span>
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 17,
                  lineHeight: 1.3, color: '#0a1733', margin: '0 0 6px',
                }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 12, color: '#9aabcc', fontWeight: 500 }}>{c.role}</p>
              </div>

              <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Stats */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 18, padding: '14px', borderRadius: 12, background: '#f8faff' }}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 26, color: c.color }}>{c.result1}</div>
                    <div style={{ fontSize: 11.5, color: '#5a6a8a', marginTop: 2 }}>{c.label1}</div>
                  </div>
                  <div style={{ width: 1, background: '#e7edf6' }} />
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 26, color: c.color }}>{c.result2}</div>
                    <div style={{ fontSize: 11.5, color: '#5a6a8a', marginTop: 2 }}>{c.label2}</div>
                  </div>
                </div>

                {/* Problem */}
                <div style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#e05252', textTransform: 'uppercase', letterSpacing: '.08em' }}>Problem</span>
                  <p style={{ margin: '4px 0 0', fontSize: 13.5, color: '#5a6a8a', lineHeight: 1.6 }}>{c.problem}</p>
                </div>
                {/* Solution */}
                <div style={{ marginBottom: 18, flex: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#0a9e6e', textTransform: 'uppercase', letterSpacing: '.08em' }}>Solution</span>
                  <p style={{ margin: '4px 0 0', fontSize: 13.5, color: '#5a6a8a', lineHeight: 1.6 }}>{c.solution}</p>
                </div>

                <a href="#contact" style={{
                  fontSize: 13.5, fontWeight: 700, color: c.color,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  Discuss a Similar Project
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
