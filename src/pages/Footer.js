import React from 'react';

export default function Footer() {

  return (
    <footer className="footer">
     <div className="footer-content">
      <div className="footer-box">
          <h3>eMart</h3>
          <p>
            Your trusted destination for premium electronics,
            gadgets, and accessories.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>Email: support@emart.com</p>
          <p>Phone: +1 204-000-0000</p>
        </div>
      </div>
       <div className="footer-bottom">
        <p>© 2026 eMart. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

