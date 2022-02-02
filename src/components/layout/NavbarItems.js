import React from 'react'

const NavbarItems = ({ setView, viewGrid, sortByTitle, sortByDate }) => {

    const icon = viewGrid ? 'fas fa-th-large' : 'fas fa-grip-lines'

    return (
        <div className='navbar-items'>
            <div>
                <div className="sort">
                    <p><i className="fas fa-sort-amount-up-alt"></i> Sort:</p>
                    <button className='btn-sort' onClick={sortByDate}>By date</button>
                    <button className='btn-sort' onClick={sortByTitle}>By title</button>
                </div>
                <div className="view">
                    <button className='btn-sort' onClick={setView}>
                        <i className={icon}></i>
                    </button>

                </div>
            </div>
            <hr />
        </div>
    )
}

export default NavbarItems
