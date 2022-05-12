import React from "react";
import manage from "../../images/manage.jpg";
import "./StoreManage.css";
const StoreManage = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="mt-5 pt-4 mb-3">
              <h3>INVENTORY & STORE MANAGEMENT</h3>
              <div className="section-title">
                <h2>Manage it your way</h2>
                <p>
                  Manage your orders, inventory, payments, and your entire
                  back-office operations on your own terms.
                </p>
                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <img src={manage} className="img-fluid mb-3" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreManage;
