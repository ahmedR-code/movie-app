import React from 'react'
import { NavLink,Link,useNavigate ,useLocation} from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname
    
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm navbar-dark my-2 bg-dark">
        <div className="container-fluid">
         
         
             
          <Link to="/" className="navbar-brand" href="#">
          Noxe
        </Link>
        
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
  {(currentPath !== '/login' && currentPath !== '/register') && (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies" className="nav-link">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tv-shows" className="nav-link">TV Shows</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/people" className="nav-link">People</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
          </ul>

          

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-2">
            <li className="nav-item">
              <Link to="/login" className="btn btn-outline-success rounded-2">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="btn btn-outline-success rounded-2">Sign in</Link>
            </li>
          </ul>
       </div>
          )}

          {currentPath === '/login' && (
             <Link to="/register" className="btn btn-outline-success rounded-2">Register</Link>
             )}
          {currentPath === '/register' && (
             <Link to="/login" className="btn btn-outline-success rounded-2">Login</Link>
             )}
        </div>
      </nav>
    </>
  )
}
