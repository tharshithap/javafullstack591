import React from 'react';
import './Home.css'; // Link the CSS file

export default function Home() {
 
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <img className="background-img" src="/images/bg-img.avif" alt="Hotel Room" />
        <div className="overlay">
          <h1 className="home-title">WELCOME TO THARSHI'S RESTAURENT </h1>
          <p className="home-subtitle">Delight with delicious food,coZY ambiance</p>
          
        </div>
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
