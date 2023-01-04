import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import headerlogo from "../Images/headerlogo.png";

function SellerNavbar({ setStoredToken }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
      <img src={headerlogo} alt="headerlogo" style={{width: '100px'}} />
      <ul className="nav nav-fill" >
        <li className="nav-item ">
          <Link className="nav-link green-active"  activeStyle={{ backgroundColor:"ffff" }} data-mdb-toggle="pill" to="/" >Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link green-active" data-mdb-toggle="pill" to="/mycarboncredits">My Carbon Credits</Link>
          </li>
        <li className="nav-item ">
          <Link className="nav-link green-active"  activeStyle={{ backgroundColor: "#ffff "}} data-mdb-toggle="pill"  to="/newcarboncredit">Add New Carbon Credit</Link>
          </li>
      </ul>
      
      
      <button
      style={{ backgroundColor: "#00b300"}}
      className="text-white btn border-none"
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
