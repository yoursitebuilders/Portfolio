import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OwerView from './components/OwerView';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <OwerView/>
    </div>
  );
}

export default App;
