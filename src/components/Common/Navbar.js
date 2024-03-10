import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, NavLink } from "react-router-dom";
import React, { useContext } from 'react'

import UserContext from '../../Context/User/UserContext';

const TopNavbar = () => {
    const context = useContext(UserContext);
    const { user, signOut } = context;
    return (
        <>
            <Navbar expand="lg" className="bg-dark px-4 text-white" variant='dark' >
                <Navbar.Brand href="/">iNotebook</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="dropdown-item px-1" to="/">Home</NavLink>
                        <NavLink className="dropdown-item px-1" to="/about">About</NavLink>
                    </Nav>
                </Navbar.Collapse>
                {
                    user.isAuthenticate?
                    <div>
                        <NavLink className="mx-1 profileBtn" to="/profile">{user.name}</NavLink>
                        <div className="btn btn-primary mx-1" onClick={signOut}>Logout</div>
                    </div>:
                    <div>
                        <NavLink className="btn btn-primary mx-1" to="/login">Login</NavLink>
                        <NavLink className="btn btn-primary mx-1" to="/register">SignUp</NavLink>
                    </div>
                }
            </Navbar >
            <Outlet />
        </>
    )
}

export default TopNavbar;