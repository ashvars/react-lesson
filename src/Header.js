import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="blueBG inline pad10">
        <h1 style={{margin: "0 30px 0 0"}}>User Entry Application</h1>
        <nav className="inline">
            <ul className="inline" id="navLinks">
            <li><NavLink exact={true} activeClassName="selected" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="selected" to="/add">Add</NavLink></li>
            <li><NavLink activeClassName="selected" to="/view">View</NavLink></li>
            </ul>
        </nav>
        </div>
    )
}

export default Header;