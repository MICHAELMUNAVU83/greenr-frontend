import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './MyCarbonCredit.css'

function MyCarbonCredits({ loggedInUserId }) {
  const [carbonCredits, setCarbonCredits] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/my_carbon_credits/${loggedInUserId}`)
      .then((res) => res.json())
      .then((data) => {
        setCarbonCredits(data);
      });
  }, []);
  return <>
     <p className="title">My Carbon Credits</p>
     <div className="gridcard">
     {carbonCredits.map((credit)=>(
      <div className="Card1">
      <img src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="image"/>
      <p><Link>{credit.source}</Link></p>
      <p>At a price of ${credit.price}, 10,000 {credit.source} planted on 2 acres of land.</p>
      <p>Offsetting {credit.amount} of C02</p>
      </div>
    ))}
  </div>
  </>
}

export default MyCarbonCredits;
