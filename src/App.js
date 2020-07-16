import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeProduct = (rproduct) => {
    setCart([...cart.filter((product) => product !== rproduct)]);
  };
  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <Link to="/checkout">
                <button>Go to cart ({cart.length})</button>
              </Link>
              <Products addToCart={addToCart} />
            </>
          )}
        />
        <Route
          path="/checkout"
          render={(props) => <Cart cart={cart} removeProduct={removeProduct} />}
        />
      </div>
    </Router>
  );
}

export default App;
