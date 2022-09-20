import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <NavLink className="  navbar-brand fw-bold fs-4" to="/">DREAM COLLECTION</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/products">Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
     
    </ul>
    
    <div className="buttons" >
      <NavLink to='/login' className="btn btn-outline-dark" >
        <i className="fa fa-sign-in me-2" ></i>Login
      </NavLink>
      <NavLink to='/register' className="btn btn-outline-dark ms-2" >
        <i className="fa fa-user-plus me-2" ></i>Register
      </NavLink>
      <NavLink to='/card' className="btn btn-outline-dark ms-2 " >
        <i className="fa fa-shopping-cart me-2" ></i>Cart 
      </NavLink>
    </div>
    
  </div>
</nav>

    </div>
  )
}

export default Navbar