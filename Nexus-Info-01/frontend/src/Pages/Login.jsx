import React from "react";
import "./Login.css"

const Login = () => {
  return (
    <div className="container2">
      <form action="#">
        <div className="form-group">
          <label htmlFor="username">EmailID:</label>
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
