import axios from "axios";
import { useUser } from "frontend/context";
import { setLocalStorage } from "frontend/helpers";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
export const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const { setUser } = useUser();

  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
      const {
        data: { encodedToken, foundUser },
      } = await axios.post("/api/auth/login", {
        email: form.email,
        password: form.password,
      });
      console.log(foundUser);
      setLocalStorage("token", encodedToken);
      setUser(foundUser);
      navigate("/products");
      setError(false);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <div>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="text"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            id="password"
            placeholder="Enter Password"
          />
        </div>
        {error && (
          <p className="error">You have entered incorrect credentials</p>
        )}
        <button className="primary-btn">Login</button>
        <p>
          Not a member yet?{" "}
          <Link className="link" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </form>
  );
};
