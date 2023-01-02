import React,{useState, useEffect} from "react";
import CarbonCredit from "./CarbonCredit";

function CarbonCredits() {
const [carbonCard, setCarbonCard]=useState([]);
useEffect(() => {
  fetch("/api/v1/carbon_credits")
  .then((resp)=> resp.json())
  .then((data)=>{
    setCarbonCard(data);
  });
}, []);
  return <div>
    <CarbonCredit content={carbonCard}/>
  </div>;
}

export default CarbonCredits;
