import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
     setErr(false);
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setErr(true);
      console.log("Couldn't register this user:", err);
    }

    // .then(res=>console.log(res))
    // .catch(err=>console.log("Couldn't register the user!"))
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="username"
          className="registerInput"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          name="email"
          className="registerInput"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          name="password"
          className="registerInput"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {err && <span style={{ color: "red", marginTop: "10px"}}>Something went wrong!</span>}
    </div>
  );
}

export default Register;
