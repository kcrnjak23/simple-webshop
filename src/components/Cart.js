import React from "react";

export default function Cart(props) {
  const { cartItems, addItem, removeItem } = props;
  const totalPrice = cartItems
    .reduce((result, item) => result + item.quantity * item.price, 0)
    .toFixed(2);
  return (
    <div className="cart">
      <h2 className="cartHeader">Cart Items</h2>
      {cartItems.length !== 0 && (
        <div className="cartItem">
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="itemName">{item.name}</div>
              <div className="itemBtns">
                <button className="removeBtn" onClick={() => removeItem(item)}>
                  -
                </button>
                <button className="addBtn" onClick={() => addItem(item)}>
                  +
                </button>
              </div>
              <div className="itemPrice">
                {item.quantity} x ${item.price}
              </div>
            </div>
          ))}
          <hr style={{ width: "100%" }} />
          <div className="totalPrice">
            <span style={{ float: "left" }}>Total Price:</span>
            <span style={{ marginRight: "1rem" }}>${totalPrice}</span>
          </div>
          <button
            className="checkoutBtn"
            onClick={() => alert("Thank you for buying!")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
