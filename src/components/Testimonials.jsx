const TESTIMONIALS = [
  {
    avatar: '/assets/avatar/a1.webp',
    name: 'Sarah Mitchell',
    title: 'COO, NovaTech Manufacturing',
    quote: 'Trilogiks delivered our Odoo implementation in 8 weeks — on time and on budget. Their team understood manufacturing workflows better than any partner we\'d spoken to. The ROI was visible within the first quarter.',
    stars: 5,
  },
  {
    avatar: '/assets/avatar/a2.webp',
    name: 'James Rodriguez',
    title: 'CEO, PacificEdge Commerce',
    quote: 'We were skeptical after a failed ERP project with another vendor. Trilogiks completely restored our faith. Their project management is tight, their developers are skilled, and their post-launch support is genuinely excellent.',
    stars: 5,
  },
  {
    avatar: '/assets/avatar/a3.webp',
    name: 'Emily Chen',
    title: 'CFO, Apex Professional Services',
    quote: 'Real-time project profitability was a pipe dream before Odoo. Now our leadership team reviews live P&L per engagement every morning. The 11 hours per week our PMs saved paid for the project in four months.',
    stars: 5,
  },
]

const Stars = ({ n }) => (
  <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
    {Array.from({ length: n }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section className="ks-section" style={{ background: '#f8faff' }}>
      <div className="ks-container">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>Client Stories</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>Don't take our word for it</h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7 }}>
            Here's what executives at US companies say after working with Trilogiks.
          </p>
        </div>

        <div className="ks-grid-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="ks-card" data-reveal style={{ opacity: 0, animationDelay: `${i * .1}s`, position: 'relative' }}>
              {/* Quote mark */}
              <div style={{ position: 'absolute', top: 20, right: 24, fontSize: 64, lineHeight: 1, color: 'rgba(10,108,255,.08)', fontFamily: 'Georgia,serif', pointerEvents: 'none' }}>&ldquo;</div>

              <Stars n={t.stars} />
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#3a4768', marginBottom: 24, fontStyle: 'italic' }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid #f0f3fa', paddingTop: 18 }}>
                <img src={t.avatar} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', background: '#e7edf6' }} onError={e => { e.target.style.display='none' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14.5, color: '#0a1733' }}>{t.name}</div>
                  <div style={{ fontSize: 12.5, color: '#7a8aaa' }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
