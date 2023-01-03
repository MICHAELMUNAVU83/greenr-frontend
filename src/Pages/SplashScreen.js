import React from "react";
import { Link } from "react-router-dom";
import {FaRegHandshake} from 'react-icons/fa';


function SplashScreen() {
  return (
    <div>
       <section className="bg-grey">
      {/* <div className="header">  */}
      <div className="row ">
      <div className="col-md-5 p-5 text-center">
        <h3 className="m-5"> Offset your carbon emission </h3>
        <h5 className="m-5">Greenr makes it easy for you to buy and sell carbon credits </h5>
        <button type="button" className="btn bg-green btn-outline-success "> Get Started</button>
      </div>
      <div className="col-md-4 m-5 bg-c-green">
        <img className=" img-fluid" src="https://api.time.com/wp-content/uploads/2018/05/forest-bathing.jpg?quality=85&w=800" alt="frest"/>

      </div>
      </div>

      </section>
      <section className="services section">
        <div className="cointainer">
          <div className="row px-3">
            <div className="col-md-12 mb-4 text-center">
              <h2 className="heading">OUR SERVICES</h2>
             
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img className=" px-5"src="https://w7.pngwing.com/pngs/787/911/png-transparent-computer-icons-garden-natural-icon-angle-leaf-building.png" className="w-100 border-bottom" alt="services" />
              </div>
                <div className="card-body text-center">
                  
                  <h3>Buy Carbon Credits</h3>
                 
                  <p>Offset your Carbon emission by purchasing credits</p>
                  <Link to="/services" className="underline">More details</Link>
              </div>

            </div>
            <div className="col-md-4 text-center">
              <div className="card shadow">
                {/* <img src={hme2} className="w-100 border-bottom" alt="services" /> */}

                <div className="card-body">
                  <h3>Sell Carbon Credits</h3>
                  <p>Earn from your carbon offset projects by selling credits</p>
                  <Link to="/services" className="underline">More details</Link>
                </div>
              </div>

            </div>
            <div className="col-md-4 text-center">
              <div className="card shadow mx-auto">
                
              <FaRegHandshake color="green"  size="8x"/>
              </div>
                {/* <img src={hme3} className="w-100 border-bottom" alt="services" /> */}
                <div className="card-body">
                  <h3>Track Your Impact</h3>
                  <p className="px-4">View data on your impact in reducing climate change</p>
                  <Link to="/services" className="underline">More details</Link>
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
