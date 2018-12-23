import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Chart from './components/Chart';
import Rank from './components/Rank';
import Newsletter from './components/Newsletter';
import Data from './components/Data';
import Footer from './components/Footer';
import chartData from './data.json';

//update variable below according to tabs
let currentCatIndexGlobal = 0;

const dataExtractor = (catIndex) => {

    let lArray = [];
    let dlArray = [];
    let gArray = [];
    let usArray = [];
    let supArray = [];
    let remArray = [];

    for (let i = 0; i < chartData[catIndex].length; i++) {
        lArray.push(chartData[catIndex][i].name);
        dlArray.push(chartData[catIndex][i].devLove);
        gArray.push(chartData[catIndex][i].gJobDemand);
        usArray.push(chartData[catIndex][i].usJobDemand);
        supArray.push(chartData[catIndex][i].supJobDemand);
        remArray.push(chartData[catIndex][i].remJobDemand);

    }

    return ({
        langArray: lArray,
        devLoveArray: dlArray,
        gJobArray: gArray,
        usJobArray: usArray,
        supJobArray: supArray,
        remJobArray: remArray,
    })
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            cData: {},
            currentLang: chartData[currentCatIndexGlobal][0].name,
            /*
            currentCatIndex :-
                Web---------------------> 0
                Mobile------------------> 1
                Programming Language----> 2
                Backend-----------------> 3
            */
            currentCatIndex: 0,
            arrObj: dataExtractor(currentCatIndexGlobal)
        }
    }

    componentDidMount() {
        this.getData(this.state.currentLang);
    }

    getData(currentSelection) {
        const {langArray, devLoveArray, gJobArray, usJobArray, supJobArray, remJobArray} = this.state.arrObj;
        const cIndex = langArray.indexOf(currentSelection);

        this.setState({
            currentLang: currentSelection,
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

    onLangClick = (lang) => {
        this.getData(lang);
    }

    onNavClick = (index) => {
        currentCatIndexGlobal = index;
        this.setState({
            arrObj: dataExtractor(index)
        })

        this.getData(this.state.arrObj.langArray[0]);
    }

    render() {
        const {cData, arrObj} = this.state;
        return (
            <div>
                <Header />
                <Navigation onNavClick={this.onNavClick} />

                <div className="p-5 m-5 text-center">
                    <h2 className="mb-5">Top 5</h2>
                    <div className="chart-container">
                        <Rank langArray={arrObj.langArray} onLangClick={this.onLangClick} />
                        <Chart data={cData} />
                    </div>
                </div>

                <Newsletter />
                <Data chartData={cData} />
                <Footer />
            </div>
        );
    }
}

export default App;
