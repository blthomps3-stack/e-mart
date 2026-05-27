import React from 'react';

export default function Home() {
  return (
    <main>
      <section>
        <h2>Marketplace Main Headline</h2>
        <p>Promo description text banner goes here.</p>
      </section>

      <div>
        <button type="button">Category 1</button>
        <button type="button">Category 2</button>
        <select>
          <option value="">Sort Products</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
    </main>
  );
}