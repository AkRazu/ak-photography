import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Header/Hero/Hero';
import './App.css';
import Footer from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom"
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/Sign/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Sign/Login/Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
