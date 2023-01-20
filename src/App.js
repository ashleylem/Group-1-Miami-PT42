import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Bestsellers from './Components/Bestsellers';
import Shirts from './Components/Shirts';
import Shoes from './Components/Shoes';
import Collections from './Components/Collections';
import Template from './Components/Template';
import { Women } from './Components/Women';
import { get_product_list, get_women_bestsellers } from './asosApi';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import { Signin } from './Components/Signin';
import { Signup } from './Components/Signup';
import injectContext from './Store/appContext';

function App() {
  // get_women_bestsellers()
  return (
    <>
    <Router>
        <Routes>
          <Route path ="/" element = {<Template />}>
            <Route path ="/landing" element = {<><Bestsellers /><Collections/><Shirts /><Shoes /></>}/>
            <Route path ="/women" element = {<Women />}/>
            <Route path ="/kids" element = {<Shoes />}/>
            <Route path ="/accessories" element = {<Bestsellers />}/>
            <Route path ="*" element = {<h1>Error</h1>}/>
            <Route path="/signin" element= {<Signin/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
          </Route>
        </Routes>
      

    </Router>
    </>
  );
  
}

export default injectContext(App);
