import React from "react";
import { Link, useNavigate } from "react-router-dom";
import headerlogo from "../Images/headerlogo.png";

function SellerNavbar({ setStoredToken }) {
  const navigate = useNavigate();
  return (
    <div>
      <img src={headerlogo} alt="headerlogo" />

      <Link to="/">Home</Link>
      <Link to="/mycarboncredits">My Carbon Credits</Link>
      <Link to="/newcarboncredit">Add New Carbon Credit</Link>
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

export default SellerNavbar;
