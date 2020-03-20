import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
