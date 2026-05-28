import React from 'react';

export default function NotFound() {
  return (
      <main className="not-found-page">
        <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The destination link requested does not exist.
      </p>
      <a href="/" className="shop-btn">Return to Home</a>
      </div>
    </main>
  );
}