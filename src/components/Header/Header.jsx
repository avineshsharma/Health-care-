import React from "react";

import './Header.css'

const Header =() =>{
  return (
<div className="header">
  <div className="header-left">
    <h1 className="page-title">Dashboard</h1>
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input type="text" placeholder="Search...." />
    </div>
  </div>


  <div className="header-right">
    <div className="notification-icon">🔔</div>
    <div className="user-avatar">
       <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-No-Background.png" alt="User" />
    </div>
    <button className="add-btn">+</button>
  </div>


</div>
  );
};

export default Header;