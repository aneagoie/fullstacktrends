import React from 'react';
import logo from '../images/logo1.png';
import './Header.css';
import { Link } from "react-scroll";

const Header = () => {

    return (
        <section id="header">
            <Link to="top" smooth={true} duration={800} offset={-131}><img id={"logo"} src={logo} alt="logo" height="50" /></Link>
            <div className="nav-buttons">
                <Link to="newsletter" className="button-primary" spy={true} activeClass="active" smooth={true} duration={800} offset={1}>Newsletter</Link>
                <Link to="data" className="button-primary" spy={true} activeClass="active" smooth={true} duration={800} offset={1}>Data</Link>
            </div>
        </section>
    )
}

export default Header;