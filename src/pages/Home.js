import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';


export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('');
   
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/category/electronics');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'All') return true;
    
    return product.title.toLowerCase().includes(selectedCategory.toLowerCase()) || 
           product.description.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price; 
    }
    if (sortBy === 'name') {
      return a.title.localeCompare(b.title); 
    }
    return 0; 
  });

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
        <button type="button" onClick={() => setSelectedCategory('Phone')}>Phones</button>
        <button type="button" onClick={() => setSelectedCategory('Laptop')}>Laptops</button>
        <button type="button" onClick={() => setSelectedCategory('Accessories')}>Accessories</button>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort Products</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
       <h2>Featured Products</h2>
          <div className="products-grid">

          {sortedProducts.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
    ))}

          <section className="promo-section">
            <div className="promo-content">
              <h2>Latest Deals</h2>
              <p>
                Upgrade your setup with premium electronics,
                smart devices, and gaming accessories at
                unbeatable prices.
              </p>
              <button>Explore Deals</button>
            </div>
          </section>
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