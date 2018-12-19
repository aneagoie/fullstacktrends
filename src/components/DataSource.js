import React from 'react';
import Chart from './Chart'
import './DataSource.css';
import logo1 from "../images/company/anglelist.png";
import logo2 from "../images/company/dice.png";
import logo3 from "../images/company/github.png";
import logo4 from "../images/company/hackernews.png";
import logo5 from "../images/company/hired.png";
import logo6 from "../images/company/indeed.png";
import logo7 from "../images/company/linkedin.png";
import logo8 from "../images/company/remoteco.png";
import logo9 from "../images/company/simplyhired.png";
import logo10 from "../images/company/stackoverflow.png";
import logo11 from "../images/company/stateofjs.png";

const DataSource = ({ cData }) => {
    return (
      <div className="wrapper-data">
        <div className="container-grid">
          <div className="zone purple"><img alt="" src={logo1}/></div>
          <div className="zone purple"><img alt="" src={logo2}/></div>
          <div className="zone purple"><img alt="" src={logo3}/></div>
          <div className="zone purple"><img alt="" src={logo4}/></div>
          <div className="zone purple"><img alt="" src={logo5}/></div>
          <div className="zone purple"><img alt="" src={logo6}/></div>
          <div className="zone purple"><img alt="" src={logo7}/></div>
          <div className="zone purple"><img alt="" src={logo8}/></div>
          <div className="zone purple"><img alt="" src={logo9}/></div>
          <div className="zone purple"><img alt="" src={logo10}/></div>
          <div className="zone purple"><img alt="" src={logo11}/></div>
          <div className="zone purple"><div className="more">...</div></div>
        </div>
        <div className="arrow"><span>&#8674;</span></div>
        <div className="arrow2"><span>&#8675;</span></div>
        <Chart cData={cData}/>
      </div>
    )
}

export default DataSource;