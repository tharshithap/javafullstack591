import React, { useState } from 'react';

export default function Salads() {
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderData, setOrderData] = useState({ name: '', quantity: 1, note: '' });

  const items = [
    { name: 'GreenSalad', image: '/images/salads/GreenSalad.jpg', price: '₹90' },
    { name: 'CaesarSalad', image: '/images/salads/CaesarSalad.jpg', price: '₹130' },
    { name: 'SproutsSalad', image: '/images/salads/SproutsSalad.jpeg', price: '₹110' }
  ];

  const openForm = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setOrderData({ name: '', quantity: 1, note: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${selectedItem.name} x${orderData.quantity}`);
    closeForm();
  };

  return (
    <div className="category-page">
      <h2>Salads</h2>
      <ul className="item-list">
        {items.map((item, i) => (
          <li key={i} className="salad-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p><b>Price:</b>{item.price}</p>
              <button className="order-btn" onClick={() => openForm(item)}>Order Now</button>
            </div>
          </li>
        ))}
      </ul>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Order {selectedItem.name}</h3>
            <form onSubmit={handleSubmit} className="order-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={orderData.name}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                min="1"
                value={orderData.quantity}
                onChange={handleChange}
                required
              />
              <textarea
                name="note"
                placeholder="Add special instructions..."
                rows="3"
                value={orderData.note}
                onChange={handleChange}
              />
              <div className="form-buttons">
                <button type="submit">Confirm Order</button>
                <button type="button" onClick={closeForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
