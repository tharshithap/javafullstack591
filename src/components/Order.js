import React from 'react';
import { useOrder } from './context/OrderContext';
import './Order.css';

export default function Order() {
  const { orders, cancelOrder } = useOrder(); // ✅ include cancelOrder

  const handleCancel = (index) => {
    const confirm = window.confirm("❌ Are you sure you want to cancel this order?");
    if (confirm) {
      cancelOrder(index); // ✅ call context method to cancel
      alert("Order cancelled successfully!");
    }
  };

  return (
    <div className="order-page">
      <h2 className="order-heading">🛒 Your Orders</h2>

      {orders && orders.length === 0 ? (
        <p className="no-orders">No orders placed yet.</p>
      ) : (
        <ul className="order-list">
          {orders.map((item, index) => (
            <li key={index} className="order-card">
              <img
                src={item.image}
                alt={item.name}
                className="order-img"
                onError={(e) => {
                  e.target.src = '/images/default-placeholder.png';
                }}
              />
              <div className="order-details">
                <h4>{item.name}</h4>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> {item.price}</p>
                <button
                  className="cancel-btn"
                  onClick={() => handleCancel(index)}
                >
                  ❌ Cancel Order
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
