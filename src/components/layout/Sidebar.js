import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <Link
                    to="/task/list/all">
                    <i className="fas fa-list"></i>All Tasks
                </Link>

                <Link
                    to="/task/list/school">
                    <i className="fas fa-graduation-cap"></i>School
                </Link>

                <Link
                    to="/task/list/home">
                    <i className="fas fa-home"></i>Home
                </Link>

                <Link
                    to="/task/list/health">
                    <i className="fas fa-notes-medical"></i>Health
                </Link>

                <Link
                    to="/task/list/shopping">
                    <i className="fas fa-shopping-cart"></i>Shopping
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar
