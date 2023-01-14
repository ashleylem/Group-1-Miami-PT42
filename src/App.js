import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Bestsellers from './Components/Bestsellers';
import Shirts from './Components/Shirts';
import Shoes from './Components/Shoes';
import Collections from './Components/Collections';

function App() {
  return (
    <>
    <Nav />
    <Hero />
    <Bestsellers />
    <Collections/>
    <Shirts />
    <Shoes />
    <Footer />
    </>
  );
  
}

export default App;
