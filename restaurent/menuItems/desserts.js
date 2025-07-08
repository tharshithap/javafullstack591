import React from 'react';

export default function Desserts() {
  const items = [
    { name: 'Gulab Jamun', price: '₹80' },
    { name: 'Ice Cream (2 Scoops)', price: '₹90' },
    { name: 'Rasgulla', price: '₹70' }
  ];

  return (
    <div className="category-page">
      <h2>Desserts</h2>
      <ul className="item-list">
        {items.map((item, i) => (
          <li key={i}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
