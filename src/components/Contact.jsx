import { useForm, ValidationError } from '@formspree/react'

// ─── Replace with your Google Calendar Appointment Scheduling URL ─────────────
// 1. Open Google Calendar → "Appointment schedules" → Create → Publish
// 2. Copy the booking page URL and paste it below
const GCAL_URL = 'https://calendar.app.google/aqAHZsNKxYfth7M99'

const INFO = [
  { icon: '📧', label: 'Email',          val: 'contact@trilogiks.com',                  href: 'mailto:contact@trilogiks.com' },
  { icon: '📞', label: 'Phone',          val: '+1 (386) 205-7927',                       href: 'tel:+13862057927' },
  { icon: '📍', label: 'Address',        val: '30 N Gould St # 43826\nSheridan, WY 82801', href: 'https://maps.google.com/?q=30+N+Gould+St+Sheridan+WY+82801' },
  { icon: '🕐', label: 'Business Hours', val: 'Mon–Fri, 9 AM – 6 PM CT',                 href: null },
]

export default function Contact() {
  const [state, handleSubmit] = useForm('xojodzaq')

  return (
    <section id="contact" className="ks-section" style={{ background: '#f8faff' }}>
      <div className="ks-container">
        <div className="ks-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* ── Left info column ── */}
          <div>
            <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>Get In Touch</span>
            <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>Let's talk about your Odoo project</h2>
            <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7, marginBottom: 28 }}>
              Fill out the form and a senior Odoo consultant will reach out within 2 business hours to schedule your free discovery call.
            </p>

            {/* Google Calendar CTA */}
            <div data-reveal style={{ opacity: 0, marginBottom: 32 }}>
              <a
                href={GCAL_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '13px 22px', borderRadius: 999,
                  background: 'linear-gradient(135deg,#0a78ff,#0a52e0)',
                  color: '#fff', fontWeight: 700, fontSize: 14.5,
                  textDecoration: 'none',
                  boxShadow: '0 10px 28px -8px rgba(10,108,255,.5)',
                  transition: 'transform .2s, box-shadow .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 32px -8px rgba(10,108,255,.6)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 28px -8px rgba(10,108,255,.5)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book a Discovery Call — Free
              </a>
              <p style={{ margin: '8px 0 0', fontSize: 12.5, color: '#9aabcc' }}>
                Pick a time that works for you · No commitment
              </p>
            </div>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} data-reveal>
              {INFO.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(10,108,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flex: 'none' }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#9aabcc', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 2 }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ fontSize: 14.5, color: '#0a1733', fontWeight: 600, whiteSpace: 'pre-line' }}>{c.val}</a>
                    ) : (
                      <span style={{ fontSize: 14.5, color: '#0a1733', fontWeight: 600 }}>{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn */}
            <div data-reveal style={{ opacity: 0, marginTop: 28, paddingTop: 24, borderTop: '1px solid #e7edf6' }}>
              <p style={{ fontSize: 13, color: '#9aabcc', margin: '0 0 12px' }}>Follow us</p>
              <a
                href="https://www.linkedin.com/company/trilogiks378/?viewAsMember=true"
                target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '9px 16px', borderRadius: 10,
                  background: 'rgba(10,102,194,.08)', border: '1px solid rgba(10,102,194,.2)',
                  color: '#0a66c2', fontWeight: 600, fontSize: 13.5, textDecoration: 'none',
                  transition: 'background .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,102,194,.14)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,102,194,.08)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Trilogiks on LinkedIn
              </a>
            </div>
          </div>

          {/* ── Form column ── */}
          <div className="ks-card" data-reveal style={{ opacity: 0 }}>
            {state.succeeded ? (
              <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                <div style={{ fontSize: 60, marginBottom: 18 }}>✅</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 22, color: '#0a1733', marginBottom: 10 }}>Message received!</h3>
                <p style={{ color: '#5a6a8a', fontSize: 15, marginBottom: 24 }}>We'll reach out within 2 business hours.</p>
                <a href={GCAL_URL} target="_blank" rel="noreferrer" className="ks-btn-primary" style={{ display: 'inline-flex' }}>
                  Also book a call now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: '#0a1733', margin: '0 0 6px' }}>
                  Free Consultation Request
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input id="name" type="text" name="name" required placeholder="John Smith" style={inputStyle} />
                    <ValidationError field="name" prefix="Name" errors={state.errors} style={errStyle} />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Work Email *</label>
                    <input id="email" type="email" name="email" required placeholder="john@company.com" style={inputStyle} />
                    <ValidationError field="email" prefix="Email" errors={state.errors} style={errStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company *</label>
                    <input id="company" type="text" name="company" required placeholder="Acme Corp" style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input id="phone" type="tel" name="phone" placeholder="+1 (555) 000-0000" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label htmlFor="services" style={labelStyle}>Service Interest</label>
                  <select id="services" name="services" style={inputStyle}>
                    <option value="">Select a service…</option>
                    <option>Odoo Implementation</option>
                    <option>Customization &amp; Development</option>
                    <option>Third-Party Integrations (QuickBooks, Shopify…)</option>
                    <option>Migration / Upgrade</option>
                    <option>SaaS White-label Deployment</option>
                    <option>AI &amp; Automation Solutions</option>
                    <option>Support &amp; Managed Services</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Tell us about your project *</label>
                  <textarea
                    id="message" name="message" required rows={4}
                    placeholder="What systems are you using today? What problems are you trying to solve?"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} style={errStyle} />
                </div>

                {/* Form-level errors */}
                <ValidationError errors={state.errors} style={errStyle} />

                <button
                  type="submit"
                  className="ks-btn-primary"
                  disabled={state.submitting}
                  style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: 15.5 }}
                >
                  {state.submitting ? 'Sending…' : 'Request Free Consultation'}
                  {!state.submitting && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  )}
                </button>

                <p style={{ fontSize: 12, color: '#9aabcc', textAlign: 'center', margin: 0 }}>
                  🔒 Your info is secure. We never share or sell your data.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

const labelStyle = { fontSize: 13, fontWeight: 600, color: '#3a4768', display: 'block', marginBottom: 6 }

const inputStyle = {
  width: '100%', padding: '12px 14px', borderRadius: 10,
  border: '1.5px solid #e2e8f0', background: '#fafbff',
  fontSize: 14, color: '#0a1733', outline: 'none',
  fontFamily: 'inherit', transition: 'border-color .2s ease',
  boxSizing: 'border-box',
}

const errStyle = { fontSize: 12, color: '#e05252', marginTop: 4, display: 'block' }
