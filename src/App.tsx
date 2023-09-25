import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Router from './Routes/Router';
import {Routes} from 'react-router'
import { Layout } from 'antd';

function App() {
  return (
    <Layout>
      <Navigation />

      {Router()}
      
    </Layout>
  );
}

export default App;
