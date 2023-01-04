import React from "react";
import { Link } from "react-router-dom";
import headerlogo from "../Images/headerlogo.png";

function SellerNavbar({ setStoredToken }) {
  return (
    <div>
      <img src={headerlogo} alt="headerlogo" />

      <Link to="/">Home</Link>
      <Link to="/mycarboncredits">My Carbon Credits</Link>
      <Link to="/newcarboncredit">Add New Carbon Credit</Link>
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

export default SellerNavbar;
