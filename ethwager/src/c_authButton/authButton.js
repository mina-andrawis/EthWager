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

    var token = localStorage.getItem('token');
    var email = JSON.parse(token)?.email; 
    return (
        <div className={styles.authButtonContainer}>
          {token ? (
            <>
              <p>Hello, {email}</p>
              <button onClick={logout}><p>Logout</p></button>
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
  