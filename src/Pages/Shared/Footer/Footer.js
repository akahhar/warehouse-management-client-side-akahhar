import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <p className="text-center py-2 mb-0">
        © 2022{" "}
        <Link to="/" target="_blank">
          Wedding Moments
        </Link>
        , All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
