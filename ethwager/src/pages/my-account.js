import AllWagers from "../c_allWagers/allWagers";
import Login from "../c_login_register/login"
import useToken from "../hooks/useToken"
import AuthButton from "../c_authButton/authButton.js"


const MyAccount = () =>{

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div>
      <div>
        {/*<h1>{token.email ? `Logged in as ${token.email}` : 'Not logged in'}</h1>*/}

        <AllWagers />
      </div>
    </div>
  );
}
export default MyAccount;
