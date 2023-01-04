import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./Pages/Home";
import SplashScreen from "./Pages/SplashScreen";
import CarbonCredits from "./components/Buyer/CarbonCredits";
import BuyerNavbar from "./components/NavBar/BuyerNavbar";
import SellerNavBar from "./components/NavBar/SellerNavBar";
import EachCarbonCredit from "./components/Buyer/EachCarbonCredit";
import Footer from "./components/Footer/Footer";
import NewCarbonCredit from "./components/Seller/NewCarbonCredit";
import MyCarbonCredits from "./components/Seller/MyCarbonCredits";
import AddPurchase from "./components/Buyer/AddPurchase";
import MyPurchases from "./components/Buyer/MyPurchases";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));

  const [role, setRole] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");
  useEffect(() => {
    fetch("/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRole(data.user.role)
        setLoggedInUserId(data.user.id)
      });
  }, [storedToken]);

  return (
    <div>
      {storedToken ? (
        <Router>
          {role === "buyer" && <BuyerNavbar setStoredToken={setStoredToken} />}
          {role === "seller" && (
            <SellerNavBar setStoredToken={setStoredToken} />
          )}
          <Routes>
            <Route
              path="/"
              element={<Home setStoredToken={setStoredToken} />}
            />
            <Route path="/carboncredits" element={<CarbonCredits />} />
            <Route
              path="/eachcarboncredit/:id"
              element={<EachCarbonCredit />}
            />
            <Route
              path="/newcarboncredit"
              element={<NewCarbonCredit loggedInUserId={loggedInUserId} />}
            />
            <Route
              path="/mycarboncredits"
              element={<MyCarbonCredits loggedInUserId={loggedInUserId} />}
            />
            <Route
              path="/addpurchase/:id"
              element={<AddPurchase loggedInUserId={loggedInUserId} />}
            />
            <Route
              path="/mypurchases"
              element={<MyPurchases loggedInUserId={loggedInUserId} />}
            />
            <Route
              path="/addpurchase"
              element={<AddPurchase />}
            />
          </Routes>
          
          <Footer />
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route
              path="/signup"
              element={<SignUp setStoredToken={setStoredToken} />}
            />
            <Route
              path="/login"
              element={<Login setStoredToken={setStoredToken} />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
