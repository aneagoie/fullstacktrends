import React from 'react';
import DataSource from './DataSource';

const Data = ({ chartData }) => {
    return (
        <section className="p-5 m-5 text-center">
            <h2 className="p-5">How we collect our data?</h2>
            <DataSource chartData={chartData}/>
        </section>
    )
}

export default Data;