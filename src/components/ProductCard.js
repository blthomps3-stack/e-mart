import React from 'react';

export default function ProductCard() {
  return (
    <div className="product-card">

      <span className="category-label">
        Electronics
      </span>

      <h4>Wireless Headphones</h4>

      <p className="product-price">
        $99.99
      </p>

      <a href="/product" className="details-link">
        Details
      </a>

      <button type="button">
        Add to Cart
      </button>

    </div>
  );
}