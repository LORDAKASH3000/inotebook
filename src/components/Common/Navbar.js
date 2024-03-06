import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, NavLink } from "react-router-dom";

const TopNavbar = () => {
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
                <div>
                    <NavLink className="btn btn-primary mx-1" to="/login">Login</NavLink>
                    <NavLink className="btn btn-primary mx-1" to="/register">SignUp</NavLink>
                </div>
            </Navbar >
            <Outlet />
        </>
    )
}

export default TopNavbar;