import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'Soups', price: '₹299', image: '/images/soup.jpg', link: '/menu/soups' },
  { id: 2, name: 'Vegetarian Starters', price: '₹249', image: '/images/vegetarianstarters.jpg', link: '/menu/veg-starters' },
  { id: 3, name: 'Non-Vegetarian Starters', price: '₹250', image: '/images/nonvegetarianstarters.jpeg', link: '/menu/nonveg-starters' },
  { id: 4, name: 'Salads', price: '₹199', image: '/images/salads.jpg', link: '/menu/salads' },
  { id: 5, name: 'Breads', price: '₹35', image: '/images/Breads.jpg', link: '/menu/breads' },
  { id: 6, name: 'Main Course', price: '₹250', image: '/images/MainCourse.jpg', link: '/menu/main-course' },
  { id: 7, name: 'Desserts', price: '₹65', image: '/images/Desserts.jpeg', link: '/menu/desserts' },
  { id: 8, name: 'Drinks', price: '₹50', image: '/images/Drinks.jpg', link: '/menu/drinks' }
];

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <div className="search-bar" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '60%',
            maxWidth: '400px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <div className="menu-grid">
        {filteredItems.length === 0 ? (
          <p style={{ textAlign: 'center' }}>❌ No items match your search.</p>
        ) : (
          filteredItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <Link to={item.link}>
                <button>View Items</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
