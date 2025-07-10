import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="contact-form-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" type="text" placeholder="Your Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Your Email" required onChange={handleChange} />
        <textarea name="message" rows="4" placeholder="Your Message" required onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
