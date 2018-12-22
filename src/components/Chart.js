import React from 'react';
import {Polar} from 'react-chartjs-2';
import './Chart.css';

    const Chart = ({data}) => {    
        return(
            <div>
                {data===undefined
                    ?   <h2>Loading...</h2>
                    :   <Polar
                            data={data}
                            options={{
                                maintainAspectRatio: true,
                                legend: {
                                    position: 'bottom'
                                }
                            }}
                        />
                }

            </div>
        );
    }


export default Chart;
