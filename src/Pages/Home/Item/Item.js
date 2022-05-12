import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { name, description, price, image, _id, quantity, supplier_name } =
    props.item;
  // console.log(props.item);
  return (
    <div className="item-wrapper mb-3">
      <div className="icon">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
        <strong>Price : ${price} </strong>
        <br />
        <span>Quantity : {quantity}</span>
        <div className="mb-2">Supplier name : {supplier_name}</div>
      </div>

      {props.deleteItem ? (
        <>
          <button onClick={() => props.deleteItem(_id)} className="btn">
            Delete
          </button>
          <Link to={`/inventory/${_id}`} className="btn mx-2">
            item update
          </Link>
        </>
      ) : (
        <Link to={`/inventory/${_id}`} className="btn mt-2">
          item update
        </Link>
      )}
    </div>
  );
};

export default Item;
