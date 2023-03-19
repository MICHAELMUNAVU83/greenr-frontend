import React, { useState, useEffect } from "react";
import CarbonCredit from "./CarbonCredit";
import "./CarbonStyle.css";

function CarbonCredits() {
  const [carbonCard, setCarbonCard] = useState([]);
  useEffect(() => {
    fetch("https://greenr-app-backend.herokuapp.com/api/v1/carbon_credits")
      .then((resp) => resp.json())
      .then((data) => {
        setCarbonCard(data);
      });
  }, []);
  return (
    <>
      <p className="title">Available Carbon Projects</p>
      <div className="gridcard container">
        <CarbonCredit content={carbonCard} />
      </div>
    </>
  );
}

export default CarbonCredits;
