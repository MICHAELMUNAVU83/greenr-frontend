import React from "react";
import { Link } from "react-router-dom";
import "./CarbonStyle.css";


function CarbonCredit(props) {
  
  

  return (
    <>
      {props.content.map(
        (carbons) =>
          carbons.approved === true && (
            <div className="Card">
              <img
                src= {carbons.image}
                alt="image"
              />
              <p>
                <Link>{carbons.source}</Link>
              </p>
              <p>
                At a price of ${carbons.price}, 10,000 {carbons.source} planted
                on 2 acres of land.
              </p>
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
          )
      )}
    </>
  );
}

export default CarbonCredit;