import {Routes, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/Home/HomePage';
import Header from './pages/Home/sections/Header';
import Navigation from './pages/Home/sections/Navigation';
import Footer from './pages/Home/sections/Footer';

import ProductPage from './pages/Product/ProductPage';
import CartPage from './pages/Cart/CartPage';
import SignupPage from './pages/Signup/SignupPage';

import {CartProvider} from './context/CartContext';
import { ImageProvider } from './context/ImagesContext';

function App() {
  return (
    <CartProvider>
        <ImageProvider>
            <Header/>
            <Navigation/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/Product' element={<ProductPage/>}/>
              <Route path='/Cart' element={<CartPage/>}/>
            </Routes>
            <Routes>
              <Route path="/Signup" element={<SignupPage/>}/>
            </Routes>
          
            <Footer/>
        </ImageProvider>
      
    </CartProvider>
  );
}

export default App;
