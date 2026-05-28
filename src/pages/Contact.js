import React from 'react';

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h2>Contact eMart</h2>
        <p>Have questions? We are here to help.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Email: support@emart.com</p>
          <p>Phone: +1 204-000-0000</p>
          <p>Location: Winnipeg, Manitoba</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}