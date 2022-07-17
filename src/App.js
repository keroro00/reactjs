import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';
import { CartContext } from './CartContext';
import { useState } from 'react';
import './index.css';
function App() {

	const [cartItems, setCartItems] = useState([])
  return (
      
    <BrowserRouter>
    <CartContext.Provider value={{cartItems,setCartItems}}>
    <div class="title">
      <Link to="/">首頁</Link>
      <Link to="/Checkout">購物車</Link>
      </div>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/Product" element={<ProductDetail/>}>
          <Route path=":id" element={<ProductDetail/>}/>
        </Route>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </CartContext.Provider>
    </BrowserRouter>

  );
}

export default App;
