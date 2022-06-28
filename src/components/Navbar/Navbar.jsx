import React from 'react'

import "./Navbar.scss"
import '../../shared/Global.scss'
export const Navbar = () => {
  return (
    <header id="navbar">
      <nav>

        <div className='logo'>
          <a href="/">William La</a>
        </div>

        <div className='nav-links'>
          <ol>
            <li><a href="/about">About</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ol>
        </div>
      </nav>
    </header>
  )
}
