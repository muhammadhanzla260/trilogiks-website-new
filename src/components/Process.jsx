const STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We start with a free 60-minute discovery call to understand your business, pain points, and goals. No sales pitch — just listening.' },
  { num: '02', title: 'Scoping & Proposal', desc: 'Our team produces a detailed scope of work with module recommendations, timeline, and a fixed-price proposal. No surprises.' },
  { num: '03', title: 'Configuration & Build', desc: 'We configure Odoo to your workflows, build any custom modules needed, and run internal QA before you see anything.' },
  { num: '04', title: 'UAT & Training', desc: 'You and your team test everything in a staging environment. We run role-specific training sessions so everyone is confident on day one.' },
  { num: '05', title: 'Go-Live', desc: 'We flip the switch with you present. Our team stays on standby for the first 48 hours to handle anything that comes up.' },
  { num: '06', title: 'Ongoing Support', desc: 'Post-launch, you\'re covered by our support retainer — bug fixes, optimizations, new feature requests, and a helpdesk that answers.' },
]

export default function Process() {
  return (
    <section className="ks-section" style={{ background: '#fff' }}>
      <div className="ks-container">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>Our Process</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>From kickoff to go-live — and beyond</h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7 }}>
            A proven 6-step process refined across 120+ implementations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="ks-grid-3">
          {STEPS.map((s, i) => (
            <div key={i} data-reveal style={{ opacity: 0, animationDelay: `${i * .09}s`, position: 'relative' }}>
              {/* Connector line */}
              {i % 3 !== 2 && (
                <div style={{ position: 'absolute', top: 22, left: '50%', right: '-50%', height: 2, background: 'linear-gradient(90deg,var(--ks-accent),transparent)', opacity: .3, zIndex: 0 }} className="ks-hide-mobile" />
              )}
              <div className="ks-card" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: 'var(--ks-grad)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: '#fff',
                  marginBottom: 16, boxShadow: '0 12px 24px -8px var(--ks-glow-1)',
                }}>{s.num}</div>
                <h3 className="ks-h3">{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: '#5a6a8a', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }} data-reveal>
          <a href="#contact" className="ks-btn-primary" style={{ fontSize: 16, padding: '17px 36px' }}>
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
