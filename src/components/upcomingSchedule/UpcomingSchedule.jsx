import React from 'react';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
    const thursdayAppointments = [
        {
      type: 'Health checkup complete',
      time: '11:00 AM',
      status: 'completed',
      icon: '✅'
    },
    {
      type: 'Ophthalmologist',
      time: '14:00 PM',
      status: 'upcoming',
      icon: '👁️'
    }
  ];

   const saturdayAppointments = [
    {
      type: 'Cardiologist',
      time: '12:00 AM',
      status: 'priority',
      icon: '❤️'
    },
    {
      type: 'Neurologist',
      time: '16:00 PM',
      status: 'upcoming',
      icon: '🧠'
    }
  ];
    
   return (
   <div className="upcoming-schedule">
    <h3 className="schedule-title">The Upcoming Schedule</h3>


    <div className="schedule-day">
        <h4 className="day-title">On Thursday</h4>
        <div className="appointments-list">
            {thursdayAppointments.map((appointment,index) =>(
                <div  key={index} className={`appointment-item ${appointment.status}`}>
                    <div className="appointment-icon-wrapper">
                        <span className="appointment-icon">{appointment.icon}</span>
                    </div>
                    <div className="appointment-content">
                <div className="appointment-type">{appointment.type}</div>
                <div className="appointment-time">{appointment.time}</div>
              </div>
               {appointment.status === 'completed' && (
                <div className="appointment-action">✏️</div>
              )}
              {appointment.status === 'upcoming' && (
                <div className="appointment-action">👁️</div>
              )}
                </div>
            ))}
        </div>
    </div>

     <div className="schedule-day">
        <h4 className="day-title">On Saturday</h4>
        <div className="appointments-list">
          {saturdayAppointments.map((appointment, index) => (
            <div key={index} className={`appointment-item ${appointment.status}`}>
              <div className="appointment-icon-wrapper">
                <span className="appointment-icon">{appointment.icon}</span>
              </div>
              <div className="appointment-content">
                <div className="appointment-type">{appointment.type}</div>
                <div className="appointment-time">{appointment.time}</div>
              </div>
              {appointment.status === 'priority' && (
                <div className="appointment-action priority">❤️</div>
              )}
              {appointment.status === 'upcoming' && (
                <div className="appointment-action">👨‍⚕️</div>
              )}
            </div>
          ))}
        </div>
      </div>
   </div>
        
   );
};

export default UpcomingSchedule;


