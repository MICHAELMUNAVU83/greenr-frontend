import React, { useState, useEffect } from "react";
import "./MyPurchases.css";

const MyPurchase = ({ content }) => {
  return (
    <>
      {content.map((purchase) => (
        <div className="Card">
          <img
            src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            alt="image"
          />
          <p>inm</p>
        </div>
      ))}
    </>
  );
};

export default MyPurchase;
