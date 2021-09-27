import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Data from "./Data";

function App() {
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const itemExists = cartItems.find((x) => x.id === item.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id
            ? { ...itemExists, quantity: itemExists.quantity + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    const itemExists = cartItems.find((x) => x.id === item.id);
    if (itemExists.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id
            ? { ...itemExists, quantity: itemExists.quantity - 1 }
            : x
        )
      );
    }
  };

  return (
    <>
      <div>
        <Header cartLength={cartItems.length}></Header>
      </div>
      <div className="mainBody">
        <Main products={products} addItem={addItem}></Main>
        <Cart
          cartItems={cartItems}
          removeItem={removeItem}
          addItem={addItem}
        ></Cart>
      </div>
    </>
  );
}

export default App;
