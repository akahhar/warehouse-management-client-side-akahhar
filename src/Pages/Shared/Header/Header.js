import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 d-flex align-items-center">
            <div className="logo">
              <Link to="/">
                <span>Electro House</span>
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 d-flex align-items-center justify-content-end">
            <div className="menu-bar">
              <nav>
                <Link to="/home">Home</Link>
                <Link to="/manageInventories">Manage inventories</Link>
                <Link to="/blog">Blog</Link>
              </nav>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 d-flex align-items-center justify-content-end">
            {1 ? (
              <button className="btn">Sign Out</button>
            ) : (
              <button className="btn">Login</button>
            )}
            {/* <span>{user?.displayName && user.displayName}</span> */}
          </div>
        </div>
      </div>
    </header>
  );
}
