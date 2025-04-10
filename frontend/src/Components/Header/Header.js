// src/scenes/Dashboard/components/Header.js
import React from 'react';

const Header = () => (
  <header className="dashboard-header">
    <h1>Dashboard Overview</h1>
    <div className="user-actions">
      <button className="btn-primary">New Audit</button>
      <button className="btn-secondary">Generate Report</button>
    </div>
  </header>
);

export default Header;
