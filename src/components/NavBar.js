import React from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink className={({isActive}) => (isActive ? "active": undefined)} to="/contacts">
                Contacts
            </NavLink>
            <NavLink className={({isActive}) => (isActive ? "active": undefined)} to="/search">
                Search
            </NavLink>
        </div>
    )
}

export default Navbar;