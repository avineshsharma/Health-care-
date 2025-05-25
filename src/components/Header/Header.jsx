import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './TopBar.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input" 
          />
        </div>
      </div>
      <div className="header-right">
        <div className="notification-wrapper">
          <Bell size={20} className="notification-icon" />
          <span className="notification-badge">3</span>
        </div>
        <div className="user-avatar">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
            alt="User Avatar" 
          />
        </div>
        <div className="add-button">
          <Plus size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;