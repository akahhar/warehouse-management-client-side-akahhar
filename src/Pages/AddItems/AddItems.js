import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddItems() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // console.log(data);
    const url = `http://localhost:5000/addItems`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          navigate("/home");
        }
      });
  };
  return (
    <div className="w-50 mx-auto py-5">
      <h2>Add a items</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 form-control"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <textarea
          className="mb-2 form-control"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2 form-control"
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="mb-2 form-control"
          placeholder="Quantity"
          type="text"
          {...register("quantity", { required: true })}
        />
        <input
          className="mb-2 form-control"
          placeholder="Supplier Name"
          type="text"
          {...register("supplier_name", { required: true })}
        />
        <input
          className="mb-2 form-control"
          placeholder="Photo URL"
          type="text"
          {...register("image")}
        />
        <input type="submit" className="btn form-control" value="Add Items" />
      </form>
    </div>
  );
}
