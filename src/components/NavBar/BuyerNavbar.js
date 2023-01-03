import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/greenrlogo.png";

function BuyerNavbar({ setStoredToken }) {
  return (
    <div>
      <img src={logo} alt="logo" />

      <Link to="/">Home</Link>
      <Link to="/carboncredits">Buy Credits</Link>
      <button
        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default BuyerNavbar;
