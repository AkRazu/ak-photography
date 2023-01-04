import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Header/Hero/Hero';
import Navigation from './components/Header/Navigation/Navigation';
import './App.css';
import Footer from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom"
import Checkout from './components/Checkout/Checkout';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
