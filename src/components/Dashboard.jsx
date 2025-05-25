import React from 'react';
import './Dashboard.css';
import HealthMetrics from './healthstats/HealthStats';
// import Calendar from './Calendar';
// import ActivityChart from './ActivityChart';
// import UpcomingSchedule from './UpcomingSchedule';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="left-column">
          <HealthMetrics />
          {/* <ActivityChart /> */}
        </div>
        
        <div className="right-column">
          {/* <Calendar /> */}
          {/* <UpcomingSchedule /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;