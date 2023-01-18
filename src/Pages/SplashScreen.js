import React from "react";
import { Link } from "react-router-dom";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";

function SplashScreen() {
  return (
    <div>
      <section className="bg-grey">
        <div className="d-flex justify-content-around container">
          <div className="text-left m-5">
            <h1 className="text-left">Offset your Carbon Emissions</h1>
            <p>Greenr makes it easy for you to buy and sell carbon credits, all towards mitigating climate change and saving our planet </p>
            <Link to="/login">
              <button
                type="button"
                style={{ backgroundColor: "#00b300", marginTop:'30px', borderRadius:'0px' }}
                className="text-white btn btn-lg border-none"
              >
                {" "}
                Get Started
              </button>
            </Link>
          </div>
          <div className="col-md-4 m-5 ">
            <img
              style={{width: "100%"}}
              src="https://api.time.com/wp-content/uploads/2018/05/forest-bathing.jpg?quality=85&w=800"
              alt="frest"
            />
          </div>
        </div>
      </section>
      <section className="services section">
        <div className="container">
          <h2 className="heading p-5 text-center">OUR SERVICES</h2>

          <div className="d-flex justify-content-center">
            <div className="border border-dark mx-2 p-1">
              <div className="d-flex justify-content-center">
                <TiHomeOutline
                style={{marginTop: '25px'}}
                  className="border border-success rounded-circle p-3"
                  color="green"
                  size={100}
                />
              </div>

              <div className="card-body text-center">
                <h3 className="card-title p-2">Buy Carbon Credits</h3>

                <p className="card-text p-3">
                  Offset your Carbon emission by purchasing credits
                </p>
                <p
                  className="underline text-decoration-underline"
                >
                  <a style={{color:'yellowgreen'}} href="/login">More details</a>
                </p>
              </div>
            </div>
            <div className="border border-dark mx-2 p-1">
              <div className="d-flex justify-content-center">
                <FaRegHandshake
                style={{marginTop: '25px'}}
                  className="border border-success rounded-circle p-3"
                  color="green"
                  size={100}
                />
              </div>

              <div className="card-body text-center">
                <h3 className="card-title p-2">Sell Carbon Credits</h3>

                <p className="card-text p-3">
                  Earn from your carbon offset projects by selling credits
                </p>
                <p
                  className="underline text-decoration-underline"
                >
                 <a style={{color:'yellowgreen'}} href="/login">More details</a>
                </p>
              </div>
            </div>
            <div className="border border-dark mx-2 p-1">
              <div className="d-flex justify-content-center">
                <FaHandHoldingWater
                style={{marginTop: '25px'}}
                  className="border border-success rounded-circle p-3"
                  color="green"
                  size={100}
                />
              </div>

              <div className="card-body text-center">
                <h3 className="card-title p-2">Track Your Impact</h3>

                <p className="card-text p-3">
                  View data on your impact in reducing climate change
                </p>
                <p
                  className="underline text-decoration-underline"
                >
                  <a style={{color:'yellowgreen'}} href="/login">More details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default SplashScreen;
