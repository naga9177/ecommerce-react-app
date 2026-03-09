import { Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import "./App.css"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import Auth from "./pages/Auth"
import AuthProvider from "./context/AuthContext"
import ProductDetails from "./pages/ProductDetails"


function App() {

  return (
    <div className="app">
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
