import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
                <navbar>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand ms-5 font-sans " href="#">HomeChef</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    
                                    <li className="nav-item ms-5">
                                    <NavLink  className="nav-link  anchor" aria-current="page" to="/Recipe" style={{fontStyle:"oblique",fontWeight:"bolder"}}>
                                        Recipe
                                        </NavLink>
                                    </li>
                                </ul>
                                <form className="d-flex me-5">
                                    <button className="mx-4 button1 btn" type="submit">
                                        <NavLink className="nav-link  anchor" aria-current="page" to="/Login">Login</NavLink></button>
                                    <button className="me-3 button1 btn" type="submit"> <NavLink className="nav-link  anchor" aria-current="page" to="/Register">Register</NavLink></button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </navbar>
            </div>
  )
}

export default Navbar