
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Checkout from './pages/Checkout.jsx'
import Navbar from './components/Navbar.jsx'
import Error from './pages/Error.jsx'
import AuthProvider from './context/AuthContext.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import CartProvider from './context/CartContext.jsx'

export default function App() {
  return (
  <AuthProvider>
    <CartProvider>
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Error />} />
            <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </div>
  </CartProvider>
  </AuthProvider>
 );
}
