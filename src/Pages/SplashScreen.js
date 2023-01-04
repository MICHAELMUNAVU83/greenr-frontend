import React from "react";
import { Link } from "react-router-dom";
// import service1 from "../components/Images/service1.png";
// import service2 from "../components/Images/service2.png";
import {FaRegHandshake} from 'react-icons/fa';
import {FaHandHoldingWater} from 'react-icons/fa';
import { TiHomeOutline } from "react-icons/ti";


function SplashScreen() {
  return (
    <div>
       <section className="bg-grey">
      {/* <div className="header">  */}
      <div className="d-flex justify-content-around">
      <div className="col-md-5 p-5 text-center">
        <h2 className="m-5"> Offset your </h2>
        <h2 >carbon emission </h2>
        <p className="m-5">Greenr makes it easy for you to buy and sell carbon credits </p>
        <Link to="/signup"><button type="button" className="btn btn-success btn-lg text-white me-md-2 "> Get Started</button></Link>
      </div>
      <div className="col-md-4 m-5 ">
        <img className=" img-fluid" src="https://api.time.com/wp-content/uploads/2018/05/forest-bathing.jpg?quality=85&w=800" alt="frest"/>

      </div>
      </div>

      </section>
      <section className="services section">
        <div className="container">
          <div className="row px-3">
            <div className="col-md-12 mb-4 text-center">
              <h2 className="heading p-5">OUR SERVICES</h2>
             
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="rounded-circle m-5 border border-success">
                <TiHomeOutline className="p-4" color="green"  size="2x"/>
                {/* <img src="https://w7.pngwing.com/pngs/787/911/png-transparent-computer-icons-garden-natural-icon-angle-leaf-building.png" className="w-100 border-bottom px-5" alt="services" /> */}
                {/* <img className="card-img-top p-4 " src={service1} alt="home"/> */}
                </div>
              </div>
                <div className="card-body text-center">
                  
                  <h3 className="card-title p-2">Buy Carbon Credits</h3>
                 
                  <p className="card-text p-3">Offset your Carbon emission by purchasing credits</p>
                  <Link to="/services" className="underline text-decoration-underline">More details</Link>
              </div>

            </div>
            <div className="col-md-4 text-center">
              <div className="card">
              <div className="rounded-circle m-5 border border-success ">
               <FaRegHandshake className="p-4" color="green" size="2x"/>
                </div>
                </div>

                <div className="card-body">
                  <h3 className="card-title p-2">Sell Carbon Credits</h3>
                  <p className="card-text p-3">Earn from your carbon offset projects by selling credits</p>
                  <Link to="/services" className="underline text-decoration-underline">More details</Link>
              </div>

            </div>
            <div className="col-md-4 text-center">
              <div className="card">
              <div className="rounded-circle m-5 border border-success ">
              <FaHandHoldingWater className="p-6" color="green"  size="2x"/>
                </div>
                
             
              </div>
                <div className="card-body">
                  <h3 className="card-title p-2">Track Your Impact</h3>
                  <p className="px-4">View data on your impact in reducing climate change</p>
                  <Link to="/services"className="underline text-decoration-underline">More details</Link>
                </div>
              

            </div>
           </div>
        </div>
      </section>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
}

export default SplashScreen;


