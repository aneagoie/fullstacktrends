import React from 'react';
import Chart from './Chart'
import './DataSource.css';
const images = require.context('../images', true);

const sources = ["anglelist", "dice", "github", "hackernews", "hired", "indeed", "linkedin", "remoteco", "simplyhired", "stackoverflow", "stateofjs"]

const DataSource = ({ chartData }) => {
  return (
    <div className="wrapper-data">
      <div className="container-grid">
        {
          sources.map((c, i) => {
            return (
              <div key={i} className="zone purple tooltip1 text-center">
                <div class="top">
                  <h5>{c}</h5>
                  <i></i>
                </div>
                <img src={images(`./company/${c}.png`)} width="150px" height="150px" />
              </div>
            );
          })
        }
        <div className="zone purple tooltip1 text-center">
          <div class="top">
            <h5>Other</h5>
            <i></i>
          </div>
          <div className="more">...</div>
        </div>

      </div>
      <div className="arrow"><span>&#8674;</span></div>
      <div className="arrow2"><span>&#8675;</span></div>
      <Chart data={chartData} demo={true} />
    </div>
  );
}
// <div className="wrapper-data">
//         <div className="container-grid">
//           <div className="zone purple"><img alt="" src={logo1}/></div>
//           <div className="zone purple"><img alt="" src={logo2}/></div>
//           <div className="zone purple"><img alt="" src={logo3}/></div>
//           <div className="zone purple"><img alt="" src={logo4}/></div>
//           <div className="zone purple"><img alt="" src={logo5}/></div>
//           <div className="zone purple"><img alt="" src={logo6}/></div>
//           <div className="zone purple"><img alt="" src={logo7}/></div>
//           <div className="zone purple"><img alt="" src={logo8}/></div>
//           <div className="zone purple"><img alt="" src={logo9}/></div>
//           <div className="zone purple"><img alt="" src={logo10}/></div>
//           <div className="zone purple"><img alt="" src={logo11}/></div>
//           <div className="zone purple"><div className="more">...</div></div>
//         </div>
//         <div className="arrow"><span>&#8674;</span></div>
//         <div className="arrow2"><span>&#8675;</span></div>
//         <Chart data={chartData}/>
//       </div>
export default DataSource;