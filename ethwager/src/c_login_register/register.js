import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./loginRegister.module.css";
import classnames from 'classnames';
import axios from 'axios';

function Register() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const checkUser = async (email) => {
    try {
      const { data } = await axios.get("http://localhost:3001/users", { email });
      const user = data.find(
        (user) => user.email === formData.email
      );
  
      return Boolean(user); // return true if user is found, false otherwise
    } catch (error) {
      setError(error);
      return false;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userExist = await checkUser(formData.email);
      
      if (userExist) {
        setMessage('A user with that email already exists');
        return;
      } 
      await axios.post("http://localhost:3001/auth/register", formData);
      setMessage('Successfully registered');
      setError(false);
    } catch (error) {
        setError(error);
    }

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
      <form onSubmit={handleSubmit} className={styles.loginContainer}>
        
        <button className={styles.titleBackBtn}>
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
        <button className={classnames(styles.fancyButton, styles.defaultBtn)} type="submit">Register</button>

      </form>
      {message && <div className={styles.message}>{message}</div>}
      {error && <div className={classnames(styles.error, styles.message)}>{error.message}</div>}

    </>
  );
}

export default Register;
