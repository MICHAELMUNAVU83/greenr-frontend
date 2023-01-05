import React, { useState, useEffect } from "react";
import "./MyPurchases.css";
import MyPurchase from "./MyPurchase";

function MyPurchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch("/api/v1/my_purchases/3", {
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
      <p className="title">Purchased Credits</p>
      <div className="mypurchases">
        <MyPurchase content={purchases} />
      </div>
      <div className="d-flex justify-content-center">
        {" "}
        <button className="btn btn-outline-success text-center">
          {" "}
          Buy Carbon Credits{" "}
        </button>
      </div>
    </>
  );
}

export default MyPurchases;
