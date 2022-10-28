import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
// importing pages
import Home from './components/pages/Home';
// importing components
import Footer from './components/molecules/Footer';
import './App.css';
function App() {
  return (
    <>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<></>} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
