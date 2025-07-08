import React, { useState } from 'react';

// Example product data
const products = [
  { id: 1, name: 'Product A', price: 199 },
  { id: 2, name: 'Product B', price: 299 },
];

export default function PlaceOrder() {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = products.find(p => p.id === Number(selectedProductId));
    setOrder({
      product,
      quantity,
      total: product.price * quantity,
    });
  };

  return (
    <div className="p-5" style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product:
          <select
            value={selectedProductId}
            onChange={e => setSelectedProductId(e.target.value)}
            style={{ width: '100%', marginBottom: 10 }}
          >
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} (${product.price})
              </option>
            ))}
          </select>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            style={{ width: '100%', marginBottom: 10 }}
          />
        </label>
        <button type="submit" style={{ width: '100%' }}>
          Place Order
        </button>
      </form>
      {order && (
        <div style={{ marginTop: 20 }}>
          <h3>Order Summary</h3>
          <p>
            <strong>Product:</strong> {order.product.name}
          </p>
          <p>
            <strong>Quantity:</strong> {order.quantity}
          </p>
          <p>
            <strong>Total:</strong> ${order.total}
          </p>
        </div>
      )}
    </div>
  );
}
