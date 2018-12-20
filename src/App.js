import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Chart from './components/Chart';
import Rank from './components/Rank';
import Newsletter from './components/Newsletter'
import Data from './components/Data'
import Footer from './components/Footer';
import chartData from './data.json';

class App extends Component {

    constructor() {
        super();
        this.state = {
            cData: {},
            currentLang: chartData[0][0].name,
            /*
            currentCatIndex :-
                Web---------------------> 0
                Mobile------------------> 1
                Programming Language----> 2
                Backend-----------------> 3
            */
            currentCatIndex: 0,
            langArray: [],
            devLoveArray: [],
            gJobArray: [],
            usJobArray: [],
            supJobArray: [],
            remJobArray: []
        }

        this.onLangClick = this.onLangClick.bind(this);
    }

    componentDidMount() {
        this.dataExtractor();
        this.getData();
    }

    getData() {
        const {langArray, devLoveArray, gJobArray, usJobArray, supJobArray, remJobArray, currentLang} = this.state;
        const cIndex = langArray.indexOf(currentLang);

        this.setState({
            cData: {
                datasets: [
                    {
                        data: [devLoveArray[cIndex], gJobArray[cIndex], usJobArray[cIndex], supJobArray[cIndex], remJobArray[cIndex]],
                        label: 'Languages',
                        backgroundColor: [
                            'rgba(255,99,132,0.7)',
                            'rgba(75,192,192,0.7)',
                            'rgba(255,206,86,0.7)',
                            'rgba(231,233,237,0.7)',
                            'rgba(54,162,235,0.7)'
                        ]
                    }
                ],
                labels: ['Developer Love', 'Global Job Demand', 'US Job Demand', 'Startup Job Demand', 'Remote Job Demand']
            }
        });
    }

    onLangClick(lang) {
        this.setState({
            currentLang: lang
        }, () => {
            this.getData();
        });
        console.log(this.state.currentLang)
    }

    dataExtractor() {
        for (let i = 0; i < chartData[0].length; i++) {
            this.state.langArray.push(chartData[0][i].name);
            this.state.devLoveArray.push(chartData[0][i].devLove);
            this.state.gJobArray.push(chartData[0][i].gJobDemand);
            this.state.usJobArray.push(chartData[0][i].usJobDemand);
            this.state.supJobArray.push(chartData[0][i].supJobDemand);
            this.state.remJobArray.push(chartData[0][i].remJobDemand);
            
        }
    }

    render() {
        const {cData, langArray} = this.state;
        return (
            <div>
                <Header />
                <div className="p-5 m-5 text-center">
                    <h1 className="mb-5">Top 5</h1>
                    <div className="chart-container">
                        {console.log('cdata', cData)}
                        {console.log(langArray)}
                        {console.log(langArray.length)}
                        <Rank langArray={langArray} onLangClick={this.onLangClick} />
                        <Chart data={cData} />

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
