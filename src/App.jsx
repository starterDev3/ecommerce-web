
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Checkout from './pages/Checkout.jsx'
import Navbar from './components/Navbar.jsx'
import Error from './pages/Error.jsx'

function App() {
  return (
  
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
 );
}

export default App
