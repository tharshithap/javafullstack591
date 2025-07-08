import React from 'react';

export default function Drinks() {
  const items = [
    { name: 'Fresh Lime Soda', price: '₹50' },
    { name: 'Masala Buttermilk', price: '₹40' },
    { name: 'Cold Drink (300ml)', price: '₹35' }
  ];

  return (
    <div className="category-page">
      <h2>Drinks</h2>
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
