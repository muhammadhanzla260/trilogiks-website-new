const STATS = [
  { val: 120, suffix: '+', label: 'Implementations', prefix: '' },
  { val: 98, suffix: '%', label: 'Client Satisfaction', prefix: '' },
  { val: 6, suffix: '+', label: 'Years as Odoo Partner', prefix: '' },
  { val: 40, suffix: '+', label: 'Certified Consultants', prefix: '' },
]

export default function StatsBand() {
  return (
    <section className="ks-section-sm" style={{ position: 'relative', overflow: 'hidden', clipPath: 'inset(0)', background: 'linear-gradient(135deg,#0a1f4a 0%,#0a52e0 100%)' }}>
      <div className="ks-aurora" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,92,255,.3) 0%, transparent 70%)' }} />

      <div className="ks-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="ks-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
          {STATS.map((s, i) => (
            <div key={i} data-reveal style={{ opacity: 0, animationDelay: `${i * .1}s` }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 52, color: '#fff', lineHeight: 1, marginBottom: 8 }}>
                <span data-count={s.val} data-suffix={s.suffix} data-prefix={s.prefix}>{s.prefix + s.val + s.suffix}</span>
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', letterSpacing: '.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
