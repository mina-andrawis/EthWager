import React from 'react';
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar= () =>{
  return (
  <ul className={styles.nav}>
    <li>
      <Link to="/" className={styles.navBordera}>Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/my-account" >My Account</Link>
    </li>
    <li>
      <a href="https://github.com/mina-andrawis" className={styles.navBorderb} target="_blank" rel="noreferrer">Developed by Mina</a>
    </li>
  </ul>
  );
}
export default Navbar;
