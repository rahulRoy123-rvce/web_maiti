import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Section_r from './components/Section_r';
// import CardDefault from './components/Cards';
import Cards from './components/Cards';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar/>
        
      <Hero/>
      <Banner/>
      <Section/>
      <Section_r/>
      <Section/>
      <div className="flex flex-wrap justify-center mx-auto gap-4">
  <Cards />
  <Cards />
  <Cards />
</div>

<div className="flex flex-col justify-center mx-16 space-x-4">
<Accordian/>
</div>
<Footer/>

      
    </div>
  );
}

export default App;
