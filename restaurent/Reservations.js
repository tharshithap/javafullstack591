import React, { useState } from 'react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '', date: '', time: '', guests: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Table booked successfully!');
  };

  return (
    <div className="reservations">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input name="name" type="text" placeholder="Your Name" required onChange={handleChange} />
        <input name="date" type="date" required onChange={handleChange} />
        <input name="time" type="time" required onChange={handleChange} />
        <input name="guests" type="number" placeholder="No. of Guests" required onChange={handleChange} />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
