import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { name, description, price, image, _id,quantity } = props.item;
  console.log(props.item);
  return (
    <div className="item-wrapper mb-4">
      <div className="icon">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
        <strong>Price : {price}</strong>
        <br />
        <span>Quantity : {quantity}</span>
      </div>
      <Link to={`/inventory/${_id}`} className="btn mt-2">
        item update
      </Link>
    </div>
  );
};

export default Item;
