import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function MyCarbonCredits({ loggedInUserId }) {
  const [carbonCredits, setCarbonCredits] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/my_carbon_credits/${loggedInUserId}`)
      .then((res) => res.json())
      .then((data) => {
        setCarbonCredits(data);
      });
  }, []);
  return <div>
     <p className="title">My Carbon Credits</p>
     {carbonCredits.map((credit)=>(
      <div className="Card">
      <img src={credit.image} alt="image"/>
      <p><Link>{credit.source}</Link></p>
      <p>At a price of ${credit.price}, 10,000 {credit.source} planted on 2 acres of land.</p>
      <p>Offsetting {credit.amount} of C02</p>
      </div>
    ))}
  </div>;
}

export default MyCarbonCredits;
