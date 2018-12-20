import React from 'react';
import {Polar} from 'react-chartjs-2';

    const Chart = ({data}) => {
        console.log({data});        
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
