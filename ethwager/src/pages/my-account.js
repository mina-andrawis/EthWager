import React from 'react';
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
        <h1>{token[0].email ? `Logged in as ${token[0].email}` : 'Not logged in'}</h1>
      </div>
    </div>
  );
}
export default MyAccount;
