import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
//import useToken from '../hooks/useToken'
import "./loginRegister.css";


const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);

  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    try {
      const { data } = await axios.get("http://localhost:3001/users", { email, password });
      console.log(data);

      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // set token to store pass as a prop to store login data in local memory
        console.log(token);
        var token = user;
        setToken(token);
        setError(false);
        setIsLoggingIn(false);
        window.location.reload();
      } else {
        setError(new Error("Incorrect email or password"));
        setIsLoggingIn(false);
      }
    } catch (error) {
      setError(error);
      setIsLoggingIn(false);
    }
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} className="login-container">
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <>
          <button className="fancyButton defaultBtn" type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? 'Logging in...' : 'Log In'}
          </button>
        </>
        <p>If you do not have an account, register <Link to="/register">here</Link></p>
      </form>
      {error && <div className="error message">{error.message}</div>}
      
    </>
  );
}

export default Login;