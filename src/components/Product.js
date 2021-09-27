import React from "react";

export default function Product(props) {
  const { item, addItem } = props;
  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <h3>$ {item.price}</h3>
      <button className="buyBtn" onClick={() => addItem(item)}>
        Add to Cart
      </button>
    </div>
  );
}
