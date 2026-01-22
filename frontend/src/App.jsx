import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing'
import Menu from './pages/menu';
import Cart from './pages/cart';
import Checkout from './pages/checkout';




function App() {
  

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Landing />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
