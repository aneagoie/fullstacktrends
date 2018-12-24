import React from 'react';
import './Navigation.css';

const Navigation = ({ onNavClick }) => {

    return (
        <div className="container">
            <div className="row center">

                <div className="d-inline-block">
                <button className="button-primary" onClick={() => onNavClick(0)} ><i class="fas fa-globe"></i><span class="d-none d-sm-block">Web</span></button>
                </div>

                <div className="d-inline-block">
                    <button className="button-primary" onClick={() => onNavClick(1)} ><i class="fas fa-mobile-alt"></i><span class="d-none d-sm-block">Mobile</span></button>
                </div>

                <div className="d-inline-block">
                    <button className="button-primary" onClick={() => onNavClick(2)} ><i class="fas fa-code"></i><span class="d-none d-sm-block">Languages</span></button>
                </div>

                <div className="d-inline-block">
                    <button className="button-primary" onClick={() => onNavClick(3)} ><i class="fas fa-server"></i><span class="d-none d-sm-block">Backend</span></button>
                </div>
                
            </div>
        </div>
    );
}

export default Navigation;
