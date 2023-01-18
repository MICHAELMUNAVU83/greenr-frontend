import React from "react";
import { Link } from "react-router-dom";
import "./PendingCarbonCredit.css";

const PendingCarbons = ({ content }) => {
  const handleClick = (id) => {
    fetch(`https://greenr-backend.herokuapp.com/api/v1/carbon_credits/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ approved: true }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <>
      {content.map(
        (carbonCredit) =>
          carbonCredit.approved === false && (
            <div className="Card">
              <img
                src={carbonCredit.image}
                alt="image"
              />
              <p className="p1">
                <Link className="carbon-tl" style={{height:'max-content'}}>{carbonCredit.source}</Link>
              </p>
              <p className="p2">
                {" "}
                At a price of ${carbonCredit.price}, 10,000{" "}
                {carbonCredit.source} planted on 2 acres of land.
              </p>
              <p className="p3">Offsetting {carbonCredit.amount} of C02</p>
              <p>
                <button
                  className="btn carbon-det"
                  style={{marginTop:'20px'}}
                  onClick={() => {
                    {
                      handleClick(carbonCredit.id);
                    }
                  }}
                >
                  APPROVE
                </button>
              </p>
              {/* <Link
          to={`/eachcarboncredit/${carbonCredit.id}`}
         >
         More details
       </Link> */}
            </div>
          )
      )}
    </>
  );
};

export default PendingCarbons;
