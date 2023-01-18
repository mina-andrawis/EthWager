import ActiveWagers from "../c_activeWagers/activeWagers";
import Login from "../c_login_register/login"
import useToken from "../hooks/useToken"


const MyAccount = () =>{

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div>
      <div>
        <h1>{token.email ? `Logged in as ${token.email}` : 'Not logged in'}</h1>

        <ActiveWagers />
      </div>
    </div>
  );
}
export default MyAccount;
