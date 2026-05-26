import React from 'react';

export default function ProductCard() {
  return (
    <div>
      <span>Category Label</span>
      <h4>Sample Product Title</h4>
      <p>$99.99</p>
      <a href="/product">Details</a>
      <button type="button">Add to Cart</button>
    </div>
  );
}