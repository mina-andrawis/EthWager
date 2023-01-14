import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "../styles/loginRegister.css";
import "../styles/modal.css";

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/register", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <button className="titleBackBtn">
        <Link to="/login">←</Link>
      </button>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}/>
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}/>
      <br />
      <button className="fancyButton defaultBtn" type="submit">Register</button>
    </form>
  );
}

export default Register;
