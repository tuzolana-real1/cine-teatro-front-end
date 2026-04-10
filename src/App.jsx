import { Routes, Route } from "react-router-dom"

import Navbar from "./components/NavBar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastros"
import Dashboard from "./components/DashBoard"
import PublicarObra from "./pages/PublicarObra"
import Cadastros from "./pages/Cadastros"

function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastros />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/publicar-obra" element={<PublicarObra />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
