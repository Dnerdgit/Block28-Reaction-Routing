import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import Blue from './components/Blue.jsx'
import Green from './components/Green.jsx'
import Red from './components/Red.jsx'
import Gray from './components/Gray.jsx'
import Photo from './components/Photo.jsx'
import './App.css'

function App() {

  return (

  <div id="container">

      <div id="navbar">
        <Link to="/"/><a href="/">Home</a>
        <Link to="/blue"/><a href="Blue">Blue</a>
        <Link to="/red"/><a href="Red">Red</a>
        <Link to="/green"/><a href="Green">Green</a>
        <Link to="/gray"/><a href="Gray">Grey</a>
        <Link to="/photo"/><a href="Photo">Photo</a>
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
