import { useState } from 'react'

const SERVICES = [
  {
    icon: '🚀',
    title: 'Odoo Implementation',
    tag: 'Most Popular',
    desc: 'Full-cycle Odoo deployment scoped for your business. We handle requirements gathering, configuration, data migration, testing, and go-live — on time and on budget.',
    bullets: ['Requirements & gap analysis', 'Module configuration', 'Data migration', 'User training & change management', 'Post-launch hypercare'],
  },
  {
    icon: '⚙️',
    title: 'Customization & Development',
    desc: 'Need Odoo to match a unique process? Our Python/OWL developers build custom modules, workflows, and integrations that extend Odoo\'s power for your specific use case.',
    bullets: ['Custom module development', 'Workflow automation', 'Report & dashboard builds', 'API integrations', 'UI/UX customizations'],
  },
  {
    icon: '🔗',
    title: 'Third-Party Integrations',
    desc: 'Connect Odoo with your existing tools — Shopify, QuickBooks, Salesforce, shipping carriers, payment gateways, and more — for a truly unified data flow.',
    bullets: ['E-commerce (Shopify, WooCommerce)', 'Payment gateways', 'Shipping & logistics APIs', 'CRM & marketing tools', 'Custom REST/GraphQL integrations'],
  },
  {
    icon: '☁️',
    title: 'Odoo Migration & Upgrades',
    desc: 'Moving from an older Odoo version or another ERP? We manage the full migration process, ensuring zero data loss and minimal downtime.',
    bullets: ['Version upgrade (v14 → v17)', 'ERP-to-Odoo migration', 'Data cleansing & transformation', 'Parallel-run testing', 'Rollback planning'],
  },
  {
    icon: '🛡️',
    title: 'Support & Managed Services',
    desc: 'After go-live, we stay with you. Monthly support retainers that include bug fixes, optimizations, user helpdesk, and proactive health checks.',
    bullets: ['Bug fixes & patches', 'Performance optimization', 'User helpdesk (US hours)', 'Monthly health reports', 'Feature roadmap consulting'],
  },
  {
    icon: '📋',
    title: 'Odoo Audit & Rescue',
    desc: 'Already on Odoo but things aren\'t working right? We audit your existing setup, identify what\'s broken, and build a remediation plan — fast.',
    bullets: ['Full system audit', 'Performance bottleneck analysis', 'Data integrity review', 'Security configuration check', 'Remediation roadmap'],
  },
]

export default function ServicesExplorer() {
  const [active, setActive] = useState(0)
  const svc = SERVICES[active]

  return (
    <section id="services" className="ks-section" style={{ background: '#f8faff' }}>
      <div className="ks-container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>What We Do</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>Services built for US businesses</h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7 }}>
            End-to-end Odoo services from initial scoping through long-term support.
          </p>
        </div>

        <div className="ks-svc-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,280px) 1fr', gap: 24, alignItems: 'start' }}>
          {/* Sidebar tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {SERVICES.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 18px', borderRadius: 14, border: 'none', cursor: 'pointer', textAlign: 'left',
                background: active === i ? 'linear-gradient(135deg,#0a78ff,#0a52e0)' : '#fff',
                color: active === i ? '#fff' : '#3a4768',
                fontWeight: active === i ? 700 : 500,
                boxShadow: active === i ? '0 16px 36px -10px rgba(10,108,255,.45)' : '0 2px 8px -2px rgba(10,30,80,.07)',
                transition: 'all .25s ease',
                fontSize: 14,
              }}>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <span>{s.title}</span>
                {s.tag && (
                  <span style={{ marginLeft: 'auto', fontSize: 10, padding: '2px 7px', borderRadius: 999, background: active === i ? 'rgba(255,255,255,.2)' : 'rgba(10,108,255,.1)', color: active === i ? '#fff' : 'var(--ks-accent)', fontWeight: 700, whiteSpace: 'nowrap' }}>{s.tag}</span>
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="ks-card" style={{ minHeight: 360 }} key={active}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 24 }}>
              <div className="ks-icon-box" style={{ fontSize: 26, width: 60, height: 60, borderRadius: 16 }}>{svc.icon}</div>
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 22, margin: '0 0 8px', color: '#0a1733' }}>{svc.title}</h3>
                <p style={{ margin: 0, fontSize: 15.5, color: '#5a6a8a', lineHeight: 1.7 }}>{svc.desc}</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
              {svc.bullets.map((b, i) => (
                <div key={i} className="ks-check-item" style={{ background: '#f8faff', padding: '12px 14px', borderRadius: 10 }}>
                  <span className="ks-check-box">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span style={{ fontSize: 13.5, color: '#3a4768', fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="ks-btn-primary" style={{ marginTop: 28 }}>
              Discuss This Service
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
