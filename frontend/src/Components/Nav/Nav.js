// src/Components/Nav.js
import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="vertical-nav">
      <div className="nav-header">
        <h1 className="nav-title">AuditCloud</h1>
        <p className="nav-welcome">Welcome Back, Admin!</p>
      </div>
      
      <ul className="nav-menu">
        <li className="nav-item active">
          <span>Launch a new Audit</span>
        </li>
        <li className="nav-item">
          <span>Audits History</span>
        </li>
        <li className="nav-item">
          <span>Docs</span>
        </li>
        <li className="nav-item">
          <span>Settings</span>
        </li>
        <li className="nav-item">
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}