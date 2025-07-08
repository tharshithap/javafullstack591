import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Resto Delight</h1>
        <p>Delicious food, cozy ambiance, fast service!</p>
      </div>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p><strong>📍 Address:</strong> 123 Food Street, Flavor Town, India</p>
          <p><strong>📞 Phone:</strong> +91 9876543210</p>
          <p><strong>📧 Email:</strong> contact@restodelight.com</p>
          <p><strong>🕒 Opening Hours:</strong> 10 AM – 11 PM (Mon-Sun)</p>
        </div>
      </section>
    </div>
  );
}
