import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header"> {/* This will allow using a flexbox styling, without messing with the container claass */}
        <div className="logo">
          <Link to="/">Guhaprasaanth</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link className="links" to="/about">About</Link>
            <Link className="links" to="/work">Work</Link>
            <Link className="links" to="/projects">Projects</Link>
            <Link className="links" to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)


export default Header
