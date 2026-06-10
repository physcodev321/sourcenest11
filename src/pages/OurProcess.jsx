import { Link } from 'react-router-dom'

const STEPS = [
  {
    num: '01',
    title: 'Submit Your Requirements',
    duration: '0–24 Hours',
    desc: 'Fill out our intake form with your project details — the service you need, team size, expected hours, timeline, and any specific skill requirements. The more detail you provide, the faster and more accurate our matching will be.',
    details: [
      'Complete our online intake form',
      'Specify service type, team size & hours',
      'Share any tools, systems, or workflows',
      'Outline KPIs and success metrics',
      'We confirm receipt within 2 hours',
    ],
  },
  {
    num: '02',
    title: 'Discovery Call & Proposal',
    duration: '24–48 Hours',
    desc: 'Our team reviews your requirements and schedules a discovery call to clarify any details. Within 48 hours, we send a tailored proposal including candidate profiles, pricing, timeline, and engagement terms.',
    details: [
      '30-minute discovery call with our team',
      'Candidate profiles from our talent pool',
      'Detailed pricing breakdown',
      'Engagement terms & NDA included',
      'Proposal delivered within 48 hours',
    ],
  },
  {
    num: '03',
    title: 'Talent Matching & Selection',
    duration: '2–3 Business Days',
    desc: 'We present you with a shortlist of pre-vetted candidates who match your exact requirements. You review profiles, conduct optional interviews, and select your team. We handle all negotiations and contracting.',
    details: [
      'Shortlist of pre-vetted candidates',
      'Optional live interviews with candidates',
      'Skills test results included per profile',
      'You make the final selection',
      'We handle contracts & negotiations',
    ],
  },
  {
    num: '04',
    title: 'Onboarding & Setup',
    duration: '3–5 Business Days',
    desc: 'Once selected, your team goes through a structured onboarding process. We set up all tools, communication channels, workflows, and access permissions. Your dedicated account manager is assigned at this stage.',
    details: [
      'Tool & system access setup',
      'Communication channel configuration',
      'Workflow and SOP documentation',
      'Dedicated account manager assigned',
      'Team orientation & briefing completed',
    ],
  },
  {
    num: '05',
    title: '7-Day Paid Trial',
    duration: '7 Days',
    desc: 'Every new engagement starts with a 7-day paid trial. This lets you evaluate team performance, communication, and output quality in a real working environment before committing to a long-term engagement.',
    details: [
      'Real tasks from day one',
      'Daily check-ins during trial week',
      'Performance tracking from start',
      'Full replacement if not satisfied',
      'Trial cost credited to full contract',
    ],
  },
  {
    num: '06',
    title: 'Full Engagement & Managed Delivery',
    duration: 'Ongoing',
    desc: 'After the trial, your engagement moves to full delivery mode. Your account manager provides weekly KPI reports, manages performance reviews, handles HR and payroll, and scales your team as your business grows.',
    details: [
      'Weekly KPI reports & dashboards',
      'Monthly performance reviews',
      'HR, payroll & compliance managed',
      'Scale up or down with 30-day notice',
      'Quarterly business reviews included',
    ],
  },
]

const FAQS = [
  { q: 'What happens if I\'m not happy with a team member?', a: 'If at any point you\'re unhappy with a team member\'s performance, we will replace them at no additional cost within 5 business days. During the 7-day trial, replacements are done within 48 hours.' },
  { q: 'Who owns the work produced by my outsourced team?', a: 'You do. All work produced by your Sourcenest team is your intellectual property. Every team member signs an NDA and IP assignment agreement before starting.' },
  { q: 'How do I communicate with my outsourced team?', a: 'Your team uses whatever communication tools you prefer — Slack, Teams, email, or any other platform. Your dedicated account manager also provides a direct line for escalations.' },
  { q: 'What if my needs change mid-engagement?', a: 'No problem. You can add roles, adjust hours, or change service scope at any time. We typically action changes within 3–5 business days.' },
]

export default function OurProcess() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag">Our Process</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: 700 }}>
            From Inquiry to Delivery in 6 Simple Steps
          </h1>
          <p className="section-sub">
            We've designed our process to be fast, transparent, and completely hassle-free — so your outsourced team is operational in days, not months.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Start the Process →</Link>
            <Link to="/why-us" className="btn-outline">Why Choose Us</Link>
          </div>
        </div>
      </div>

      {/* ── TIMELINE STRIP ── */}
      <div style={{ background: 'var(--navy-mid)', borderBottom: '1px solid var(--border)', padding: '32px 0', overflowX: 'auto' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, minWidth: 700 }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: i === 0 ? 'var(--teal)' : 'var(--navy-light)',
                    border: '2px solid ' + (i === 0 ? 'var(--teal)' : 'var(--border)'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800,
                    color: i === 0 ? 'var(--navy)' : 'var(--teal)',
                  }}>{s.num}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gray)', textAlign: 'center', maxWidth: 80 }}>{s.title}</div>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ height: 1, flex: 1, background: 'var(--border)', maxWidth: 40 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DETAILED STEPS ── */}
      <section className="section-dark">
        <div className="container">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{
                display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48,
                marginBottom: 64, paddingBottom: 64,
                borderBottom: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
              }} className="step-row">
                {/* Left */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: i === 0 ? 'var(--teal)' : 'var(--navy-light)',
                    border: '2px solid ' + (i === 0 ? 'var(--teal)' : 'rgba(0,201,167,0.3)'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800,
                    color: i === 0 ? 'var(--navy)' : 'var(--teal)',
                  }}>{s.num}</div>
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--teal-glow)',
                    border: '1px solid rgba(0,201,167,0.25)',
                    borderRadius: 100, padding: '4px 12px',
                    fontSize: '0.75rem', color: 'var(--teal)', fontWeight: 700,
                  }}>{s.duration}</div>
                </div>

                {/* Right */}
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: 16 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--gray)', lineHeight: 1.8, marginBottom: 24 }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {s.details.map(d => (
                      <li key={d} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.88rem', color: 'var(--gray-light)' }}>
                        <span style={{ color: 'var(--teal)', flexShrink: 0, fontSize: '1rem' }}>✓</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.step-row{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── TIMELINE SUMMARY ── */}
      <section className="section-mid">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag">Timeline Summary</span>
            <h2 className="section-title">How Fast Can You Get Started?</h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {[
              { day: 'Day 1', event: 'Submit requirements & receive confirmation' },
              { day: 'Day 1–2', event: 'Discovery call & proposal delivered' },
              { day: 'Day 3–5', event: 'Talent matching & candidate selection' },
              { day: 'Day 5–7', event: 'Onboarding, setup & AM assigned' },
              { day: 'Day 7–14', event: '7-day paid trial begins' },
              { day: 'Day 14+', event: 'Full engagement & managed delivery' },
            ].map((t, i) => (
              <div key={t.day} style={{
                display: 'flex', alignItems: 'center', gap: 24,
                padding: '20px 0', borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  minWidth: 100, fontFamily: 'var(--font-display)',
                  fontWeight: 800, fontSize: '0.88rem', color: 'var(--teal)',
                }}>{t.day}</div>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: i === 0 ? 'var(--teal)' : 'var(--navy-light)', border: '2px solid var(--teal)', flexShrink: 0 }} />
                <div style={{ fontSize: '0.92rem', color: 'var(--gray-light)' }}>{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS FAQ ── */}
      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">Process FAQs</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--border)', padding: '24px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>{f.q}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.75 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--teal)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: 16 }}>
            Ready to Start the Process?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(10,15,30,0.7)', maxWidth: 480, margin: '0 auto 36px' }}>
            Submit your requirements today and have your team operational within 7 days.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--navy)', color: 'var(--white)',
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1rem', padding: '16px 36px', borderRadius: 4,
          }}>
            Submit Requirements →
          </Link>
        </div>
      </section>
    </>
  )
}