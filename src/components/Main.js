import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, addItem } = props;
  return (
    <div className="allItems">
      {products.map((item) => (
        <Product key={item.id} item={item} addItem={addItem}></Product>
      ))}
    </div>
  );
}
