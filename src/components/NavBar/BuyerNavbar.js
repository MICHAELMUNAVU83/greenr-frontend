import React from "react";
import { Link } from "react-router-dom";

function BuyerNavbar({ setStoredToken }) {
    
  return (
    <div>
    
      <Link to="/">Home</Link>
      <Link to="/carboncredits">Carbon Credits</Link>
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
