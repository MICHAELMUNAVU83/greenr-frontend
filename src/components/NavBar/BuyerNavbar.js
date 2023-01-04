import React from "react";
import { Link } from "react-router-dom";
import headerlogo from "../Images/headerlogo.png";

function BuyerNavbar({ setStoredToken }) {
  return (
    <div>
      <img src={headerlogo} alt="headerlogo" />

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
