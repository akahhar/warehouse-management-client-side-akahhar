import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    // http://localhost:5000/items
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.slice(0, 6);
        setItems(newData);
        setLoading(false);
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
            {loading ? (
              <ClipLoader color={"#D0021B"} loading={loading} size={50} />
            ) : (
              items.map((item) => <Item key={item._id} item={item}></Item>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
