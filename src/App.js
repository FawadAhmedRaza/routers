import React from 'react'
import Home from './compnents/home'
import About from './compnents/about'
import Contact from './compnents/contact'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
export default function App() {
  return (
    <div>
     <Home/>
     <About/>
     <Contact/>
    </div>
  )
}
