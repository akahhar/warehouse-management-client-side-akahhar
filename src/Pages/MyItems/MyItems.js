import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Item from "../Home/Item/Item";

export default function MyItems() {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user?.email;
    const getMyItems = async () => {
      const url = `http://localhost:5000/userItems?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("storageAccessToken")}`,
        },
      });
      setItems(data);
    };
    getMyItems();
  }, [user]);

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/delteItem/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          }
        });
    }
  };
  return (
    <div className="py-5" style={{ background: "#f2f4f8" }}>
      <div id="items" className="container">
        <div className="section-titlemb-3">
          <h2>My Items</h2>
          <Link to="/addItems" className="btn mb-3">
            Add New Item
          </Link>
        </div>
        <div className="row">
          <div className="items-container">
            {items?.map((item) => (
              <Item key={item._id} item={item} deleteItem={deleteItem}></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
