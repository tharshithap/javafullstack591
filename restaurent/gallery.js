import React from 'react';

const images = [
  '/images/rest1.avif',
  '/images/rest2.avif',
  '/images/rest3.avif',
  '/images/rest4.jpg',
  '/images/rest5.jpg',
  '/images/rest6.jpeg'
];

export default function Gallery() {
  return (
    <div className="gallery">
      <h2>Restaurant Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Restaurant ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
