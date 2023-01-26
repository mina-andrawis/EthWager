import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useToken from "./hooks/useToken";
import Home from "./pages/home"
import About from "./pages/about"
import MyAccount from "./pages/my-account"
import Navbar from "./c_navbar/navbar"
import Login from "./c_login_register/login"
import Register from "./c_login_register/register"
import Header from "./c_header/header"

const App = () => {
  
  const { setToken } = useToken();

  return (
    <div className="App">

      <BrowserRouter>
      <Header/>

        {/* <Navbar /> */}
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/my-account' element={<MyAccount/>} />
          <Route path='/login' element={<Login setToken={setToken}/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
