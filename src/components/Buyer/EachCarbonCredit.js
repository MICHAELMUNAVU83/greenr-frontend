import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EachCarbonCredit.css";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const EachCarbonCredit = () => {
  const [carbon, setCarbon] = useState([]);
  const [username, setUsername] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://greenr-backend.herokuapp.com/api/v1/carbon_credits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCarbon(data);
        console.log(data);
        setUsername(data.user.username);
      });
  }, [id]);

  return (
    <div className="cc-card container">
      <img className="carbon-img" src= {carbon.image} alt={carbon.source} />
      <div className="carbondetails">
        <p className="location">
          <IoLocationOutline className="icon" />
          {carbon.location}
        </p>
        <h3 className="cc-title">
          {carbon.source} offsetting {carbon.amount} of CO2
        </h3>
        <p className="cc-seller">By {username}</p>
        <p className="cc-price">
          {carbon.price} USD
        </p>
        <p className="carbonparagraph">
          As trees grow, they take in carbon from the air and store it in wood,
          plant matter, and in the soil, making them what scientists call
          “carbon sinks.” In this way, forests play an important role in the
          global carbon cycle by soaking up lots of carbon dioxide that would
          otherwise live in the atmosphere.
        </p>

        <Link
          style={{ backgroundColor: "#00b300" }}
          className="text-white btn border-none cc-purchase"
          to={`/addpurchase/${carbon.id}`}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default EachCarbonCredit;
