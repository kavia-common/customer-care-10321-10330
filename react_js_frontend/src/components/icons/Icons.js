import React from 'react';

// PUBLIC_INTERFACE
export function StarIcon({ size = 16, color = '#F59E0B' }) {
  /** Renders a solid star icon used for ratings. */
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill={color} aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 0 0-1.176 0L6.515 16.283c-.784.57-1.838-.196-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.463a1 1 0 0 0 .949-.69l1.07-3.292z"/>
    </svg>
  );
}

// PUBLIC_INTERFACE
export function HeartIcon({ size = 18, color = '#EF4444' }) {
  /** Renders a heart icon for favorites. */
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 21s-6.716-4.364-9.428-7.076C-.476 11.07.243 6.91 3.273 5.23A5.25 5.25 0 0 1 12 6.247a5.25 5.25 0 0 1 8.727-1.017c3.03 1.68 3.75 5.84.701 8.694C18.716 16.636 12 21 12 21z"/>
    </svg>
  );
}

// PUBLIC_INTERFACE
export function AdjustmentsIcon({ size = 22, color = '#ffffff' }) {
  /** Renders a sliders icon used for filters. */
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M6 2a2 2 0 0 1 2 2v8a2 2 0 1 1-2 0V4a2 2 0 0 1 2-2zm6 6a2 2 0 0 1 2 2v8a2 2 0 1 1-2 0V10a2 2 0 0 1 2-2zm6-4a2 2 0 0 1 2 2v12a2 2 0 1 1-2 0V6a2 2 0 0 1 2-2z"/>
    </svg>
  );
}

// PUBLIC_INTERFACE
export function SearchIcon({ size = 18, color = '#111827' }) {
  /** Renders a magnifying glass icon used in search input. */
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2"/>
      <line x1="20" y1="20" x2="16.65" y2="16.65" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
