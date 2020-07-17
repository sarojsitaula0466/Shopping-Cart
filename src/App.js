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
              <header
                style={{
                  backgroundColor: "#666",
                  height: "100px",
                  textAlign: "center",
                }}
              >
                <Link to="/checkout">
                  <button
                    style={{
                      fontSize: "18px",
                      padding: "5px",
                      marginTop: "30px",
                    }}
                  >
                    Checkout ({cart.length})
                  </button>
                </Link>
              </header>
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
