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
          <NavLink to='' activeClassName='active'>
            Home 🏘️
          </NavLink>
          <NavLink to='about' activeClassName='active'>
            About ℹ️
          </NavLink>
          <NavLink to='Tasks' activeClassName='active'>
            Tasks
          </NavLink>
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
