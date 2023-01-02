import React from "react";
import { Link } from "react-router-dom";
import "./CarbonStyle.css"

function CarbonCredit(props) {
  return (
  <>
  {props.content.map((carbons)=>(
      <div className="Card">
      <img src={carbons.image} alt="image"/>
      <Link>Victoria Island, <p>Lagos</p></Link>
      <p>At a price of ${carbons.price}, 10,000 {carbons.source} planted on 2 acres of land.</p>
      <p>Offsetting {carbons.amount} of C02</p>
      </div>
      
    ))}
  </>
)
}

export default CarbonCredit;
