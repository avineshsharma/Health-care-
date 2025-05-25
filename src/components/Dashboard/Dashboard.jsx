import React from 'react';
import './Dashboard.css';
import { Calendar } from 'lucide-react';
import HealthMetrics from '../HealthMetrics/HealthMetrics';
const Dashboard = () =>{
    return(
        <div className="dashboard">
            <div className="dashboard-grid">
                <div className="left-column">
                      <HealthMetrics/>
                       
                </div>

                <div className="right-column">
                    
                </div>
            </div>
        </div>

    );
};


export default Dashboard;