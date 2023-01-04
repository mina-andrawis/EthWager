import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import MyAccount from "./pages/my-account"
import Navbar from "./components/navbar"
import Login from "./components/login"
import Register from "./components/register"

function App() {

  function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }
  
  function getToken() {
  }
  


  return (
    <div className="App">


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/my-account' element={<MyAccount/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
