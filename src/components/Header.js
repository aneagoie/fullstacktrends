import React from 'react';
import logo from '../images/logo1.png';
import './Header.css';

const Header = () => {

   const scroller = (section) => {
        if(section === "news") window.scrollTo(0, 550)
        if(section === "data") window.scrollTo(0, 1170)
    }

    return (
        <section id="header">
                <a href="/#"><img src={logo} alt="logo" height="50" /></a>
                <div className="nav-buttons">
                    <button onClick={() => scroller("news")} className="button-primary">Newsletter</button>
                    <button onClick={() => scroller("data")} className="button-primary">Data</button>
                </div>
        </section>
    )
}

export default Header;