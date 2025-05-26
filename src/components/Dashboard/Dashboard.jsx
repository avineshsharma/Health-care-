import React from 'react';
import './Dashboard.css';
import HealthMetrics from '../HealthMetrics/HealthMetrics';
import Calendar from '../calender/Calendar';
// import { Calendar } from 'lucide-react';


const Dashboard = () =>{
    return(
        <div className="dashboard">
            <div className="dashboard-content">
                <div className="left-column">
                      <HealthMetrics/>
                       
                </div>

                <div className="right-column">
                    <Calendar/>
                </div>
            </div>
        </div>

    );
};


export default Dashboard;