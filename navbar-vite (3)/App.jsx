"use client"

import { useState, useEffect } from "react"
import Navbar from "./navbar"
import OneDayJobs from "./oneday"
import PartTimeJobs from "./parttime"
import ContractJobs from "./contract"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  // Listen for navigation changes
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname
      if (path === "/oneday") setCurrentPage("oneday")
      else if (path === "/parttime") setCurrentPage("parttime")
      else if (path === "/contract") setCurrentPage("contract")
      else setCurrentPage("home")
    }

    // Handle initial load
    handleNavigation()

    // Listen for popstate events (back/forward buttons)
    window.addEventListener("popstate", handleNavigation)

    return () => window.removeEventListener("popstate", handleNavigation)
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.history.pushState({}, "", page === "home" ? "/" : `/${page}`)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "oneday":
        return <OneDayJobs />
      case "parttime":
        return <PartTimeJobs />
      case "contract":
        return <ContractJobs />
      default:
        return (
          <main>
            <section className="hero-section">
              <div className="hero-content">
                <h1>Find Your Perfect Job</h1>
                <p>Discover opportunities that match your skills and schedule. From one-day gigs to full contracts.</p>
                <div className="hero-buttons">
                  <button className="hero-btn-primary" onClick={() => navigateTo("oneday")}>
                    Explore Jobs
                  </button>
                  <button className="hero-btn-secondary">Learn More</button>
                </div>
              </div>
            </section>

            <section className="content-section">
              <div className="container">
                <h2>Job Categories</h2>
                <div className="job-cards">
                  <div className="job-card" onClick={() => navigateTo("oneday")}>
                    <div className="job-icon">⚡</div>
                    <h3>One Day Jobs</h3>
                    <p>Quick tasks and short-term projects</p>
                  </div>
                  <div className="job-card" onClick={() => navigateTo("parttime")}>
                    <div className="job-icon">⏰</div>
                    <h3>Part Time</h3>
                    <p>Flexible hours that fit your schedule</p>
                  </div>
                  <div className="job-card" onClick={() => navigateTo("contract")}>
                    <div className="job-icon">📋</div>
                    <h3>Contract Basis</h3>
                    <p>Long-term projects and commitments</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        )
    }
  }

  return (
    <div className="App">
      <Navbar navigateTo={navigateTo} />
      {renderPage()}
    </div>
  )
}

export default App
