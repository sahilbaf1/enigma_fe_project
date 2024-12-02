import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import CountPage from './pages/CountPage.jsx'
import ToDoPage from './pages/ToDoPage.jsx'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
//import Count from './components/Count'

function App() {

  return (
    <div className = 'container'>  

      <Header/>
      <Outlet/>
    
     </div>
  )
}

export default App
