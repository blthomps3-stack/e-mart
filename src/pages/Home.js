import React from 'react';
import ProductCard from '../components/ProductCard';


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

          <ProductCard id={'9'}/>
          <ProductCard id={'10'}/>
          <ProductCard id={'11'}/>
          <ProductCard id={'12'}/>

          {/* <section className="promo-section">
            <div className="promo-content">
              <h2>Latest Deals</h2>
              <p>
                Upgrade your setup with premium electronics,
                smart devices, and gaming accessories at
                unbeatable prices.
              </p>
              <button>Explore Deals</button>
            </div>
          </section> */}
        </div>
         <section className="features-section">
        <h2>Why Shop With Us?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Get your electronics delivered quickly and safely.</p>
          </div>

          <div className="feature-card">
            <h3>Best Prices</h3>
            <p>Find premium gadgets at affordable prices.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Checkout</h3>
            <p>Shop with confidence using safe payment options.</p>
          </div>
        </div>
      </section>
      </section>
      
    </main>
  );
}