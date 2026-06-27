const REASONS = [
  { icon: '🇺🇸', title: 'US-Based Team & Support', desc: 'Our consultants are based in the US, work your hours, and understand the compliance, tax, and business nuances specific to American companies.' },
  { icon: '🏆', title: 'Certified Odoo Experts', desc: 'Every team member carries official Odoo certification. We don\'t send juniors to learn on your dime — you get senior-level consultants from day one.' },
  { icon: '⚡', title: 'Go Live in 6–10 Weeks', desc: 'Our proven rapid-deployment methodology gets you live fast without cutting corners. We\'ve done it 120+ times.' },
  { icon: '🔧', title: 'Industry-Fit Configuration', desc: 'We don\'t use generic templates. Every implementation is tailored to your industry\'s workflows, KPIs, and compliance requirements.' },
  { icon: '📞', title: 'Dedicated Account Manager', desc: 'One point of contact who knows your business. No ticket queues, no call centers — just a real person who picks up the phone.' },
  { icon: '📊', title: 'ROI-First Approach', desc: 'We scope every project around measurable business outcomes: faster close cycles, lower manual overhead, better inventory turns. Not just "modules installed."' },
]

export default function WhyTrilogiks() {
  return (
    <section id="why" className="ks-section" style={{ position: 'relative', overflow: 'hidden', clipPath: 'inset(0)', background: 'linear-gradient(145deg,#030c1f 0%,#061538 55%,#0a1f4a 100%)' }}>
      {/* Aurora */}
      <div className="ks-aurora" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(124,92,255,.22) 0%, transparent 65%), radial-gradient(ellipse at 20% 70%, rgba(10,108,255,.18) 0%, transparent 60%)' }} />

      <div className="ks-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: '#7bb8ff' }}>Why Trilogiks</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0, color: '#fff' }}>
            What makes us different
          </h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>
            There are lots of Odoo partners. Here's why US businesses keep choosing us.
          </p>
        </div>

        <div className="ks-grid-3">
          {REASONS.map((r, i) => (
            <div key={i} className="ks-card-dark" data-reveal style={{ opacity: 0, animationDelay: `${i * .08}s` }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{r.icon}</div>
              <h3 className="ks-h3" style={{ color: '#fff', marginBottom: 10 }}>{r.title}</h3>
              <p style={{ margin: 0, fontSize: 14.5, color: 'rgba(255,255,255,.6)', lineHeight: 1.65 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
