import React from 'react';
import './Dashboard.css';
import HealthMetrics from '../HealthMetrics/HealthMetrics';
import Calendar from '../calender/Calendar';
import ActivityChart from '../Activity/ActivityChart ';


import UpcomingSchedule from '../upcomingSchedule/UpcomingSchedule';


const Dashboard = () =>{
    return(
        <div className="dashboard">
            <div className="dashboard-content">
                <div className="left-column">
                      <HealthMetrics/>
                       <ActivityChart/>
                </div>

                <div className="right-column">
                    <Calendar/>
                    <UpcomingSchedule />

                </div>
            </div>
        </div>

    );
};


export default Dashboard;