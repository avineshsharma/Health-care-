import React from "react";

import './ActivityChart .css'

const ActivityChart = () =>{
    const chartData= [
          { day: 'Mon', value: 40 },
    { day: 'Tue', value: 85 },
    { day: 'Wed', value: 25 },
    { day: 'Thu', value: 60 },
    { day: 'Fri', value: 90 },
    { day: 'Sat', value: 75 },
    { day: 'Sun', value: 50 }


    ];
    return (
        <div className="activity-chart">
            <div className="chart-header">
                <h3>Activity</h3>
                <span className="appointments-count"> 3 appointment on this week</span>
            </div>
            <div className="chart-container">
                <div className="chart-bars">
                    {chartData.map((item,index) =>(
                        <div key={index} className="bar-container">
                            <div className="bar-wrapper">
                                <div className="bar"
                                style={{height: `${item.value}%`}}>
                                    <div className="bar-fill"></div>
                                </div>
                            </div>
                             <span className="bar-label">{item.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ActivityChart;