import React from "react";
import { Link } from "react-router-dom";
import "./CarbonStyle.css";

function CarbonCredit(props) {
  return (
    <>
      {props.content.map(
        (carbons) =>
          carbons.approved === true &&
          !carbons.purchase && (
            <div className="Card">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt={carbons.source}
                style={{ marginBottom: "15px" }}
              />
              <p>
                <Link
                  className="carbon-tl"
                  to={`/eachcarboncredit/${carbons.id}`}
                >
                  {carbons.source}
                </Link>
              </p>
              <p style={{ height: "100px" }}>
                At a price of ${carbons.price}, {carbons.source} Offsetting{" "}
                {carbons.amount} kgs of C02
              </p>
              <Link
                to={`/eachcarboncredit/${carbons.id}`}
                className="carbon-det"
              >
                More details
              </Link>
            </div>
          )
      )}
    </>
  );
}

export default CarbonCredit;
