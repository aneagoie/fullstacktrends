import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
                <div className="center">
                    <a href="/#" className="button-primary">Web</a>
                    <a href="/#" className="button-primary">Mobile</a>
                    <a href="/#" className="button-primary">Programming Languages</a>
                    <a href="/#" className="button-primary">Backend</a>
                </div>
        );
    }
}

export default Navigation;
