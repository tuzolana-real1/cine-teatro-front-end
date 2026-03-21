import './App.css'
import Dashboard from './components/DashBoard'
/*import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard'
import PublicarObra from './pages/PublicarObra'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'*/
function App() {

  return (
    <>
      {/*<BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/publicar-obra' element={<PublicarObra/>} />
        </Routes>
      </BrowserRouter>
      */}
     <Dashboard />
    </>
  )
}

export default App
