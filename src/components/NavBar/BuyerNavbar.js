import React from "react";
import { Link, useNavigate } from "react-router-dom";
import headerlogo from "../Images/headerlogo.png";

function BuyerNavbar({ setStoredToken }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <img src={headerlogo} alt="headerlogo" />
      <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <ul className="navbar-nav">
      <li className="nav-item"><Link className="nav-link" to="/" >Home</Link> </li>
      <li className="nav-item"><Link className="nav-link" to="/carboncredits">Buy Credits</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/mypurchases">My Purchases</Link></li>

      {/* <Link to="/">Home</Link>
      <Link to="/carboncredits">Buy Credits</Link>
      <Link to="/mypurchases">My Purchases</Link> */}
    </ul>

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
    </nav>
  );
}

export default BuyerNavbar;
