
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OwerView from './components/OwerView';
import Footer from './Footer/Footer';
import FAQComponent from './FAQComponent';
import FeatureComponent from './FeatureComponent'
import { useRef } from 'react';


function App() {


  const contactSectionRef = useRef(null);

  const scrollToContactSection = () => {

    console.log("dfghj")
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App bg-black ">
      <Navbar contactSectionRef={contactSectionRef}  scrollToContactSection={scrollToContactSection}/>
      <Hero/>
      <OwerView/>
      <FeatureComponent/>
      <FAQComponent/>
      <div  >
       <Footer contactSectionRef={contactSectionRef} />
      </div>

     
    </div>
  );
}

export default App;
