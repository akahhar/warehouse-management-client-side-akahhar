import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="text-center">
      <div class="awr">
        <h1>404</h1>
        <h2>Oops... the page you are looking for doesn't exist.</h2>
        <Link to="/">Click here</Link> to return to the homepage
      </div>
    </div>
  );
};

export default NotFound;
