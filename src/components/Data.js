import React from 'react';
import DataSource from './DataSource';

const Data = ({ chartData }) => {
    return (
        <section id="data" className="my-5 text-center">
            <div className="trends">
                <h2 className="title">How we collect our data?</h2>
                <DataSource chartData={chartData} />
            </div>
        </section>
    )
}

export default Data;