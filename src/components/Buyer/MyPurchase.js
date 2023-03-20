import React from "react";
import "./MyPurchases.css";
import { IoLocationOutline } from "react-icons/io5";

const MyPurchase = ({ content }) => {
  return (
    <>
      {content.map((purchase) => (
        <div className="Card">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt={purchase.carbon_credit.source}
          />
          <p className="p6">{purchase.carbon_credit.source}</p>
          <p className="p1">
            <IoLocationOutline style={{ paddingRight: "5px" }} />
            {purchase.buyer_location}
          </p>
          <p className="p2">
            <span>Phone No:</span>
            <span>{purchase.buyer_phone_number}</span>
          </p>
          <p className="p3">
            <span>Amount:</span>
            <span>{purchase.carbon_credit.amount} Kgs</span>
          </p>
          <p className="p5">
            <span>Price:</span>
            <span>{purchase.carbon_credit.price} USD</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default MyPurchase;
