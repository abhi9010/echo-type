import React from 'react'
import link from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <ul>
                <link to="/"> <li>Home</li></link>
                <link to="/about us"><li>About us</li></link>
                <link to="/Contact us"> <li>Contact us</li></link>
            </ul>
        </div>
    )
}
export default Navbar;