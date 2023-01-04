import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import headerlogo from "../Images/headerlogo.png";

function SellerNavbar({ setStoredToken }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <img src={headerlogo} alt="headerlogo" />
      <ul className="nav nav-fill" >
        <li className="nav-item ">
          <Link className="nav-link green-active" data-mdb-toggle="pill" to="/" >Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link green-active" to="/mycarboncredits">My Carbon Credits</Link>
          </li>
        <li className="nav-item ">
          <Link className="nav-link green-active" to="/newcarboncredit">Add New Carbon Credit</Link>
          </li>
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

export default SellerNavbar;
