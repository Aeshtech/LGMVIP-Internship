import React from 'react'

const Navbar = ({getUserData}) => {
    return(
    <nav className="navbar">
        <div className="logo"> <a href="https://aeshtech.com" target="_blank" rel="noopener noreferrer"><p>Aeshtech</p></a></div>
        <button type="button" onClick={() =>getUserData()}>View Users</button>
    </nav>
    )
}

export default Navbar;