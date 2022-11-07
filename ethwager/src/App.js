import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/home"
import About from "./pages/about"
import MyAccount from "./pages/my-account"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/my-account' element={<MyAccount/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
