import { Link } from 'react-router-dom'

const REASONS = [
  {
    num: '01',
    title: 'Rigorous Talent Vetting',
    desc: 'Every professional on our platform passes a multi-stage screening process — skills assessments, live interviews, background checks, and paid trial tasks. Less than 8% of applicants make it through.',
    detail: ['Multi-stage screening process', 'Skills tests & live interviews', 'Background & reference checks', 'Paid trial task before placement'],
  },
  {
    num: '02',
    title: 'Dedicated Account Manager',
    desc: 'You get a single point of contact who knows your business inside out. Your AM handles all team communications, performance reviews, and escalations on your behalf.',
    detail: ['Single point of contact', 'Manages team communications', 'Handles performance reviews', 'Available across your timezone'],
  },
  {
    num: '03',
    title: 'Transparent Pricing',
    desc: 'No hidden fees, no surprise invoices. Clear contracts, predictable billing, and flexible pricing tiers designed to match your budget and scale as you grow.',
    detail: ['No hidden fees ever', 'Clear monthly contracts', 'Flexible pricing tiers', 'Scale up or down anytime'],
  },
  {
    num: '04',
    title: 'Rapid Onboarding',
    desc: 'Most clients have their outsourced team up and running within 5–7 business days. We handle all onboarding, tooling, and orientation so your team hits the ground running.',
    detail: ['5–7 day average onboarding', 'Full tooling setup included', 'Structured orientation program', 'No delays, no downtime'],
  },
  {
    num: '05',
    title: 'Built-In Quality Assurance',
    desc: 'Performance reviews, KPI dashboards, time-tracking, and weekly reporting keep your team accountable and continuously improving. You always know exactly what you\'re getting.',
    detail: ['Weekly KPI reports', 'Live time-tracking dashboards', 'Monthly performance reviews', 'Continuous improvement cycle'],
  },
  {
    num: '06',
    title: 'Fully Scalable & Flexible',
    desc: 'Scale your team up or down as your business needs change. Add roles, adjust hours, or pause services with 30 days notice. No long lock-in contracts, no penalties.',
    detail: ['30-day scale up/down notice', 'Add roles at any time', 'Pause or resume services', 'No long lock-in contracts'],
  },
]

const COMPARE = [
  { feature: 'Talent Vetting', sourcenest: 'Multi-stage, <8% pass rate', others: 'Basic screening' },
  { feature: 'Account Manager', sourcenest: 'Dedicated AM per client', others: 'Shared support team' },
  { feature: 'Onboarding Time', sourcenest: '5–7 business days', others: '2–4 weeks average' },
  { feature: 'Pricing', sourcenest: 'Transparent, no hidden fees', others: 'Often with add-ons' },
  { feature: 'QA & Reporting', sourcenest: 'Weekly KPI reports', others: 'Monthly or on request' },
  { feature: 'Scalability', sourcenest: '30-day notice, no penalties', others: 'Long-term contracts' },
  { feature: 'Compliance', sourcenest: 'GDPR, ISO 9001, NDA', others: 'Varies by vendor' },
  { feature: 'Trial Period', sourcenest: '7-day paid trial', others: 'Rarely offered' },
]

const STATS = [
  { num: '500+', label: 'Clients Served' },
  { num: '<8%', label: 'Talent Acceptance Rate' },
  { num: '98%', label: 'Client Retention Rate' },
  { num: '5–7', label: 'Days to Onboard' },
  { num: '30+', label: 'Countries Served' },
  { num: '24/7', label: 'Support Available' },
]

export default function WhyUs() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag">Why Sourcenest</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: 700 }}>
            Why 500+ Businesses Choose Sourcenest
          </h1>
          <p className="section-sub">
            There are hundreds of outsourcing agencies. Here's why our clients stay with us for years, not months — and why 98% of them renew their engagement.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get a Free Quote →</Link>
            <Link to="/our-process" className="btn-outline">See Our Process</Link>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div style={{ background: 'var(--navy-mid)', borderBottom: '1px solid var(--border)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, textAlign: 'center' }} className="stats-row">
            {STATS.map((s, i) => (
              <div key={s.num} style={{ padding: '16px', borderRight: i < 5 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--teal)' }}>{s.num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--gray)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.stats-row{grid-template-columns:repeat(3,1fr)!important}} @media(max-width:480px){.stats-row{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </div>

      {/* ── REASONS ── */}
      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-tag">The Difference</span>
            <h2 className="section-title">6 Reasons Clients Choose & Stay With Us</h2>
          </div>
          <div className="grid-2">
            {REASONS.map(r => (
              <div key={r.num} className="card">
                <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800,
                    color: 'var(--teal)', background: 'var(--teal-glow)',
                    border: '1px solid rgba(0,201,167,0.2)', borderRadius: 100,
                    padding: '4px 12px', flexShrink: 0, alignSelf: 'flex-start',
                  }}>{r.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700 }}>{r.title}</h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray)', lineHeight: 1.75, marginBottom: 20 }}>{r.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {r.detail.map(d => (
                    <li key={d} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.84rem', color: 'var(--gray-light)' }}>
                      <span style={{ color: 'var(--teal)', flexShrink: 0 }}>✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="section-mid">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-tag">Side by Side</span>
            <h2 className="section-title">Sourcenest vs Other Agencies</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Don't just take our word for it — see how we stack up against the alternatives.
            </p>
          </div>

          <div style={{ maxWidth: 860, margin: '0 auto', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr', background: 'var(--navy-light)' }}>
              <div style={{ padding: '20px 24px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Feature</div>
              <div style={{ padding: '20px 24px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--teal)', fontSize: '0.95rem' }}>Sourcenest</div>
              <div style={{ padding: '20px 24px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--gray)', fontSize: '0.95rem' }}>Others</div>
            </div>

            {COMPARE.map((row, i) => (
              <div key={row.feature} style={{
                display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr',
                background: i % 2 === 0 ? 'var(--navy)' : 'var(--navy-mid)',
                borderTop: '1px solid var(--border)',
              }}>
                <div style={{ padding: '16px 24px', fontSize: '0.88rem', fontWeight: 600 }}>{row.feature}</div>
                <div style={{ padding: '16px 24px', textAlign: 'center', fontSize: '0.85rem', color: 'var(--teal)' }}>
                  <span style={{ marginRight: 6 }}>✓</span>{row.sourcenest}
                </div>
                <div style={{ padding: '16px 24px', textAlign: 'center', fontSize: '0.85rem', color: 'var(--gray)' }}>
                  <span style={{ marginRight: 6 }}>✗</span>{row.others}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="section-dark">
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', color: 'var(--teal)', lineHeight: 1, marginBottom: 24, fontFamily: 'Georgia, serif' }}>"</div>
            <p style={{ fontSize: '1.15rem', color: 'var(--gray-light)', lineHeight: 1.85, fontStyle: 'italic', marginBottom: 32 }}>
              We interviewed 4 outsourcing agencies before choosing Sourcenest. The difference was immediately clear — dedicated AM from day one, transparent pricing, and a team that was operational in under a week. 14 months later, we're still with them and have doubled our outsourced headcount.
            </p>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>James Whitfield</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--teal)', marginTop: 6 }}>COO, BrightScale Logistics — Canada</div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--teal)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: 16 }}>
            Experience the Sourcenest Difference
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(10,15,30,0.7)', maxWidth: 480, margin: '0 auto 36px' }}>
            Get a free consultation and proposal within 24 hours. No commitment required.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--navy)', color: 'var(--white)',
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1rem', padding: '16px 36px', borderRadius: 4,
          }}>
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  )
}