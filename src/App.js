import React from "react";
import Layout from "./components/Layout/layout";
import Home from  './components/Home/home'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/about.js'
import Contact from './components/Contact/contact.js'
// import Portfolio from './components/Portfolio'
//import Dashboard from './components/Dashboard'
import './App.scss'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */} 
        </Route>
    </Routes>
    </>
  );
}


export default App;