import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import logo from '../../assets/logo.png'

const routes = [
  { url: '/gettingstarted', name: 'Getting Started' },
  { url: '/button', name: 'Button' },
  { url: '/textinput', name: 'TextInput' },
  { url: '/numberinput', name: 'NumberInput' },
  { url: '/autocomplete', name: 'Autocomplete' },
  { url: '/theming', name: 'Theming' },
  { url: '/divider', name: 'Divider' },
  { url: '/textarea', name: 'TextArea' }

]
export const Navbar = () => {
  const navbarRef = useRef(null)
  const location = useLocation()
  const [navBar, setNavBar] = useState(false)

  const toggleNavbar = () => {
    setNavBar(!navBar)
  }

  const closeNavbar = () => setNavBar(false)

  useOnClickOutside(navbarRef, navBar, closeNavbar)

  const currentlyActiveTab = (url) => {
    return url === location.pathname
  }

  useEffect(() => {
    closeNavbar()
  }, [location.pathname])

  return (
    <div className='navbar'>
      <img className='logo' src={logo} />
      <ul
        className={navBar ? 'navbar__list active' : 'navbar__list'}
        ref={navbarRef}
      >
        {routes.map((route) => {
          return (
            <li key={route.url}>
              <Link
                to={route.url}
                className={currentlyActiveTab(route.url) && 'active'}
              >
                {route.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <button onClick={toggleNavbar} className='navbar-toggle'>
        <GiHamburgerMenu className='navbar-toggle-button' size={25} />
      </button>
    </div>
  )
}
