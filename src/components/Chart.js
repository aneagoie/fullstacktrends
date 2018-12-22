import React, {Component} from 'react';
import {Polar} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component {

        constructor(props) {
        super(props);
        this.state = {
            cData: props.cData
        }
    };

    render() {
        return(
            <div className="chart">
                <Polar
                    data={this.state.cData}
                    options={{
                        maintainAspectRatio: true,
                        legend: {
                            position: 'bottom'
                        }
                    }}
                />
            </div>
        );
    };
}

export default Chart;
