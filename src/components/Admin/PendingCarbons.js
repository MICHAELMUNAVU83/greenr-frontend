import React, { useState, useEffect } from 'react';
import './PendingCarbonCredits.css';
import PendingCarbonCredits from './PendingCarbonCredits';

const PendingCarbons = () => {

  const [pendingCard, setPendingCard] = useState([]);

  useEffect(() => {
    fetch("/api/v1/carbon_credits")
      .then((resp) => resp.json())
      .then((data) => {
        setPendingCard(data);
      });
  }, []);

  return (
    <>
      <p className="title">Pending Carbon Projects</p>
      <div className="gridcard">
        <PendingCarbonCredits content={pendingCard} />
      </div>
      
    </>
  )
}

export default PendingCarbons