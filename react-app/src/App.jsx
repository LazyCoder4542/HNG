import React from 'react';
import { Routes, Route } from "react-router-dom";
// importing pages
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Page404 from './components/pages/404';
// importing components
import Footer from './components/molecules/Footer';
import './App.css';
function App() {
  return (
    <>
    <div className='container'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
