import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../Home/Item/Item";

export default function ManageItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // https://morning-atoll-43412.herokuapp.com/items
    fetch("https://morning-atoll-43412.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://morning-atoll-43412.herokuapp.com/delteItem/${id}`;
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
        <div className="row">
          <div className="section-titlemb-3">
            <h2>Manage Items</h2>
            <Link to="/addItems" className="btn mb-3">
              Add New Item
            </Link>
          </div>
          <div className="items-container">
            {items.map((item) => (
              <Item key={item._id} item={item} deleteItem={deleteItem}></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
