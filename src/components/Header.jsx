import { useState, useEffect } from 'react'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

/* Inline SVG recreation of the Trilogiks circuit-board logo mark */
function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lmg" x1="36" y1="0" x2="36" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5fc3ff" />
          <stop offset="55%" stopColor="#2a8fff" />
          <stop offset="100%" stopColor="#0a3fcf" />
        </linearGradient>
      </defs>
      {/* Circle pads — left, middle (higher), right */}
      <circle cx="14" cy="10" r="5.5" stroke="url(#lmg)" strokeWidth="2.8" fill="none" />
      <circle cx="36" cy="5"  r="5.5" stroke="url(#lmg)" strokeWidth="2.8" fill="none" />
      <circle cx="58" cy="10" r="5.5" stroke="url(#lmg)" strokeWidth="2.8" fill="none" />
      {/* Vertical traces */}
      <line x1="14" y1="15.5" x2="14" y2="40" stroke="url(#lmg)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="36" y1="10.5" x2="36" y2="40" stroke="url(#lmg)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="58" y1="15.5" x2="58" y2="40" stroke="url(#lmg)" strokeWidth="2.8" strokeLinecap="round" />
      {/* Horizontal connector bar */}
      <line x1="14" y1="40" x2="58" y2="40" stroke="url(#lmg)" strokeWidth="2.8" strokeLinecap="round" />
      {/* Diagonal legs to bottom point */}
      <line x1="14" y1="40" x2="36" y2="74" stroke="url(#lmg)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="58" y1="40" x2="36" y2="74" stroke="url(#lmg)" strokeWidth="2.8" strokeLinecap="round" />
      {/* Centre trace continues to point */}
      <line x1="36" y1="40" x2="36" y2="74" stroke="url(#lmg)" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
        padding: '0',
        transition: 'background .35s ease, backdrop-filter .35s ease, box-shadow .35s ease, border-color .35s ease',
        background: scrolled
          ? 'rgba(255,255,255,.9)'
          : 'rgba(5,18,50,.35)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(10,30,80,.1)'
          : '1px solid rgba(255,255,255,.08)',
        boxShadow: scrolled
          ? '0 4px 32px -8px rgba(10,23,60,.14)'
          : 'none',
      }}>
        <div className="ks-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <LogoMark size={38} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 18,
                letterSpacing: '-.01em',
                color: scrolled ? '#0a1733' : '#fff',
                transition: 'color .3s ease',
              }}>
                TRILOGIKS
              </span>
              <span style={{
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: scrolled ? '#2a8fff' : 'rgba(100,180,255,.85)',
                transition: 'color .3s ease',
                marginTop: 2,
              }}>
                Engineering Systems
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="ks-nav-links" style={{ display: 'flex', gap: 2 }}>
            {NAV.map(n => (
              <a key={n.label} href={n.href} style={{
                padding: '8px 13px',
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 500,
                letterSpacing: '-.01em',
                color: scrolled ? '#3a4768' : 'rgba(255,255,255,.82)',
                transition: 'color .2s, background .2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#2a8fff'
                e.currentTarget.style.background = scrolled ? 'rgba(10,120,255,.07)' : 'rgba(255,255,255,.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = scrolled ? '#3a4768' : 'rgba(255,255,255,.82)'
                e.currentTarget.style.background = 'transparent'
              }}
              >{n.label}</a>
            ))}
          </nav>

          {/* CTA */}
          <div className="ks-nav-cta" style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 20px',
              borderRadius: 999,
              fontSize: 13.5, fontWeight: 700,
              letterSpacing: '.01em',
              transition: 'all .25s ease',
              ...(scrolled ? {
                background: 'linear-gradient(135deg,#0a78ff,#0a52e0)',
                color: '#fff',
                boxShadow: '0 8px 24px -8px rgba(10,108,255,.55)',
                border: 'none',
              } : {
                background: 'rgba(255,255,255,.12)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,.25)',
                boxShadow: 'none',
              }),
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 28px -8px rgba(10,108,255,.6)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = scrolled ? '0 8px 24px -8px rgba(10,108,255,.55)' : 'none' }}
            >
              Free Consultation
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          {/* Burger */}
          <button className="ks-burger" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: 'none', border: 'none', background: 'transparent',
            flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 8,
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2, borderRadius: 2,
                background: scrolled ? '#0a1733' : '#fff',
                transition: 'all .3s ease',
                ...(menuOpen && i === 0 ? { transform: 'translateY(7px) rotate(45deg)' } : {}),
                ...(menuOpen && i === 1 ? { opacity: 0 } : {}),
                ...(menuOpen && i === 2 ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}),
              }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 70, left: 0, right: 0, zIndex: 59,
        background: 'rgba(5,15,45,.97)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,.08)',
        padding: menuOpen ? '20px 24px 28px' : '0 24px',
        maxHeight: menuOpen ? '480px' : '0',
        overflow: 'hidden',
        transition: 'max-height .35s ease, padding .35s ease',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)} style={{
              padding: '13px 16px', borderRadius: 10, fontSize: 15, fontWeight: 500,
              color: 'rgba(255,255,255,.85)',
              borderBottom: '1px solid rgba(255,255,255,.06)',
            }}>{n.label}</a>
          ))}
          <a href="#contact" className="ks-btn-primary" style={{ marginTop: 16, justifyContent: 'center', display: 'flex' }} onClick={() => setMenuOpen(false)}>
            Free Consultation
          </a>
        </nav>
      </div>
    </>
  )
}
