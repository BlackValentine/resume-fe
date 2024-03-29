import { useState, useEffect } from 'react'
import './Header.scss'
import { Link } from "react-router-dom"
import SvgAnimation from './SvgAnimation'

function Header(props) {

  const [navScroll, setNavScroll] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        setNavScroll(true)
      }
      else {
        setNavScroll(false)
      }
    }
  })

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className="header" id="header">
      <nav className={navScroll ? "nav nav__scroll" : "nav"}>
        <div className="nav__group">
          <div className="nav__toggle-btn" onClick={handleToggleMenu}>
            {toggleMenu ? <i className="fas fa-times nav__toggle-icon"></i> : <i className="fas fa-list nav__toggle-icon"></i>}
          </div>
          <Link to="/" className="nav__logo">
            <SvgAnimation />
          </Link>
        </div>

        <div className={toggleMenu ? "nav__menu menu__show" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item" onClick={handleToggleMenu}>
              <a href="#about" className="nav__link">
                <span>01.</span>
                <span>About</span>
              </a>
            </li>
            <li className="nav__item" onClick={handleToggleMenu}>
              <a href="#experience" className="nav__link">
                <span>02.</span>
                <span>Experience</span>
              </a>
            </li>
            <li className="nav__item" onClick={handleToggleMenu}>
              <a href="#project" className="nav__link">
                <span>03.</span>
                <span>Project</span>
              </a>
            </li>
            <li className="nav__item" onClick={handleToggleMenu}>
              <a href="#contact" className="nav__link">
                <span>04.</span>
                <span>Contact</span>
              </a>
            </li>
            {/* <li className="nav__item" onClick={handleToggleMenu}>
              <Link to="/blogs" className="nav__link">
                <span>05.</span>
                <span>Blog</span>
              </Link>
            </li> */}
          </ul>
          <div className="nav__resume">
            <Link to="/resume">
              <span>
                Resume
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
