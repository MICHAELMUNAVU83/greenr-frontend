import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
function SignUp({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/v1/users", {
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
  };
  return (
    <div className="app">
      <div className="form">
     <aside>
      <p>Already have an account?</p>
      <Link to="/login" className="linktag">Login</Link>
      </aside> 
      <b>Welcome</b>
      <p>Fill in details to create a Greenr Account</p>
      <form>
        <label>
          Username:
        </label>
        <input
            type="text"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <label>
          Email:
        </label>
        <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <label>
          Password:
        </label>
        <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <label>
          Select a role:
          </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default SignUp;
