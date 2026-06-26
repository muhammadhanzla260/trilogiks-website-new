import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', services: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    // Replace with your form endpoint
    setSent(true)
  }

  return (
    <section id="contact" className="ks-section" style={{ background: '#f8faff' }}>
      <div className="ks-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="ks-grid-2">

          {/* Left info */}
          <div>
            <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>Get In Touch</span>
            <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>Let's talk about your Odoo project</h2>
            <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7, marginBottom: 36 }}>
              Fill out the form and a senior Odoo consultant will reach out within 2 business hours to schedule your free discovery call.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} data-reveal>
              {[
                { icon: '📧', label: 'Email', val: 'hello@trilogiks.com', href: 'mailto:hello@trilogiks.com' },
                { icon: '📞', label: 'Phone', val: '+1 (800) TRI-LOGIK', href: 'tel:+18008754644' },
                { icon: '📍', label: 'Location', val: 'United States (Remote-first)', href: null },
                { icon: '🕐', label: 'Business Hours', val: 'Mon–Fri, 8 AM – 6 PM EST', href: null },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(10,108,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flex: 'none' }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#9aabcc', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 2 }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: 15, color: '#0a1733', fontWeight: 600 }}>{c.val}</a>
                    ) : (
                      <span style={{ fontSize: 15, color: '#0a1733', fontWeight: 600 }}>{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="ks-card" data-reveal style={{ opacity: 0 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 22, color: '#0a1733', marginBottom: 10 }}>Message received!</h3>
                <p style={{ color: '#5a6a8a', fontSize: 15 }}>We'll reach out within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: '#0a1733', margin: '0 0 8px' }}>Free Consultation Request</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#3a4768', display: 'block', marginBottom: 6 }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#3a4768', display: 'block', marginBottom: 6 }}>Work Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#3a4768', display: 'block', marginBottom: 6 }}>Company *</label>
                    <input name="company" value={form.company} onChange={handleChange} required placeholder="Acme Corp" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#3a4768', display: 'block', marginBottom: 6 }}>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#3a4768', display: 'block', marginBottom: 6 }}>Service Interest</label>
                  <select name="services" value={form.services} onChange={handleChange} style={inputStyle}>
                    <option value="">Select a service…</option>
                    <option>Odoo Implementation</option>
                    <option>Customization & Development</option>
                    <option>Third-Party Integrations</option>
                    <option>Migration / Upgrade</option>
                    <option>Support & Managed Services</option>
                    <option>Odoo Audit & Rescue</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#3a4768', display: 'block', marginBottom: 6 }}>Tell us about your project *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required placeholder="What systems are you using today? What problems are you trying to solve?" rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }} />
                </div>
                <button type="submit" className="ks-btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: 15.5 }}>
                  Request Free Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
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

const inputStyle = {
  width: '100%', padding: '12px 14px', borderRadius: 10,
  border: '1.5px solid #e2e8f0', background: '#fafbff',
  fontSize: 14, color: '#0a1733', outline: 'none',
  fontFamily: 'inherit', transition: 'border-color .2s ease',
}
