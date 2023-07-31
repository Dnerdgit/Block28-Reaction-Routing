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
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/gray">Grey</Link>
        <Link to="/photo">Photo</Link>
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
