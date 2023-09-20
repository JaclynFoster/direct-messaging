import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Router from './Routes/Router';
import {Routes} from 'react-router'

function App() {
  return (
    <div className="App">
      <Navigation />

      {Router()}
      
    </div>
  );
}

export default App;
