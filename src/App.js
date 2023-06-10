import React from 'react';

import { Header, WhatGPT3, Features, Possibility, Blog, Footer } from './containers';
import { Navbar, Brand, Feature, Cta, Article } from './componets';

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
     <Cta/>
     <Blog/>
     <Article/>
     <Footer/>
    </div> 
  )
}

export default App