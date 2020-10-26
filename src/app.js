import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ButtonDemo } from './components/ButtonDemo'
import { GettingStarted } from './components/GettingStarted'
import { TextInputDemo } from './components/TextInputDemo'
import { NumberInputDemo } from './components/NumberInputDemo'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={GettingStarted} />
          <Route exact path='/button' component={ButtonDemo} />
          <Route exact path='/gettingstarted' component={GettingStarted} />
          <Route exact path='/textinput' component={TextInputDemo} />
          <Route exact path='/numberinput' component={NumberInputDemo} />
          <Route />
        </Switch>
      </Router>
    </div>
  )
}

export default App
