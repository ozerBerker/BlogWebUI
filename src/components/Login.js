import React, { useState, useRef } from "react";
import axios from "../api/axios";

const LOGIN_URL = "/Auth/Login";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const data = {
    userEmail: "admin@example.com",
    userPassword: "Admin12345.",
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh

    axios
      .post(LOGIN_URL, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form action="" id="login" method="post" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p className="item">
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={"admin@example.com"}
          />
        </p>
        <p className="item">
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={"Admin12345."}
          />
        </p>
        <p className="item">
          <input type="submit" value="Login" />
        </p>
      </form>
    </div>
  );
};

export default Login;
