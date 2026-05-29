import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <h1><span>e</span>Mart</h1>
        <p>Your trusted destination for premium electronics,<br />
          gadgets, and accessories.</p>
      </div>

      <div className="footer-content">

        <div className="footer-box">
          <div className="footer-heading">
            <div className="circle-icon">🛍</div>
            <h3><span>e</span>Mart</h3>
          </div>
          <p>Your trusted destination for premium electronics, gadgets, and accessories.</p>
        </div>

        <div className="footer-box">
          <div className="footer-heading">
            <div className="circle-icon">🔗</div>
            <h3>Quick Links</h3>
          </div>

          <ul>
            <li>Home <span>›</span></li>
            <li>Products <span>›</span></li>
            <li>About <span>›</span></li>
            <li>Contact <span>›</span></li>
          </ul>
        </div>

        <div className="footer-box">
          <div className="footer-heading">
            <div className="circle-icon">📞</div>
            <h3>Contact Us</h3>
          </div>

          <p>✉️ Email: support@emart.com</p>
          <p>📞 Phone: +1 204-000-0000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <span>f</span>
          <span>◎</span>
          <span>𝕏</span>
          <span>▶</span>
        </div>

        <p>© 2026 eMart. All Rights Reserved.</p>
      </div>

    </footer>
  );
}