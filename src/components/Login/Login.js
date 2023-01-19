import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt, BiCheckbox } from "react-icons/bi";

function Login({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://greenr-backend.herokuapp.com/api/v1/login", {
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
    <div className="login-container container">
      <form className="login-form">
        <div className="login-form-content">
          <p className="login-form-parag">
            Don't have an account?<a href="signup">Signup</a>
          </p>
          <h3 className="login-form-title">Welcome</h3>
          <p className="login-form-paragraph">Login to continue</p>
          <div className="form-group mt-3">
            <label className="login-label">Username </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="    Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label className="login-label">Password</label>
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
            <button
              type="submit"
              style={{
                backgroundColor: "#2ECC71",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
              }}
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
