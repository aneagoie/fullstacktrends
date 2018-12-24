import React from 'react';
import logo from '../images/logo1.png';
import './Header.css';
import { Link } from "react-scroll";

const Header = () => {

    return (
        <section >
            <nav id="header" class="navbar navbar-expand-lg navbar-light fixed-top">
            <Link to="top" smooth={true} duration={800} offset={-131}><img src={logo} alt="logo" height="50" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav nav-buttons">
                        <Link to="newsletter" className="button-primary" spy={true} activeClass="active" smooth={true} duration={800} offset={0}>Newsletter</Link>
                        <Link to="data" className="button-primary" spy={true} activeClass="active" smooth={true} duration={800} offset={0}>Data</Link>  
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header;