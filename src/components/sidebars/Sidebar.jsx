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
  const ToolItems = [

    {icon:'💬',label:'msg',id:'msg'},
    {icon:'📞',label:'call',id:'call'},

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
    <div className="logo">
      <span className="logo-text"> Health</span>
      <span className="logo-accent"> care.</span>
    </div>
    <nav className="nav-menu">
      {menuItems.map((item,index)=> (
        <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>

     <div className="sidebar-footer">
        <div className="nav-item">
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Setting</span>
        </div>
      </div>
   </div>
  );
};

export default Sidebar;