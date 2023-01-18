import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EachCarbonCredit.css";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const EachPendingCarbonCredit = () => {
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
  }, []);

  return (
    <div className="carboncreditcard ">
      <p className="victoriaparagraph">
        <IoLocationOutline />
        {carbon.location}
      </p>
      <img
        className="img"
        src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
        alt="image"
      />
      <div className="carbondetails">
        <h3 className="h3">
          10,000 trees planted on 2 acres of land. Offsetting 2T of Co2
        </h3>
        <p className="paragraph1">By {username}</p>
        <button type="button" className="btn btn-outline-success ">
          {carbon.price}
        </button>
        <p className="carbonparagraph">
          As trees grow, they take in carbon from the air and store it in wood,
          plant matter, and in the soil, making them what scientists call
          “carbon sinks.” In this way, forests play an important role in the
          global carbon cycle by soaking up lots of carbon dioxide that would
          otherwise live in the atmosphere.
        </p>

      </div>
    </div>
  );
};

export default EachPendingCarbonCredit;