import { useState } from 'react'

import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>React Router</h1>
      </header>
      <div>
        <nav>
          <NavLink to=''>Home 🏘️</NavLink>
          <NavLink to='about'>About ℹ️</NavLink>
          <NavLink to='Tasks'>Tasks</NavLink>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
      <footer> Created by Rock the code 🥰</footer>
    </div>
  )
}

export default App
