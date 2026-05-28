import React from 'react';

export default function Cart() {
  return (
    <main className='cart-page'>
      <div className="cart-container"></div>
      <h2>Shopping Cart Inventory</h2>
      <div className='empty-cart'>
        <h3>Your Cart is Empty</h3>
        <p>No items added yet.</p>
        <a href="/" className='shop-btn'>Return to Shop</a>
      </div>
    </main>
  );
}