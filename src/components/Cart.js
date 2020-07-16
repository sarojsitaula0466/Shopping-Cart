import React from "react";

export default function Cart({ cart, removeProduct }) {
  return (
    <div className="App">
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <button onClick={() => removeProduct(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
