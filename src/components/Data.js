import React from 'react';
import DataSource from './DataSource';

const Data = ({ cData }) => {
    return (
        <section className="p-5 m-5 text-center">
            <h2 className="p-5">How we collect our data?</h2>
            <DataSource cData={cData}/>
        </section>
    )
}

export default Data;