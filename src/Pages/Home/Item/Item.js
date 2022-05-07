import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { name, content, price, image } = props.item;
  return (
    <div className="item-wrapper mb-4">
      <div className="icon">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{content}</p>
        <strong>Price : {price}</strong>
      </div>
      <Link to="/checkout" className="btn mt-2">
        Checkout
      </Link>
    </div>
  );
};

export default Item;
