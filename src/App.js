import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Bestsellers from './Components/Bestsellers';
import Shirts from './Components/Shirts';
import Shoes from './Components/Shoes';
import Collections from './Components/Collections';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      
      {/* <Nav />
      <Hero />
      <Bestsellers /> 
      <Collections/>
      <Shirts />
      <Shoes /> 
      <Footer />*/}
        <Routes>
          <Route path ="tester" element = {<Home />}>
            <Route path ="women" element = {<Shirts />}/>
            <Route path ="kids" element = {<Shoes />}/>
            <Route path ="accessories" element = {<Bestsellers />}/>
            <Route path ="*" element = {<h1>Error</h1>}/>
          </Route>
        </Routes>
      

    </Router>
    </>
  );
  
}

export default App;
