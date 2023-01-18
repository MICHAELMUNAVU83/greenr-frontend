import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate("/");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://greenr-backend.herokuapp.com/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          role,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        console.log(data);
        setStoredToken(data.jwt);
      });

    setUsername("");
    setEmail("");
    setPassword("");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="signup-app">
      <div className="signup-form">
        <aside>
          <p>Already have an account?</p>
          <Link to="/login" className="linktag">
            Login
          </Link>
        </aside>
        <h2>Welcome</h2>
        <p className="signup-p">Fill in details to create a Greenr Account</p>
        <form>
          <label>Username</label>
          <input
            type="text"
            className="form-control signup-input"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <label>Email</label>
          <input
            type="text"
            className="form-control signup-input"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="text"
            className="form-control signup-input"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Select a role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-select"
          >
            <optgroup>
              <option value="">Select a role</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </optgroup>
          </select>

          <button className="signup-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
