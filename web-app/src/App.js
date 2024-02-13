import './App.css';
import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
        <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
