import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUser } from "react-icons/ai"
import {BiLockAlt,BiCheckbox} from "react-icons/bi"


function Login({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          navigate("/");
        } else {
          alert("Invalid credentials");
        }
      });

    setUsername("");

    setPassword("");
  };
  return (
    <div className="Login-form-container">
      <form className="Login-form">
        <div className="Login-form-content">
          <p className="Login-form-parag">Dont have an account?<a href='signup'>Signup</a></p>
          <h3 className="Login-form-title">Welcome</h3>
          <p className="Login-form-paragraph">Login to continue</p>
          <div className="form-group mt-3">
            <label className="login-label">Username </label>
            <AiOutlineUser className="user"/>
            <input
              type="email"
              className="form-control mt-1"
              placeholder= "    Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="form-group mt-3">
            <label className="login-label">Password</label>
            <BiLockAlt className="lock"/>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="   Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <p className="remember me text-right mt-2">
           <BiCheckbox /> Remember me
          </p>
          <p className="forgot-password text-right mt-2">
            <a href="#" text-decoration> Forgot Password?</a>
          </p> */}
          <div className="d-grid gap-2 mt-3">
            <button type="submit"
             className="btn btn-success"
             onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
