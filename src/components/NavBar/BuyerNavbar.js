import React from "react";
import { Link, useNavigate } from "react-router-dom";
import headerlogo from "../Images/headerlogo.png";

function BuyerNavbar({ setStoredToken }) {
  const navigate = useNavigate();
  return (
    <div>
      <img src={headerlogo} alt="headerlogo" />

      <Link to="/">Home</Link>
      <Link to="/carboncredits">Buy Credits</Link>
      <Link to="/mypurchases">My Purchases</Link>

      <button
        onClick={() => {
          navigate("/");
          setTimeout(() => {
            localStorage.setItem("token", "");
            setStoredToken("");
          }, 1000);
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default BuyerNavbar;
