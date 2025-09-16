import React from 'react';
import './header.css';
import { AdjustmentsIcon, SearchIcon } from './icons/Icons';

// PUBLIC_INTERFACE
export default function Header({ categories = [], activeCategory = '', onCategoryChange, onFilter }) {
  /**
   * Header component containing brand, avatar, search, and category chips.
   * - categories: array of category names
   * - activeCategory: currently selected category
   * - onCategoryChange: callback(name) when a category is selected
   * - onFilter: callback() when the filter button is clicked
   */
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-title" style={{ color: 'var(--text)' }}>Foodgo</div>
          <div className="brand-sub">Order your favourite food!</div>
        </div>
        <img
          src="/assets/figmaimages/figma_image_1_54.png"
          alt="Profile avatar"
          width="44"
          height="44"
          style={{ borderRadius: 12, objectFit: 'cover', boxShadow: 'var(--shadow-sm)' }}
        />
      </div>

      <div className="container">
        <div className="search-row">
          <div className="search-input">
            <SearchIcon />
            <input placeholder="Search" aria-label="Search menu" />
          </div>
          <button className="filter-btn" onClick={onFilter} aria-label="Open filters">
            <AdjustmentsIcon />
          </button>
        </div>

        <nav className="categories" aria-label="Categories">
          {categories.map((c) => (
            <button
              key={c}
              className={`cat-chip ${c === activeCategory ? 'active' : ''}`}
              onClick={() => onCategoryChange?.(c)}
              aria-pressed={c === activeCategory}
            >
              {c}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
