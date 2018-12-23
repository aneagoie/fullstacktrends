import React from 'react';
import './Navigation.css';

const Navigation = ({ onNavClick }) => {

        return (
                <div className="center">
                    <a href="/#" className="button-primary" onClick={() => onNavClick(0)} >Web</a>
                    <a href="/#" className="button-primary" onClick={() => onNavClick(1)} >Mobile</a>
                    <a href="/#" className="button-primary" onClick={() => onNavClick(2)} >Programming Languages</a>
                    <a href="/#" className="button-primary" onClick={() => onNavClick(3)} >Backend</a>
                </div>
        );
    }

export default Navigation;
