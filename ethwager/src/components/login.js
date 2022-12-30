import "../styles/loginRegister.css";

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    try {
      const { data } = await axios.get("http://localhost:3001/users", { email, password });
      // do something with the returned user data
      console.log(data);

      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // do something with the user data
        console.log("user is found");
        setIsLoggingIn(false);
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
    <form onSubmit={handleSubmit} className="login-container">
      {error && <div className="error">{error.message}</div>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit" disabled={isLoggingIn}>
        {isLoggingIn ? 'Logging in...' : 'Log In'}
      </button>
    </form>
  );
}

export default Login;