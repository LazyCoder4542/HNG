import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
// importing pages
import Home from './components/pages/Home';
import Page404 from './components/pages/404';
// importing components
import Footer from './components/molecules/Footer';
import './App.css';
function App() {
  return (
    <>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
