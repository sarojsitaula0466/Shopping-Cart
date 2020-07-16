import React, { useState } from "react";

export default function Products({ addToCart }) {
  const [products] = useState([
    {
      name: "Iphone 11",
      price: "€1399.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfI7O8n7PhnlBV4P28EZUrY5WitLCabLVhLVUO24CD0zK9QC87DevWK8hCg6id0Xw71atOgv3E&usqp=CAc",
    },
    {
      name: "Samsung S8",
      price: "€499.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7MN5JfRhuq1A1zi_WuvoYsiVSPLMITFbTvplG6G7iv2jdV5nbdVE6HpyhIflzoyf5qYh7lppIxA&usqp=CAc",
    },
    {
      name: "One plus 8",
      price: "€699.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8djfx-L4mLxTZfk2R65-3Ds1mArobEPY6BRGrS-TkpPYSw2D0ERwjWJrPKQ&usqp=CAc",
    },
    {
      name: "Motorola Moto G",
      price: "€349.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcXdr1WWyjYOgTSwoZiiq0ra8t64rJ4GhRnvc-JRknjDn1B69PMosXHy2CxnTXGKT6l5x-05mR&usqp=CAc",
    },
  ]);
  return (
    <div className="App">
      <h1>Products</h1>

      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
