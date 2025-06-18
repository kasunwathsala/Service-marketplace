"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

const Navbar = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm)
      alert(`Searching for: ${searchTerm}`)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              navigateTo("home")
            }}
          >
            <div className="brand-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="brand-text">WorkHub</span>
            </div>
          </a>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo("home")
                }}
                className="nav-link"
              >
                <span className="nav-icon">🏠</span>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo("oneday")
                }}
                className="nav-link"
              >
                <span className="nav-icon">⚡</span>
                One Day
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo("parttime")
                }}
                className="nav-link"
              >
                <span className="nav-icon">⏰</span>
                Part Time
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo("contract")
                }}
                className="nav-link"
              >
                <span className="nav-icon">📋</span>
                Contract Basis
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <div className="search-container">
              <button className="search-toggle" onClick={toggleSearch}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              <form onSubmit={handleSearch} className={`search-form ${isSearchOpen ? "active" : ""}`}>
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input-nav"
                />
                <button type="submit" className="search-submit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </form>
            </div>
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>

        <div className={`navbar-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
