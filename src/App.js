import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Chart from './components/Chart';
import Rank from './components/Rank';
import Newsletter from './components/Newsletter';
import Data from './components/Data';
import Footer from './components/Footer';

class App extends Component {

    constructor() {
        super();
        this.state = {
            cDate: {}
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({
            cData: {
                datasets: [
                    {
                        label: 'Languages',
                        data: [183, 243, 202, 242, 212],
                        backgroundColor: [
                            'rgba(255,99,132,0.7)',
                            'rgba(75,192,192,0.7)',
                            'rgba(255,206,86,0.7)',
                            'rgba(231,233,237,0.7)',
                            'rgba(54,162,235,0.7)'
                        ]
                    }
                ],
                labels: ['React', 'Node', 'Angular', 'jQuery', 'SASS']
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Navigation />

                <div className="p-5 m-5 text-center">
                    <h2 className="mb-5">Top 5 Languages Of Web</h2>
                    <div className="chart-container">
                        <Rank cData={this.state.cData} />
                        <Chart cData={this.state.cData} />
                    </div>
                </div>

                <Newsletter />
                <Data />
                <Footer />
            </div>
        );
    }
}

export default App;
