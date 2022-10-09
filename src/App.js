import React from "react";
import Layout from "./components/Layout/layout";
import Home from  './components/Home/home'
import { Routes, Route } from 'react-router-dom'

// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Navbar from "./components/Navbar/Navbar";
// import Projects from "./components/Projects/Projects";
// import Skills from "./components/Skills/Skills";
import './App.scss';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        </Route>
    </Routes>
    </>
  );
}


export default App;