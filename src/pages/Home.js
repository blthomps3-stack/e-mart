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
               <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                alt="Headphones"
              />
             <h3>Wireless Headphones</h3>
            <p>$99.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img 
             src='https://images.unsplash.com/photo-1527814050087-3793815479db'
             alt='Gaming Mouse'
             />
            <h3>Gaming Mouse</h3>
            <p>$79.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
             <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
              alt="Smart Watch"
            />
            <h3>Smart Watch</h3>
            <p>$149.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
             <img
              src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
              alt="Keyboard"
            />
            <h3>Mechanical Keyboard</h3>
            <p>$129.99</p>
            <button>Add to Cart</button>
          </div>
          <section className="promo-section">
            <div className="promo-content">
              <h2>Latest Tech Deals</h2>
              <p>
                Upgrade your setup with premium electronics,
                smart devices, and gaming accessories at
                unbeatable prices.
              </p>
              <button>Explore Deals</button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}