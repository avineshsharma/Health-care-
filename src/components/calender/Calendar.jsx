import React from "react";
import './calendarSection.css'


const Calendar = () =>{
    const currentWeek = [
        { day: 'Mon', date: 25, appointments: [{ time: '10:00' }, { time: '11:00' }, { time: '12:00' }] },
    { day: 'Tues', date: 26, appointments: [{ time: '08:00' }, { time: '09:00' }, { time: '10:00' }, { time: '13:00' }] },
    { day: 'Wed', date: 27, appointments: [{ time: '12:00' }, { time: '13:00' }, { time: '16:00' }, { time: '15:00' }] },
    { day: 'Thurs', date: 28, appointments: [{ time: '10:00' }, { time: '11:00' }, { time: '14:00' }, { time: '14:00' }] },
    { day: 'Fri', date: 29, appointments: [{ time: '14:00' }, { time: '14:00' }, { time: '16:00' }, { time: '15:00' }] },
    { day: 'Sat', date: 30, appointments: [{ time: '14:00', highlight: true }, { time: '09:00' }, { time: '10:00' }, { time: '11:00' }] },
    { day: 'Sun', date: 31, appointments: [] }
    ];

    return (
        <div className="calendar-widget"> 
        <div className="calendar-header">
            <div className="month-nav">
                <span className="nav-arrow">←</span>
                <div className="month-info">
                   <span className="week-label">This Week</span>
            <span className="month-year">October 2021</span>  
                </div>
                <span className="nav-arrow">→</span>
            </div>
        </div>

        <div className="calendar-grid">
            {currentWeek.map((day,index) => (
                <div key={index} className="calendar-day">
                <div className="day-header">
                    <span className="day-name">{day.day}</span>
                    <span className="day-date">{day.date}</span>
                </div>
                <div className="day-appointments">
                    {day.appointments.map((apt,aptIndex) => (
                        <div key={aptIndex}
                         className={`appointment-slot ${apt.highlight ? 'highlighted' : ''}`}
                        >
                            {apt.time}
                        </div>
                    ))}
                </div>
                </div>
            ))}
        </div>

        </div>
    )  ;
};


export default Calendar;