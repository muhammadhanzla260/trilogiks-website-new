const INDUSTRIES = [
  { icon: '🏭', title: 'Manufacturing', desc: 'MRP, production planning, inventory, quality control — Odoo handles the shop floor and the back office.' },
  { icon: '🛒', title: 'E-Commerce & Retail', desc: 'Sync Shopify or WooCommerce with inventory, fulfillment, accounting, and CRM in real time.' },
  { icon: '🏥', title: 'Professional Services', desc: 'Project tracking, timesheets, invoicing, and resource planning in one connected platform.' },
  { icon: '🏗️', title: 'Construction & Field Services', desc: 'Job costing, scheduling, subcontractor management, and mobile field crew tools.' },
  { icon: '🌿', title: 'Food & Beverage', desc: 'Recipe management, lot/batch traceability, FSMA compliance, and distribution routes.' },
  { icon: '🏢', title: 'Distribution & Wholesale', desc: 'Multi-warehouse inventory, purchase order automation, landed costs, and vendor portals.' },
]

export default function Industries() {
  return (
    <section id="industries" className="ks-section" style={{ background: '#f8faff' }}>
      <div className="ks-container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
          <span className="ks-tag" data-reveal style={{ opacity: 0, color: 'var(--ks-accent)' }}>Industries We Serve</span>
          <h2 className="ks-h2" data-reveal style={{ opacity: 0 }}>We know your industry's workflows</h2>
          <p data-reveal style={{ opacity: 0, fontSize: 17, color: '#5a6a8a', lineHeight: 1.7 }}>
            Trilogiks has deep expertise across the industries US mid-market companies operate in.
          </p>
        </div>

        <div className="ks-grid-3">
          {INDUSTRIES.map((ind, i) => (
            <div key={i} className="ks-card" data-reveal style={{ opacity: 0, animationDelay: `${i * .08}s` }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>{ind.icon}</div>
              <h3 className="ks-h3">{ind.title}</h3>
              <p style={{ margin: 0, fontSize: 14.5, color: '#5a6a8a', lineHeight: 1.65 }}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <p data-reveal style={{ opacity: 0, textAlign: 'center', marginTop: 40, color: '#5a6a8a', fontSize: 15 }}>
          Don't see your industry? <a href="#contact" style={{ color: 'var(--ks-accent)', fontWeight: 600 }}>Let's talk</a> — we've likely worked in it.
        </p>
      </div>
    </section>
  )
}
