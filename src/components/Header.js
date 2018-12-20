import React from 'react';
import logo from '../images/logo1.png';
import './Header.css';

const Header = () => {
    return (
        <section id="header">
                <a href="/#"><img src={logo} alt="logo" height="50" /></a>
                <div className="nav-buttons">
                    <a href="/#" className="button-primary">Newsletter</a>
                    <a href="/#" className="button-primary">Data</a>
                </div>
        </section>
    )
}

export default Header;