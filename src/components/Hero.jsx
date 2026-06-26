import { useEffect, useRef } from 'react'

const PILLS = [
  { icon: '✓', text: 'No long-term contracts' },
  { icon: '🇺🇸', text: 'US-Based Support' },
  { icon: '⚡', text: 'Go live in 6–10 weeks' },
]

export default function Hero() {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const onMove = (e) => {
      const r = card.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2
      card.style.transform = `perspective(900px) rotateY(${x / 26}deg) rotateX(${-y / 26}deg) scale3d(1.02,1.02,1.02)`
    }
    const onLeave = () => { card.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)' }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <section className="ks-hero-sec" style={{
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(140deg,#030c1f 0%,#061538 42%,#0a1f4a 100%)',
      paddingTop: 148, paddingBottom: 108,
    }}>
      {/* Aurora overlay */}
      <div className="ks-aurora" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(10,108,255,.35) 0%, transparent 70%), radial-gradient(ellipse at 80% 20%, rgba(124,92,255,.28) 0%, transparent 65%)' }} />

      {/* Floating orbs */}
      <div className="ks-orb" style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', background: 'rgba(10,108,255,.22)', top: -120, right: -120 }} />
      <div className="ks-orb" style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', background: 'rgba(124,92,255,.18)', bottom: -80, left: -80, animationDelay: '-9s' }} />

      {/* Grid pattern overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />

      <div className="ks-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="ks-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* Left */}
          <div>
            {/* Badge */}
            <div data-reveal style={{ opacity: 0 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 999,
                background: 'rgba(10,108,255,.15)', border: '1px solid rgba(10,108,255,.3)',
                color: '#7bb8ff', fontSize: 13, fontWeight: 600, marginBottom: 28,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'ksDot 1.6s infinite', display: 'inline-block' }} />
                Certified Odoo Gold Partner · USA
              </span>
            </div>

            <h1 className="ks-h1" data-reveal style={{ opacity: 0, color: '#fff', animationDelay: '.1s' }}>
              Your Odoo ERP<br />
              <span className="ks-text-grad">Implementation</span><br />
              Partner in the USA
            </h1>

            <p data-reveal style={{ opacity: 0, fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.7)', marginBottom: 36, animationDelay: '.2s' }}>
              From manufacturing floors to professional services firms — Trilogiks delivers Odoo implementations that actually fit your business, with US-hours support and a team that speaks your language.
            </p>

            {/* Pills */}
            <div data-reveal style={{ opacity: 0, display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 40, animationDelay: '.3s' }}>
              {PILLS.map(p => (
                <span key={p.text} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '9px 16px', borderRadius: 999,
                  background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.13)',
                  color: 'rgba(255,255,255,.85)', fontSize: 13, fontWeight: 500,
                  backdropFilter: 'blur(8px)',
                }}>
                  <span>{p.icon}</span> {p.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div data-reveal style={{ opacity: 0, display: 'flex', gap: 14, flexWrap: 'wrap', animationDelay: '.4s' }}>
              <a href="#contact" className="ks-btn-primary" style={{ fontSize: 16, padding: '17px 32px' }}>
                Get Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#cases" className="ks-btn-ghost" style={{ fontSize: 16, padding: '17px 28px' }}>
                View Case Studies
              </a>
            </div>

            {/* Stats row */}
            <div data-reveal style={{ opacity: 0, display: 'flex', gap: 36, marginTop: 52, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,.1)', animationDelay: '.5s' }}>
              {[
                { val: 120, suffix: '+', label: 'Projects Delivered' },
                { val: 98, suffix: '%', label: 'Client Satisfaction' },
                { val: 6, suffix: ' yrs', label: 'Odoo Expertise' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 34, color: '#fff', lineHeight: 1.1 }}>
                    <span data-count={s.val} data-suffix={s.suffix}>{s.val + s.suffix}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard card */}
          <div ref={cardRef} style={{ transition: 'transform .2s ease' }}>
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 40px 80px -30px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.12)',
              padding: 28,
            }}>
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>Business Overview</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', background: 'rgba(255,255,255,.07)', borderRadius: 8, padding: '4px 10px' }}>Live Dashboard</span>
              </div>

              {/* Mini chart bars */}
              <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 80, marginBottom: 24 }}>
                {[55, 72, 48, 88, 65, 95, 78, 84, 91, 70, 86, 100].map((h, i) => (
                  <div key={i} style={{ flex: 1, borderRadius: '4px 4px 0 0', background: i === 11 ? 'linear-gradient(135deg,#0a78ff,#7c5cff)' : 'rgba(255,255,255,.15)', height: h + '%', transformOrigin: 'bottom', animation: `ksBar .8s ${i * .06}s both ease-out` }} />
                ))}
              </div>

              {/* Metric chips */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                {[
                  { label: 'Revenue Growth', val: '+34%', up: true },
                  { label: 'Process Efficiency', val: '+58%', up: true },
                  { label: 'Manual Tasks', val: '−72%', up: false },
                  { label: 'Data Accuracy', val: '99.4%', up: true },
                ].map(m => (
                  <div key={m.label} style={{ padding: '12px 14px', borderRadius: 12, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)' }}>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: m.up ? '#4ade80' : '#fb923c', fontFamily: "'Space Grotesk',sans-serif" }}>{m.val}</div>
                  </div>
                ))}
              </div>

              {/* Footer row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 12, background: 'rgba(10,108,255,.15)', border: '1px solid rgba(10,108,255,.25)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'ksDot 1.4s infinite', display: 'inline-block', flex: 'none' }} />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,.8)' }}>Automated with Odoo ERP — All systems synced</span>
              </div>
            </div>

            {/* Floating pills */}
            <div style={{ position: 'absolute', top: -18, right: -18, animation: 'ksFloat 6s ease-in-out infinite' }}>
              <div style={{ background: '#fff', borderRadius: 12, padding: '10px 16px', boxShadow: '0 20px 40px -10px rgba(10,108,255,.4)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600, color: '#0a1733', whiteSpace: 'nowrap' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', animation: 'ksDot 1.4s infinite', display: 'inline-block' }} />
                Go-live achieved on time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
