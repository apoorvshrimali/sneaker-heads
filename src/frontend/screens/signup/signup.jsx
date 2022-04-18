import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  async function formHandler(e) {
    e.preventDefault();
    try {
      await axios.post("/api/auth/signup", {
        email: form.email,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
      });
      setForm({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <form onSubmit={formHandler} className="form">
      <div>
        <h2>Signup</h2>
        <div className="input-group">
          <label htmlFor="firstname">First Name</label>
          <input
            required
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            type="text"
            id="firstname"
            placeholder="Enter Username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            required
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            type="text"
            id="lastname"
            placeholder="Enter Username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>

        <button type="submit" className="primary-btn">
          Signup
        </button>
        <p>
          Already have a account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};
