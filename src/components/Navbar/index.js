import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Navbar = () => {
  const [navBar, setNavBar] = useState(false)

  const toggleNavbar = () => {
    setNavBar(!navBar)
  }
  return (
    <div className='navbar'>
      <ul
        className='navbar__list'
        style={navBar ? { display: 'flex' } : { display: 'none' }}
      >
        <h2>React Neon UI</h2>
        <li>
          <Link to='/gettingstarted'>Getting Started</Link>
        </li>
        <li>
          <Link to='/button'>Button</Link>
        </li>
        <li>
          <Link to='/textinput'>TextInput</Link>
        </li>
        <li>
          <Link to='/numberinput'>NumberInput</Link>
        </li>
        <li>
          <Link to='/select'>Select</Link>
        </li>
        <li>
          <Link to='/autocomplete'>Autocomplete</Link>
        </li>
        <li>
          <Link to='/theming'>Theming</Link>
        </li>
      </ul>
      <button onClick={toggleNavbar} className='navbar-toggle'>
        <GiHamburgerMenu size={25} />
      </button>
    </div>
  )
}
