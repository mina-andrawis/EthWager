import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import useToken from "../hooks/useToken";
import AuthButton from "../c_authButton/authButton";

const Header = () => {
    const { token } = useToken();

    return (
        <div className={styles.headerContainer}>
          <AuthButton />
        </div>
      );
  }

  export default Header;
  