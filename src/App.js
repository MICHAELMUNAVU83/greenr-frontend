import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
import Login from "./components/Login/Login";
import Home from "./Pages/Home";
import SplashScreen from "./Pages/SplashScreen";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [name, setName] = useState("");
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
      .then((data) => setName(data.user.username));
  }, [storedToken]);

  return (
    <div>
      {storedToken ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home setStoredToken={setStoredToken} />} />
            <Route
              path="/hello"
              element={<Hello setStoredToken={setStoredToken} name={name} />}
            />
          </Routes>
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
