import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
export default function Desserts() {
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderData, setOrderData] = useState({ name: '', quantity: 1, note: '' });
const { addOrder } = useOrder();
  const items = [
    { name: 'Gulab Jamun', image: '/images/GulabJamun.jpeg', price: '₹80' },
    { name: 'Ice Cream (2 Scoops)', image: '/images/IceCream.jpg', price: '₹90' },
    { name: 'Rasgulla', image: '/images/Rasgulla.jpg', price: '₹70' },
    { name: 'Brownie with Ice Cream', image: '/images/BrownieIceCream.webp', price: '₹120' },
    { name: 'Mango Mousse', image: '/images/MangoMousse.jpeg', price: '₹100' }
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

    const order = {
      name: selectedItem.name,
      quantity: orderData.quantity,
      note: orderData.note,
      price: selectedItem.price,
      image: selectedItem.image
    };

    addOrder(order); // ✅ Save to global order context
    alert(`✅ Order placed for ${selectedItem.name} x${orderData.quantity}`);
    closeForm();
  };

  return (
    <div className="category-page">
      <h2 className="text-center mb-4">Desserts</h2>
      <ul className="item-list">
        {items.map((item, i) => (
          <li key={i} className="food-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
              <h4>{item.name}</h4>
              <p><strong>Price:</strong> {item.price}</p>
              <button className="order-btn" onClick={() => openForm(item)}>Order Now</button>
            </div>
          </li>
        ))}
      </ul>

      {showForm && selectedItem && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Order: {selectedItem.name}</h3>
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
                placeholder="Any special instructions?"
                rows="3"
                value={orderData.note}
                onChange={handleChange}
              />
              <div className="form-buttons">
                <button type="submit" className="btn-confirm">Confirm Order</button>
                <button type="button" className="btn-cancel" onClick={closeForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
