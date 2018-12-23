import React from 'react';
import './Navigation.css';

const Navigation = ({ onNavClick }) => {

        return (
                <div className="center">
                    <div className="button-primary" onClick={() => onNavClick(0)} >Web</div>
                    <div className="button-primary" onClick={() => onNavClick(1)} >Mobile</div>
                    <div className="button-primary" onClick={() => onNavClick(2)} >Programming Languages</div>
                    <div className="button-primary" onClick={() => onNavClick(3)} >Backend</div>
                </div>
        );
    }

export default Navigation;
