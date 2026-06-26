import { useState, useEffect } from 'react'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
        transition: 'background .3s ease, backdrop-filter .3s ease, border-color .3s ease, box-shadow .3s ease',
        background: scrolled ? 'rgba(255,255,255,.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(10,23,60,.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 6px 30px -8px rgba(10,23,60,.12)' : 'none',
      }}>
        <div className="ks-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/assets/img/logo.png" alt="Trilogiks" style={{ height: 36 }} onError={e => e.target.style.display='none'} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: scrolled ? '#0a1733' : '#fff', letterSpacing: '-.02em', transition: 'color .3s' }}>
              Trilogiks
            </span>
          </a>

          {/* Nav links */}
          <nav className="ks-nav-links" style={{ display: 'flex', gap: 6 }}>
            {NAV.map(n => (
              <a key={n.label} href={n.href} style={{
                padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                color: scrolled ? '#3a4768' : 'rgba(255,255,255,.85)',
                transition: 'color .2s, background .2s',
              }}
              onMouseEnter={e => { e.target.style.color = scrolled ? '#0a78ff' : '#fff'; e.target.style.background = scrolled ? 'rgba(10,120,255,.07)' : 'rgba(255,255,255,.1)' }}
              onMouseLeave={e => { e.target.style.color = scrolled ? '#3a4768' : 'rgba(255,255,255,.85)'; e.target.style.background = 'transparent' }}
              >{n.label}</a>
            ))}
          </nav>

          {/* CTA */}
          <div className="ks-nav-cta" style={{ display: 'flex', gap: 10 }}>
            <a href="#contact" className="ks-btn-primary" style={{ padding: '11px 22px', fontSize: 14 }}>
              Free Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          {/* Burger */}
          <button className="ks-burger" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: 'none', border: 'none', background: 'transparent',
            flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 6,
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2, borderRadius: 2,
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
        position: 'fixed', top: 72, left: 0, right: 0, zIndex: 59,
        background: 'rgba(255,255,255,.97)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid #e7edf6',
        padding: menuOpen ? '20px 24px 28px' : '0 24px',
        maxHeight: menuOpen ? '420px' : '0',
        overflow: 'hidden',
        transition: 'max-height .35s ease, padding .35s ease',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)} style={{
              padding: '12px 14px', borderRadius: 10, fontSize: 15, fontWeight: 500,
              color: '#3a4768', borderBottom: '1px solid #f2f4f8',
            }}>{n.label}</a>
          ))}
          <a href="#contact" className="ks-btn-primary" style={{ marginTop: 14, justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
            Free Consultation
          </a>
        </nav>
      </div>
    </>
  )
}
