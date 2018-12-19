import React, {Component} from 'react';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="web">
                    <p>Top 5 languages for Web developers are as follows:</p>
                    <ul>
                        <li>Angular</li>
                        <li>React JS</li>
                        <li>Vue JS</li>
                        <li>Vanilla JS</li>
                        <li>NodeJS</li>
                    </ul>
                </div>

                <div className="web1">
                    here comes the chart..
                </div>
            </div>
        );
    }
}

export default Content;