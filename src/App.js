import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Header/Hero/Hero';
import './App.css';
import Footer from './components/Footer/Footer';
import { Route, Routes } from "react-router-dom"
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/Sign/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Sign/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
