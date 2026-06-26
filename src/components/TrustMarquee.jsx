const LOGOS = [
  'Odoo Gold Partner', 'ISO 27001 Ready', 'US-Based Team', 'GDPR Compliant',
  '120+ Implementations', '98% CSAT', '6+ Years Expertise', 'Certified Consultants',
]

export default function TrustMarquee() {
  const items = [...LOGOS, ...LOGOS]
  return (
    <div style={{ background: '#f8faff', borderTop: '1px solid #e7edf6', borderBottom: '1px solid #e7edf6', padding: '18px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'ksMarquee 28s linear infinite' }}>
        {items.map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 36px', whiteSpace: 'nowrap' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--ks-accent)', display: 'inline-block', opacity: .7 }} />
            <span style={{ fontSize: 13.5, fontWeight: 600, color: '#3a4768', letterSpacing: '.06em', textTransform: 'uppercase' }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
