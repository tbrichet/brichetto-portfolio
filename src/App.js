// import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  return (
    <div>
      <Nav>
      </Nav>
      <main>
            <Portfolio></Portfolio>
            <About></About>
            <Resume></Resume>
            <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
