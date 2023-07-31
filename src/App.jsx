import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Blue from './components/Blue.jsx'
import Green from './components/Green.jsx'
import Red from './components/Red.jsx'
import Gray from './components/Gray.jsx'
import Photo from './components/Photo.jsx'
import Navbar from "./components/Navbar.jsx";
import './App.css'

function App() {

  return (

  <div id="container">

      <div id="navbar">
        <Navbar />
      </div>

      <div id="main-section">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>}/>
            <Route path="/green" element={<Green/>}/>
            <Route path="/gray" element={<Gray/>}/>
            <Route path="/photo" element={<Photo/>}/>
        </Routes>
      </div>

  </div>
  )


}

export default App
