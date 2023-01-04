import React, {useState} from 'react';
import Login from "../components/login"
import useToken from "../hooks/useToken"


const MyAccount = () =>{

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div>
      <div>
        <h1>This is the My Account page.</h1>
      </div>
    </div>
  );
}
export default MyAccount;
