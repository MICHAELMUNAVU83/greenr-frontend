import React from "react";
import "./AllPurchases.css";
import { IoLocationOutline } from "react-icons/io5";

const AllPurchase = ({ content }) => {
    return (
      <>
        {content.map((purchase) => (
          <div className="Card">
            <img
              src= {purchase.carbon_credit.image}
              alt="Carbon-credits"
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
  export default AllPurchase;