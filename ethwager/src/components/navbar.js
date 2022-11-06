import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/my-account">My Account</Link>
    </li>
    <li>
      <Link to="/developed-by-mina">Developed by Mina</Link>
    </li>
  </div>
  );
}
export default Navbar;
