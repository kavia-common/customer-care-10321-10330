import React from 'react';
import { HeartIcon, StarIcon } from './icons/Icons';

// PUBLIC_INTERFACE
export default function ProductCard({ image, title, rating = 4.8, onFavorite }) {
  /** Single product card with image, title, rating and favorite action. */
  return (
    <article className="card product-card" role="article">
      <div className="product-media-wrap">
        <img src={image} alt="" className="product-img" />
      </div>
      <h3 className="product-title">{title}</h3>
      <div className="product-meta">
        <div className="rating" aria-label={`Rating ${rating}`}>
          <StarIcon />
          <span>{rating}</span>
        </div>
        <button className="fav-btn" aria-label="Add to favorites" onClick={onFavorite}>
          <HeartIcon />
        </button>
      </div>
    </article>
  );
}
