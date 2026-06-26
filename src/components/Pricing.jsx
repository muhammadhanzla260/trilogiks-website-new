import { useState } from 'react'

const PLANS = [
  {
    name: 'Starter',
    tag: null,
    price: { monthly: 'From $8K', annual: 'From $7K' },
    desc: 'For small businesses doing their first Odoo implementation.',
    features: [
      'Up to 3 Odoo modules',
      'Up to 15 users',
      'Standard configuration',
      'Data migration (up to 5 entities)',
      '2 days of user training',
      '30-day post-launch support',
      'Email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    tag: 'Most Popular',
    price: { monthly: 'From $18K', annual: 'From $16K' },
    desc: 'For mid-market companies needing a full-stack Odoo setup.',
    features: [
      'Up to 8 Odoo modules',
      'Unlimited users',
      'Custom workflows & automations',
      'Full data migration',
      'Role-based training program',
      '90-day post-launch support',
      'Priority phone & email support',
      '1 third-party integration',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Enterprise',
    tag: null,
    price: { monthly: 'Custom', annual: 'Custom' },
    desc: 'For complex multi-entity or multi-country deployments.',
    features: [
      'Unlimited modules',
      'Multi-company / multi-currency',
      'Custom module development',
      'Complex integrations & APIs',
      'Dedicated project manager',
      '12-month support retainer',
      '24/5 support coverage',
      'Quarterly business reviews',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="ks-section" style={{ background: '#fff' }}>
      <div className="ks-container">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>Pricing</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>Transparent, fixed-price packages</h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7 }}>
            No surprise overages. Fixed-price scopes with optional support retainers.
          </p>
        </div>

        <div className="ks-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, alignItems: 'start' }}>
          {PLANS.map((p, i) => (
            <div key={i} data-reveal style={{
              opacity: 0, animationDelay: `${i * .1}s`,
              borderRadius: 22,
              background: p.highlight ? 'linear-gradient(155deg,#0a2a70,#0a52e0)' : '#fff',
              border: p.highlight ? 'none' : '1px solid #e7edf6',
              padding: '32px 28px',
              position: 'relative',
              transform: p.highlight ? 'scale(1.04)' : undefined,
              boxShadow: p.highlight ? '0 28px 60px -20px rgba(10,108,255,.55)' : '0 4px 20px -6px rgba(10,30,80,.08)',
            }}>
              {p.tag && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', padding: '5px 18px', borderRadius: 999, background: 'var(--ks-grad)', color: '#fff', fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', boxShadow: '0 10px 24px -6px var(--ks-glow-1)' }}>
                  {p.tag}
                </div>
              )}
              <div style={{ fontSize: 13, fontWeight: 700, color: p.highlight ? 'rgba(255,255,255,.7)' : '#5a6a8a', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 8 }}>{p.name}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 32, color: p.highlight ? '#fff' : '#0a1733', marginBottom: 6 }}>
                {annual ? p.price.annual : p.price.monthly}
              </div>
              <p style={{ fontSize: 14, color: p.highlight ? 'rgba(255,255,255,.65)' : '#5a6a8a', marginBottom: 24, lineHeight: 1.5 }}>{p.desc}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: p.highlight ? 'rgba(255,255,255,.85)' : '#3a4768' }}>
                    <span style={{ width: 18, height: 18, borderRadius: 5, background: p.highlight ? 'rgba(255,255,255,.2)' : 'var(--ks-grad)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '14px', borderRadius: 12, fontWeight: 700, fontSize: 15,
                background: p.highlight ? '#fff' : 'var(--ks-grad)',
                color: p.highlight ? '#0a52e0' : '#fff',
                boxShadow: p.highlight ? '0 12px 28px -8px rgba(0,0,0,.3)' : '0 12px 28px -10px var(--ks-glow-1)',
                transition: 'transform .2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform=''}
              >{p.cta}</a>
            </div>
          ))}
        </div>

        <p data-reveal style={{ opacity: 0, textAlign: 'center', marginTop: 36, color: '#5a6a8a', fontSize: 14 }}>
          All prices are project estimates. Final pricing depends on scope. <a href="#contact" style={{ color: 'var(--ks-accent)', fontWeight: 600 }}>Schedule a free scoping call →</a>
        </p>
      </div>
    </section>
  )
}
