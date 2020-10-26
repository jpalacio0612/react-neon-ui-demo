import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__list'>
        <h2>Rect Neon UI</h2>
        <li>
          <Link to='/started'>Getting Started</Link>
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
          <Link to='/theme'>Theming</Link>
        </li>
      </ul>
    </div>
  )
}
