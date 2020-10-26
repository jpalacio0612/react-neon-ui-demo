import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ButtonDemo } from './components/ButtonDemo'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' />
          <Route exact path='/button' component={ButtonDemo} />
          <Route />
        </Switch>
      </Router>
    </div>
  )
}

export default App
