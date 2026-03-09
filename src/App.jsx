import { Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import "./App.css"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import Auth from "./pages/Auth"
import AuthProvider from "./context/AuthContext"


function App() {

  return (
    <div className="app">
      <Navbar />
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/products/:id" element={<h1>Products id</h1>} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
