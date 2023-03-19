import React, { useState, useEffect } from "react";
import "./AllPurchases.css";
import AllPurchase from "./AllPurchase";

function AllPurchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch(`https://greenr-app-backend.herokuapp.com/api/v1/purchases`, {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPurchases(data);
      });
  }, []);
  return (
    <>
      <p className="title">All Purchases</p>
      <div className="mypurchases gridcard container">
        <AllPurchase content={purchases} />
      </div>
    </>
  );
}

export default AllPurchases;
