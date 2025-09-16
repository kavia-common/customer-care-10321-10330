import React from 'react';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer area for the single page app with brand and note. */
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            aria-hidden="true"
            style={{
              width: 10, height: 10, borderRadius: '50%',
              background: 'var(--secondary)'
            }}
          />
          <strong>Foodgo</strong>
        </div>
        <div className="footer-note">Crafted with the Ocean Professional theme</div>
      </div>
    </footer>
  );
}
