import React, { useState, useEffect } from 'react';
import styles from './authButton.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import useToken from "../hooks/useToken";

const AuthButton = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()

    const logout = () => {
      localStorage.removeItem("token");
      
      window.location.reload();
    }

    const token = localStorage.getItem('token');

    return (
        <div className={styles.authButtonContainer}>
          {token ? (
            <>
              <p>Hello, {token.email}</p>
              <p><button onClick={logout}>Logout</button></p>
            </>
          ) : ( 
            <>
                <NavLink to="/register"><p>Register</p></NavLink>
                <NavLink to="/login"><p>Login</p></NavLink>
            </>
          )}
        </div>
      );
  }

  export default AuthButton;
  