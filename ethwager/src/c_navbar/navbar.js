import React from 'react';
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar= () =>{
  return (
  <>
  <ul className={styles.nav}>
    <li>
      <Link to="/" className={styles.navBordera}>Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/my-account" className={styles.navBorderb}>My Account</Link>
    </li>
  </ul>
  </>
  );
}
export default Navbar;
