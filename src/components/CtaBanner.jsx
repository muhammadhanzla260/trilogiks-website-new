export default function CtaBanner() {
  return (
    <section className="ks-section-sm" style={{ background: '#fff' }}>
      <div className="ks-container">
        <div className="ks-cta-pad" style={{
          borderRadius: 28, padding: '72px 56px', textAlign: 'center',
          background: 'linear-gradient(140deg,#030c1f 0%,#0a2a70 50%,#0a52e0 100%)',
          position: 'relative', overflow: 'hidden', clipPath: 'inset(0 round 28px)',
        }}>
          <div className="ks-aurora" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(124,92,255,.3) 0%, transparent 65%), radial-gradient(ellipse at 20% 70%, rgba(10,108,255,.25) 0%, transparent 60%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span data-reveal style={{ opacity: 0, display: 'inline-block', padding: '7px 18px', borderRadius: 999, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.18)', color: 'rgba(255,255,255,.85)', fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
              No commitment required
            </span>
            <h2 data-reveal style={{ opacity: 0, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              Ready to transform your operations<br />with Odoo?
            </h2>
            <p data-reveal style={{ opacity: 0, fontSize: 17, color: 'rgba(255,255,255,.7)', marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
              Book a free 60-minute consultation with a senior Odoo consultant. We'll assess your current setup and map a path to a unified, automated business.
            </p>
            <div data-reveal style={{ opacity: 0, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="ks-btn-white" style={{ fontSize: 16, padding: '18px 36px' }}>
                Book Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="tel:+13862057927" className="ks-btn-ghost" style={{ fontSize: 16, padding: '18px 28px' }}>
                📞 +1 (386) 205-7927
              </a>
            </div>
            <p data-reveal style={{ opacity: 0, marginTop: 28, fontSize: 13, color: 'rgba(255,255,255,.45)' }}>
              Typically respond within 2 business hours · US-based team · No obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
