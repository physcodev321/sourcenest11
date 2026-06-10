import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div style={{
      background: 'var(--teal)',
      color: 'var(--navy)',
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      position: 'relative',
      zIndex: 1100,
    }}>
      <p style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '0.82rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        textAlign: 'center',
      }}>
        MOQ: 200 Units &nbsp;·&nbsp; From Factory to Brand, Seamlessly Delivered &nbsp;·&nbsp;
        <Link to="/contact" style={{
          color: 'var(--navy)',
          textDecoration: 'underline',
          marginLeft: 8,
          fontWeight: 800,
        }}>
          Get a Free Quote →
        </Link>
      </p>

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        style={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--navy)',
          fontSize: '1.1rem',
          lineHeight: 1,
          fontWeight: 700,
          padding: '4px 8px',
        }}
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  )
}