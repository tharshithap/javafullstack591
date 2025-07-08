import React from 'react';

export default function NonVegetarianStarters() {
  const items = [
    { name: 'Chicken Tikka', price: '₹220' },
    { name: 'Mutton Seekh Kebab', price: '₹260' },
    { name: 'Fish Fingers', price: '₹240' }
  ];

  return (
    <div className="category-page">
      <h2>Non-Vegetarian Starters</h2>
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
