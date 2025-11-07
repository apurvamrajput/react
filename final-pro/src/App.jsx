import React from 'react'
import Navbar from './component/layout/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './component/pages/Home.jsx'
import About from './component/pages/About.jsx'
import Contact from './component/pages/Contact.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App