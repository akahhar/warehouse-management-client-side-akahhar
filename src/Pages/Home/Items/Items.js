import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // https://morning-atoll-43412.herokuapp.com/items
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div id="items" className="container pt-5">
      <div className="row">
        <div className="section-title text-center">
          <h2>Our Items</h2>
        </div>
        <div className="items-container">
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
