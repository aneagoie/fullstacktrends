import React from 'react';
import logo from '../images/logo1.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="/#"><img src={logo} alt="logo" height="50" /></a>
                <div className="mr-5">
                    <a href="/#" className="btn btn-outline-primary mx-2">Newsletter</a>
                    <a href="/#" className="btn btn-outline-primary mx-2">Data</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;