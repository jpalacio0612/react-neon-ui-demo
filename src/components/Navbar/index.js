import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

export const Navbar = () => {
  const navbarRef = useRef(null)
  const [navBar, setNavBar] = useState(false)

  const toggleNavbar = () => {
    setNavBar(!navBar)
  }

  const closeNavbar = () => setNavBar(false)

  useOnClickOutside(navbarRef, navBar, closeNavbar)

  return (
    <div className='navbar'>
      <ul
        className={navBar ? 'navbar__list active' : 'navbar__list'}
        ref={navbarRef}
      >
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
