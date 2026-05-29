import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

function ProductCard({ product }) {
    if (!product) return null;

  return (
    <div className="product-card">
      <span className="category-label">{product.category}</span>
      <h4>{product.title}</h4>
      <img src={product.image} alt={product.title || "Product image"} />
      <p className="product-price"> ${product.price}</p>
      <Link to={`/product/${product.id}`} className="details-link"> Details</Link>
      <CartButton/>
    </div>
  );
}

export default ProductCard;
      
