import React from "react";

export default function Header(props) {
  const { cartLength } = props;
  return (
    <div className="header">
      <span>Web Shop</span>
      <span style={{ float: "right" }}>Items in Cart:{cartLength}</span>
    </div>
  );
}
