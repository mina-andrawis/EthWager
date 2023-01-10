import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "../styles/loginRegister.css";
import "../styles/modal.css";

function Register() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  // const checkUser = async (email) => {
  //   try {
  //     const { data } = await axios.get("http://localhost:3001/users", { email });
  //     const user = data.find(
  //       (user) => user.email === formData.email
  //     );

  //     if (user) {
  //       setMessage("This email is already registered");
  //       return true;
  //       } 
  //   }
  //   catch (error) {
  //     setError(error);
  //     return false;
  //   }
  // };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (checkUser(formData.email)) {
    //   return;
    // } else {
    axios.post("http://localhost:3001/register", formData)
      .then((response) => {
        console.log(response.data);
        
        setMessage('Successfully registered');
        setError(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  //}
  
  if (formData.email === "" || formData.password === "") {
    setMessage("Please fill in all fields");
    setError(false);
  }
}

  useEffect(() => {
    // clear message after 3 seconds
    const timer = setTimeout(() => {
      setMessage('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
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
      {message && <div className="message">{message}</div>}
      {error && <div className="error message">{error.message}</div>}

    </>
  );
}

export default Register;
