import React from "react";
import "./MyPurchases.css";
import { IoLocationOutline } from "react-icons/io5";

const MyPurchase = ({ content }) => {
  return (
    <>
      {content.map((purchase) => (
        <div className="Card">
          <img
            src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            alt="image"
          />
           <p className="p6">{purchase.carbon_credit.source}</p>
          <p className="p1"> <IoLocationOutline />{purchase.buyer_location}</p>
          <p className="p2">Phone No: {purchase.buyer_phone_number}</p>
          <p  className="p3">Amount: {purchase.carbon_credit.amount}</p>
          <p  className="p4">Location: {purchase.carbon_credit.location}</p>
          <p className="p5">Price: {purchase.carbon_credit.price}</p>
        </div>
      ))}
    </>
  );
};

export default MyPurchase;
