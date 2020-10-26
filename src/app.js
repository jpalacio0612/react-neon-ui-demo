import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
      </Router>
    </div>
  )
}

export default App
