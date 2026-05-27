import React from 'react';

export default function Home() {
  return (
    <main>
      <section className="hero">
          <h2>Shop the Future of Electronics</h2>
          <p> Discover premium gadgets, smartphones, laptops,
            gaming accessories, and smart devices.</p>
          <button>Shop Now</button>
      </section>
      
      <section className="products-section">

      <div className="filters">
        <button type="button">Phones</button>
        <button type="button">Laptops</button>
        <button type="button">Accessories</button>
        <select>
          <option value="">Sort Products</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
       <h2>Featured Products</h2>
          <div className="products-grid">

          <div className="product-card">
            <h3>Wireless Headphones</h3>
            <p>$99.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <h3>Gaming Mouse</h3>
            <p>$79.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <h3>Smart Watch</h3>
            <p>$149.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <h3>Mechanical Keyboard</h3>
            <p>$129.99</p>
            <button>Add to Cart</button>
          </div>

        </div>
      </section>
    </main>
  );
}