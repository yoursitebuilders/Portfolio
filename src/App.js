
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OwerView from './components/OwerView';
import Footer from './Footer/Footer';
import FAQComponent from './FAQComponent';
import FeatureComponent from './FeatureComponent'


function App() {
  return (
    <div className="App bg-black ">
      <Navbar/>
      <Hero/>
      <OwerView/>
      <FeatureComponent/>
      <FAQComponent/>

      <Footer/>
    </div>
  );
}

export default App;
