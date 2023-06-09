import React from 'react';

import { Header, WhatGPT3, Features, Possibility, Footer } from './containers';
import { Navbar, Brand, Feature } from './componets';

import './App.css';


const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>       
     </div>
     <Brand/>
     <WhatGPT3/>
     < Feature/>
     <Features/>
     <Possibility/>
     <Footer/>
    </div> 
  )
}

export default App