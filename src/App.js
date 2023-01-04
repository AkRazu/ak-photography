import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Header/Hero/Hero';
import Navigation from './components/Header/Navigation/Navigation';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
    </div>
  );
}

export default App;
