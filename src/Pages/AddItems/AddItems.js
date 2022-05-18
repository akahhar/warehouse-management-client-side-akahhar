import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

export default function AddItems() {
  const [user] = useAuthState(auth);
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
          toast.success("Item Added! Thank you.");
          navigate("/myItems");
        }
      });
  };
  return (
    <div className="py-5">
      <div className="container">
        <h2>Add a new item</h2>
        <div className="row">
          <div className="col-xl-6">
            <form
              className="d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="mb-2 form-control"
                value={user?.email}
                {...register("email")}
              />
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
                type="number"
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
              <input
                type="submit"
                className="btn form-control"
                value="Add Items"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
