// import React from "react";
// import './sidebar.css'

// const Sidebar = () =>{
//   const menuItems = [
//      { icon: '📊', label: 'Dashboard', active: true },
//     { icon: '📋', label: 'History', active: false },
//     { icon: '📅', label: 'Calendar', active: false },
//     { icon: '🏥', label: 'Appointments', active: false },
//     { icon: '📈', label: 'Statistics', active: false },
//     { icon: '💬', label: 'Chat', active: false },
//     { icon: '🆘', label: 'Support', active: false },
//   ];

// return (
//     <div className="sidebar">
//       <div className="logo">
//         <span className="logo-text">Health</span>
//         <span className="logo-accent">care.</span>
//       </div>
      
//       <nav className="nav-menu">
//         {menuItems.map((item, index) => (
//           <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
//             <span className="nav-icon">{item.icon}</span>
//             <span className="nav-label">{item.label}</span>
//           </div>
//         ))}
//       </nav>
      
//       <div className="sidebar-footer">
//         <div className="nav-item">
//           <span className="nav-icon">⚙️</span>
//           <span className="nav-label">Setting</span>
//         </div>
//       </div>
//     </div>
//   );

  

  
// };

// export default Sidebar;



import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { icon: '📊', label: 'Dashboard', id: 'dashboard' },
    { icon: '📋', label: 'History', id: 'history' },
    { icon: '📅', label: 'Calendar', id: 'calendar' },
    { icon: '🏥', label: 'Appointments', id: 'appointments' },
    { icon: '📈', label: 'Statistics', id: 'statistics' },
    { icon: '💬', label: 'Chat', id: 'chat' },
    { icon: '🆘', label: 'Support', id: 'support' },
  ];

  const handleMenuClick = (itemLabel) => {
    setActiveItem(itemLabel);
    console.log(`Navigating to ${itemLabel}`);
  };

  const handleSettingsClick = () => {
    console.log('Opening settings');
  };

  return (
    <div className="sidebar">
      <button className="logo-button" onClick={() => handleMenuClick('Dashboard')}>
        <span className="logo-text">Health</span>
        <span className="logo-accent">care.</span>
      </button>
      
      <nav className="nav-menu" role="navigation" aria-label="Main navigation">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`nav-item ${activeItem === item.label ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.label)}
            aria-label={`Navigate to ${item.label}`}
            type="button"
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <button 
          className="nav-item settings-btn"
          onClick={handleSettingsClick}
          aria-label="Open settings"
          type="button"
        >
          <span className="nav-icon" aria-hidden="true">⚙️</span>
          <span className="nav-label">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;