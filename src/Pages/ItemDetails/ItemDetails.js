import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ItemDetails() {
  const [item, setItem] = useState({});
  const { itemsId } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  useEffect(() => {
    const url = `https://morning-atoll-43412.herokuapp.com/items/${itemsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  const onSubmit = (data) => {
    // console.log(data);
    const url = `https://morning-atoll-43412.herokuapp.com/updateQuantity/${itemsId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          navigate("/home");
        }
      });
  };

  const onClickDeliveredItmes = (id) => {
    const url = `https://morning-atoll-43412.herokuapp.com/delivered/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          navigate("/home");
        }
      });
  };
  return (
    <div className="container py-5">
      <div className="section-title text-center">
        <h2>Item Details</h2>
      </div>
      <div className="row">
        <div className="col-xl-6 col-md-6">
          <div className="item-wrapper mb-4">
            <div className="icon">
              <img className="img-fluid" src={item.image} alt="" />
            </div>
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <strong>Price : {item.price} </strong>
              <br />
              <span>Quantity : {item.quantity}</span>
              <div className="mb-3">Supplier name : {item.supplier_name}</div>
            </div>

            <button
              className="btn"
              onClick={() => onClickDeliveredItmes(item._id)}
            >
              Delivered
            </button>
            <Link to="/manageItems" className="btn mx-3">
              Manage Items
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-md-6">
          <div className="add-item mt-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="quantity" className="form-label">
                Add Quantity :
              </label>
              <input
                className="mb-2 form-control"
                placeholder="enter quantity"
                type="number"
                {...register("quantity", { required: true, maxLength: 20 })}
              />
              <input type="submit" className="btn mb-5" value="Add" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
