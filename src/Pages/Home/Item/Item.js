import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { name, content, price, image, _id } = props.item;
  console.log(props.item);
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
      <Link to={`/inventory/${_id}`} className="btn mt-2">
        item update
      </Link>
    </div>
  );
};

export default Item;
