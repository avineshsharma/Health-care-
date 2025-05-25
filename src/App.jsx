import { useState } from 'react'

import './App.css';

import  Sidebar from './components/sidebars/Sidebar'

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
 

  return (
    <>
      
      <Sidebar />
<Header/>
       <Dashboard/>
      
   </>  
    
  )
}


export default App
