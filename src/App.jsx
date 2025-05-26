import { useState } from 'react'

import './App.css';

import  Sidebar from './components/sidebars/Sidebar'

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
 

  return (
    <>
       <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
     < div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
<Header/>
       <Dashboard/>
      </div>
      </div>
   </>  
    
  )
}


export default App
