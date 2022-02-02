import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="logo"><i className="fas fa-check"></i>
                    <Link to="/task/list">My Task Manager</Link>
                </div>
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
