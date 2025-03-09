
import './App.css';
import Navbar from './Components/Navbar/Navbar';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import LoginSignup from './Pages/LoginSignup';
//import Shop from './Pages/Shop';
//import Home from './Pages/Home';
//import Cart from './Pages/Cart';
//import Product from './Pages/Product';
import LipPlumperSection from './Components/LipPlumperSection/LipPlumperSection';
import LipCareSection from './Components/LipCareSection/LipCareSection';
import ProductCollections from './Components/ProductCollections/ProductCollections';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    //<h1>HELLO WORLD!</h1>
    <div>
      <Navbar/>
      <LipPlumperSection/>
      <LipCareSection/>
      <ProductCollections/>
      <Footer/>
    </div>
  );
}

export default App;
