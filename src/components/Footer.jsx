const LINKS = {
  Services: [
    { label: 'Odoo Implementation', href: '#services' },
    { label: 'Customization & Dev', href: '#services' },
    { label: 'Integrations', href: '#services' },
    { label: 'Migration & Upgrades', href: '#services' },
    { label: 'Support Retainers', href: '#services' },
    { label: 'Odoo Audit', href: '#services' },
  ],
  Company: [
    { label: 'About Trilogiks', href: '#why' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '#contact' },
  ],
  Compare: [
    { label: 'Odoo vs QuickBooks', href: '/compare/odoo-vs-quickbooks' },
    { label: 'Odoo vs NetSuite', href: '/compare/odoo-vs-netsuite' },
    { label: 'Odoo vs SAP', href: '/compare/odoo-vs-sap' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#030c1f', color: 'rgba(255,255,255,.75)', paddingTop: 72, paddingBottom: 40 }}>
      <div className="ks-container">
        <div className="ks-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 56 }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <img src="/assets/img/logo.png" alt="Trilogiks" style={{ height: 34 }} onError={e => e.target.style.display='none'} />
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: '#fff' }}>Trilogiks</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'rgba(255,255,255,.55)', maxWidth: 300, marginBottom: 24 }}>
              US-based Odoo Gold Partner helping mid-market businesses unify their operations with ERP that actually works.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: '𝕏', href: 'https://twitter.com/trilogiks' },
                { icon: 'in', href: 'https://linkedin.com/company/trilogiks', style: { fontFamily: 'serif', fontWeight: 700, fontSize: 13 } },
                { icon: '▶', href: 'https://youtube.com/@trilogiks' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,.7)', fontSize: 14, transition: 'background .2s, border-color .2s',
                  ...s.style,
                }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(10,108,255,.3)'; e.currentTarget.style.borderColor='rgba(10,108,255,.5)' }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,.1)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([cat, links]) => (
            <div key={cat}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>{cat}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', transition: 'color .2s' }}
                      onMouseEnter={e => e.target.style.color='#fff'}
                      onMouseLeave={e => e.target.style.color='rgba(255,255,255,.6)'}
                    >{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,.35)' }}>
            © {new Date().getFullYear()} Trilogiks, LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,.35)', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color='rgba(255,255,255,.7)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,.35)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
