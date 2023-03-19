import React, { useState, useEffect } from "react";
import "./MyPurchases.css";
import MyPurchase from "./MyPurchase";

function MyPurchases({ loggedInUserId }) {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch(
      `https://greenr-app-backend.herokuapp.com/api/v1/my_purchases/${loggedInUserId}`,
      {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPurchases(data);
      });
  }, [purchases, loggedInUserId]);

  return (
    <>
      <p className="title">Purchased Credits</p>
      <div className="mypurchases container gridcard">
        <MyPurchase content={purchases} />
      </div>
    </>
  );
}

export default MyPurchases;
