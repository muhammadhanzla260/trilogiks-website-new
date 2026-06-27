function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fmark-g" x1="36" y1="0" x2="36" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5fc3ff" />
          <stop offset="55%" stopColor="#2a8fff" />
          <stop offset="100%" stopColor="#0a3fcf" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="10" r="5.5" stroke="url(#fmark-g)" strokeWidth="2.8" fill="none" />
      <circle cx="36" cy="5"  r="5.5" stroke="url(#fmark-g)" strokeWidth="2.8" fill="none" />
      <circle cx="58" cy="10" r="5.5" stroke="url(#fmark-g)" strokeWidth="2.8" fill="none" />
      <line x1="14" y1="15.5" x2="14" y2="40" stroke="url(#fmark-g)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="36" y1="10.5" x2="36" y2="40" stroke="url(#fmark-g)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="58" y1="15.5" x2="58" y2="40" stroke="url(#fmark-g)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="14" y1="40" x2="58" y2="40" stroke="url(#fmark-g)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="14" y1="40" x2="36" y2="74" stroke="url(#fmark-g)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="58" y1="40" x2="36" y2="74" stroke="url(#fmark-g)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="36" y1="40" x2="36" y2="74" stroke="url(#fmark-g)" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  )
}

const LINKS = {
  Services: [
    { label: 'Odoo Implementation', href: '#services' },
    { label: 'Customization & Dev', href: '#services' },
    { label: 'Third-Party Integrations', href: '#services' },
    { label: 'Migration & Upgrades', href: '#services' },
    { label: 'Support Retainers', href: '#services' },
    { label: 'Odoo Audit', href: '#services' },
  ],
  Company: [
    { label: 'Why Trilogiks', href: '#why' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  Compare: [
    { label: 'Odoo vs QuickBooks', href: '#contact' },
    { label: 'Odoo vs NetSuite', href: '#contact' },
    { label: 'Odoo vs SAP', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#030c1f', color: 'rgba(255,255,255,.75)', paddingTop: 64, paddingBottom: 36 }}>
      <div className="ks-container">
        <div className="ks-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>

          {/* Brand column */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, textDecoration: 'none' }}>
              <LogoMark size={36} />
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 17, color: '#fff', letterSpacing: '-.01em' }}>TRILOGIKS</div>
                <div style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: '.16em', color: 'rgba(100,180,255,.7)', marginTop: 2 }}>ENGINEERING SYSTEMS</div>
              </div>
            </a>

            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,.5)', maxWidth: 280, margin: '0 0 20px' }}>
              US-based Odoo partner helping businesses unify operations with ERP that actually works.
            </p>

            {/* Contact quick-links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              <a href="mailto:contact@trilogiks.com" style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)', display: 'flex', alignItems: 'center', gap: 7, transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}
              >
                <span>📧</span> contact@trilogiks.com
              </a>
              <a href="tel:+13862057927" style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)', display: 'flex', alignItems: 'center', gap: 7, transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}
              >
                <span>📞</span> +1 (386) 205-7927
              </a>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                <span>📍</span>
                <span>30 N Gould St # 43826<br />Sheridan, WY 82801</span>
              </span>
            </div>

            {/* LinkedIn only */}
            <a
              href="https://www.linkedin.com/company/trilogiks378/?viewAsMember=true"
              target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '8px 14px', borderRadius: 10,
                background: 'rgba(10,102,194,.15)', border: '1px solid rgba(10,102,194,.3)',
                color: '#5b9bd5', fontSize: 13, fontWeight: 600, textDecoration: 'none',
                transition: 'background .2s, border-color .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(10,102,194,.28)'; e.currentTarget.style.borderColor='rgba(10,102,194,.5)' }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(10,102,194,.15)'; e.currentTarget.style.borderColor='rgba(10,102,194,.3)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#5b9bd5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([cat, links]) => (
            <div key={cat}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 14 }}>{cat}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)', transition: 'color .2s' }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.55)'}
                    >{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ margin: 0, fontSize: 12.5, color: 'rgba(255,255,255,.3)' }}>
            © {new Date().getFullYear()} Trilogiks, Inc. All rights reserved. · Sheridan, WY 82801
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12.5, color: 'rgba(255,255,255,.3)', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,.6)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.3)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
