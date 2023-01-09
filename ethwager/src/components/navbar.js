import React from 'react';
import {  Link } from "react-router-dom";
import "../styles/navbar.css"
const Navbar= () =>{
  return (
  <ul id="nav">
    <li>
      <Link to="/" className="nav-bordera">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/my-account" >My Account</Link>
    </li>
    <li>
      <a href="https://github.com/mina-andrawis" className="nav-borderb" target="_blank">Developed by Mina</a>
    </li>
  </ul>
  );
}
export default Navbar;
