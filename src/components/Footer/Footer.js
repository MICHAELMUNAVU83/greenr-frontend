import React from "react";
import greenrlogo from "../Images/greenrlogo.png";
import {FaPhoneAlt,FaEnvelope,FaRegBuilding } from "react-icons/fa";


function Footer() {
  return(  
   <div className="bg-green p-4">
    <div className="container">
     <div className="row">
      <div className="col-md-3">
        <img src={greenrlogo} className="img-fluid" alt="logo"  />
      </div>
      <div className="col-md-3 text-white ">
        <h5> USEFUL LINKS </h5>
          <p>Blog</p>
          <p>Service</p>
          <p>Contact</p>
          <p>Privacy Policy </p>
      </div>
      <div className="col-md-3 text-white  ">
        <h5 > SERVICES</h5>
        <p>About Us</p>
        <p>Terms and Conditions</p>
        <p>Investor Relations </p>
        <p>Careers </p>
      </div>
      <div className="col-md-3 text-white  ">
        <h5> CONTACT</h5>
        <p><FaRegBuilding /> 33 C Awolo road Lagos</p>
        <p><FaPhoneAlt/> +234 903 6044 855 </p>
        <p><FaEnvelope color="white"/> Info@greenr.com </p>

      </div>
     </div>
     
  
    </div>
    </div>
  );
}


export default Footer;
