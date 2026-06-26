const PROBLEMS = [
  { icon: '🔀', title: 'Disconnected systems', desc: 'Accounting, inventory, CRM and HR live in separate tools that never talk to each other — creating chaos, duplicate data and wasted hours.' },
  { icon: '📊', title: 'Zero real-time visibility', desc: 'By the time leadership pulls a report, it\'s already outdated. Decisions are made on gut feel instead of live numbers.' },
  { icon: '🔄', title: 'Painful manual processes', desc: 'Spreadsheets, copy-paste, and manual approvals slow your team down and introduce costly errors at scale.' },
  { icon: '📈', title: 'Growth is breaking things', desc: 'The systems that worked at 10 employees are crumbling at 50. You need infrastructure that scales with you.' },
]

export default function ProblemSection() {
  return (
    <section className="ks-section" style={{ background: '#fff' }}>
      <div className="ks-container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>The Problem</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>
            Sound familiar?
          </h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7 }}>
            Most growing US businesses hit a wall with their tech stack. Here's what we hear every week:
          </p>
        </div>

        <div className="ks-prob-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
          {PROBLEMS.map((p, i) => (
            <div key={i} className="ks-card" data-reveal style={{ opacity: 0, animationDelay: `${i * .1}s`, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 32, flex: 'none' }}>{p.icon}</div>
              <div>
                <h3 className="ks-h3">{p.title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, color: '#5a6a8a', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div data-reveal style={{ opacity: 0, marginTop: 52, padding: '32px 36px', borderRadius: 20, background: 'linear-gradient(135deg,#0a1f4a,#0a52e0)', color: '#fff', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ margin: 0, fontSize: 18, fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1.4 }}>
              Odoo unifies it all — and Trilogiks makes sure it actually works for YOUR business.
            </p>
          </div>
          <a href="#contact" className="ks-btn-white">
            Let's Fix This
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
