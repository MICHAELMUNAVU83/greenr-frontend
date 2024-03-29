import React, { useState, useEffect } from "react";
import "./PendingCarbonCredit.css";
import PendingCarbons from "./PendingCarbons";

function PendingCarbonCredits() {
  const [pendingCard, setPendingCard] = useState([]);

  useEffect(() => {
    fetch("https://greenr-app-backend.herokuapp.com/api/v1/carbon_credits", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPendingCard(data);
      });
  }, [pendingCard]);

  return (
    <>
      <p className="title">Pending Carbon Projects</p>
      <div className="gridcard container">
        <PendingCarbons content={pendingCard} />
      </div>
    </>
  );
}

export default PendingCarbonCredits;
