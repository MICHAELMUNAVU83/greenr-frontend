import React, { useState, useEffect } from 'react';
import './PendingCarbonCredit.css';
import PendingCarbons from './PendingCarbons';

function PendingCarbonCredits({loggedInUserId}) {

  const [pendingCard, setPendingCard] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/carbon_credits/${loggedInUserId}`, {
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
  }, []);

  return (
    <>
      <p className="title">Pending Carbon Projects</p>
      <div className="gridcard">
        <PendingCarbons content={pendingCard} />
      </div>  
    </>
  )
}
  
export default PendingCarbonCredits;