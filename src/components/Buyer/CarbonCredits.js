import React,{useState, useEffect} from "react";
import CarbonCredit from "./CarbonCredit";
import "./CarbonStyle.css"

function CarbonCredits() {
const [carbonCard, setCarbonCard]=useState([]);
useEffect(() => {
  fetch("/api/v1/carbon_credits")
  .then((resp)=> resp.json())
  .then((data)=>{
    setCarbonCard(data);
  });
}, []);
  return(
  <div className="gridcard"> 
    <CarbonCredit content={carbonCard}/>
  </div>)
}

export default CarbonCredits;
