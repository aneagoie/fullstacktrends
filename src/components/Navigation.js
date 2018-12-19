import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <div className="mr-5 center">
                        <a href="/#" className="btn btn-outline-primary mx-2">Web</a>
                        <a href="/#" className="btn btn-outline-primary mx-2">Mobile</a>
                        <a href="/#" className="btn btn-outline-primary mx-2">Programming Languages</a>
                        <a href="/#" className="btn btn-outline-primary mx-2">Backend</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
