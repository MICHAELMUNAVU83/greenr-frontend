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
                src={carbons.image}
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
