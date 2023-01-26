import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import AuthButton from "../c_authButton/authButton";
import Navbar from "../c_navbar/navbar";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
          <Navbar />
          <AuthButton />
        </div>
      );
  }

  export default Header;
  