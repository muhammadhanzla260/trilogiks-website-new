const CASES = [
  {
    img: '/assets/case/case1.webp',
    industry: 'Manufacturing',
    title: 'How a 60-person manufacturer cut inventory errors by 84%',
    result1: '84%', label1: 'Fewer inventory errors',
    result2: '3×', label2: 'Faster order processing',
    desc: 'A Texas-based metal fabrication company was running three disconnected systems. After our Odoo Manufacturing + Inventory implementation, they unified operations and cut the weekly reconciliation from 12 hours to 45 minutes.',
  },
  {
    img: '/assets/case/case2.webp',
    industry: 'E-Commerce',
    title: 'DTC brand scaled from $2M to $8M on Odoo in 14 months',
    result1: '4×', label1: 'Revenue growth',
    result2: '−68%', label2: 'Manual fulfillment time',
    desc: 'A California DTC brand was drowning in Shopify + manual spreadsheets. We built a Shopify ↔ Odoo integration that automated fulfillment, inventory replenishment, and financial consolidation.',
  },
  {
    img: '/assets/case/case3.webp',
    industry: 'Professional Services',
    title: 'Consulting firm improved project profitability by 31%',
    result1: '+31%', label1: 'Project profitability',
    result2: '11 hrs', label2: 'Saved per week per PM',
    desc: 'A 40-person consulting firm had no visibility into project costs vs. budgets. We implemented Odoo Project + Timesheets + Invoicing, giving leadership real-time P&L per engagement.',
  },
]

export default function CaseStudies() {
  return (
    <section id="cases" className="ks-section" style={{ background: '#fff' }}>
      <div className="ks-container">
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 64px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>Case Studies</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>Real results for real businesses</h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7 }}>
            Numbers speak louder than promises. Here's what we've delivered.
          </p>
        </div>

        <div className="ks-grid-3">
          {CASES.map((c, i) => (
            <div key={i} data-reveal style={{ opacity: 0, animationDelay: `${i * .1}s`, borderRadius: 20, border: '1px solid #e7edf6', overflow: 'hidden', background: '#fff', transition: 'transform .3s ease, box-shadow .3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 32px 64px -32px rgba(12,40,90,.28)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              {/* Image */}
              <div style={{ height: 200, overflow: 'hidden', background: 'linear-gradient(135deg,#0a1f4a,#0a52e0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'} />
                <div style={{ position: 'absolute', top: 16, left: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 999, background: 'rgba(255,255,255,.18)', color: '#fff', backdropFilter: 'blur(8px)' }}>{c.industry}</span>
                </div>
              </div>

              <div style={{ padding: '24px 24px 28px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 17, lineHeight: 1.35, color: '#0a1733', margin: '0 0 16px' }}>{c.title}</h3>

                {/* Stats */}
                <div style={{ display: 'flex', gap: 16, marginBottom: 16, padding: '14px', borderRadius: 12, background: '#f8faff' }}>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 24, color: 'var(--ks-accent)' }}>{c.result1}</div>
                    <div style={{ fontSize: 12, color: '#5a6a8a' }}>{c.label1}</div>
                  </div>
                  <div style={{ width: 1, background: '#e7edf6' }} />
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 24, color: 'var(--ks-accent)' }}>{c.result2}</div>
                    <div style={{ fontSize: 12, color: '#5a6a8a' }}>{c.label2}</div>
                  </div>
                </div>

                <p style={{ margin: '0 0 18px', fontSize: 14, color: '#5a6a8a', lineHeight: 1.65 }}>{c.desc}</p>
                <a href="#contact" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ks-accent)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Read Full Case Study
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
