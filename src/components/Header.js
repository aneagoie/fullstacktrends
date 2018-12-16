import React, { Component } from 'react';
import logo from '../images/logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-light bg-white">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" height="50" /></a>
                    <div className="mr-5">
                        <a href="#" className="btn btn-outline-primary mx-2">Newsletter</a>
                        <a href="#" className="btn btn-outline-primary mx-2">Data</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;