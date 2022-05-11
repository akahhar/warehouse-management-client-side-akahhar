import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // https://morning-atoll-43412.herokuapp.com/items
    fetch("https://morning-atoll-43412.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.slice(0, 6);
        setItems(newData);
      });
  }, []);

  return (
    <div className="py-5" style={{ background: "#f2f4f8" }}>
      <div id="items" className="container">
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
    </div>
  );
};

export default Items;
