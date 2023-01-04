import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Header/Hero/Hero';
import Navigation from './components/Header/Navigation/Navigation';
import './App.css';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
