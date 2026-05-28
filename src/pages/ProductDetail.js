import React from 'react';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  return (
    <main className="product-detail-page">
      <div className="product-detail-container">
         <div className="product-image-box">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"alt="Product" />
        </div>
        <div className="product-info">
        <h2>Wireless Headphones</h2>
        <p>$149.99</p>
           <p className="description">
            Experience premium sound quality with modern
            wireless headphones designed for comfort and
            performance.
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </main>
  );
}
