import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <main className="cart-page">
      <h2>Shopping Cart Inventory</h2>

      <div className="empty-cart">
        <h3>Your Cart is Empty</h3>
        <p>
          Looks like you havenot added any products yet.
          Explore our latest tech collection.
        </p>

        <Link to="/" className="shop-btn">
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}