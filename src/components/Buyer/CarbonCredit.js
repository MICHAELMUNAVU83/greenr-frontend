import React from "react";
import { Link } from "react-router-dom";
import "./CarbonStyle.css"
import { useNavigate } from "react-router-dom";

function CarbonCredit(props) {
const navigate = useNavigate();
  return (
  <>
  {props.content.map((carbons)=>(
      <div className="Card">
      <img src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="image"/>
      <p><Link>{carbons.source}</Link></p>
      <p>At a price of ${carbons.price}, 10,000 {carbons.source} planted on 2 acres of land.</p>
      <p>Offsetting {carbons.amount} of C02</p>
      <Link
     to={`/eachcarboncredit/${carbons.id}`}
  //    onClick={(e) => {
  //   e.preventDefault();
  //   navigate("/eachcarboncredit/:id");
  // }}
 >
  More details
  </Link>
      </div>
    ))}
  </>
)
}

export default CarbonCredit;
