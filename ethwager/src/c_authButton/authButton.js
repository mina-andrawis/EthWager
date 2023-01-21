import React, { useState, useEffect } from 'react';
import styles from './authButton.module.css';
import { NavLink } from 'react-router-dom';
import useToken from "../hooks/useToken";
import Login from "../c_login_register/login";

const AuthButton = () => {
    const { token } = useToken();

    return (
        <div className={styles.authButtonContainer}>
          {token ? (
            <p>Hello, {token.email}</p>
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
  