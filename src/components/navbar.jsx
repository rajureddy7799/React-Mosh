import React from 'react';


const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a href="" className="navbar-brand">
            Number of counters greater than Zero value are: 
            <span className="badge badge-pill badge-primary m-2">{totalCounters.length}</span>
            </a>
            </nav>
     );
}
 
export default NavBar;
