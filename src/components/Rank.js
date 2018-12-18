import React, {Component} from 'react';

class Rank extends Component {

    constructor(props) {
        super(props);
        console.log(props.cData);
    }

    render(){
        return(
            <div>
                <h4>Node</h4>
                <h4>jQuery</h4>
                <h4>SASS</h4>
                <h4>Angular</h4>
                <h4>React</h4>
            </div>
        );
    }
}

export default Rank;
