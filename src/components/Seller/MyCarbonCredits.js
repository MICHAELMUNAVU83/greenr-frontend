import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyCarbonCredit.css";

function MyCarbonCredits({ loggedInUserId }) {
  const [carbonCredits, setCarbonCredits] = useState([]);
  useEffect(() => {
    fetch(
      `https://greenr-app-backend.herokuapp.com/api/v1/my_carbon_credits/${loggedInUserId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCarbonCredits(data);
      });
  }, [carbonCredits, loggedInUserId]);
  return (
    <>
      <p className="title">My Carbon Credits</p>
      <div className="gridcard container">
        {carbonCredits.map((credit) => (
          <div className="Card1">
            <img
              src={credit.image}
              alt={credit.source}
              style={{ marginBottom: "15px" }}
            />
            <p>
              <Link className="carbon-tl">{credit.source}</Link>
            </p>
            <p style={{ height: "100px" }}>
              At a price of ${credit.price}, {credit.source} offsetting{" "}
              {credit.amount} kgs of C02 in {credit.location}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyCarbonCredits;
