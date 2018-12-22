import React, {Component} from 'react';
import './Rank.css';

class Rank extends Component {

    constructor(props) {
        super(props);
        console.log(props.cData);
    }

    render(){
        return(
            <div class="rank">
                <a href='/#'><h5>NODE JS</h5></a>
                <a href='/#'><h5>jQUERY</h5></a>
                <a href='/#'><h5>SASS</h5></a>
                <a href='/#'><h5>ANGULAR</h5></a>
                <a href='/#'><h5>REACT</h5></a>
            </div>
        );
    }
}

export default Rank;
