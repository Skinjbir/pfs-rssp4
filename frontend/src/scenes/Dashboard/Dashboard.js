// src/scenes/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';
import Nav from '../../Components/Nav/Nav';
import AuditCharts from '../../Components/AuditCharts/AuditCharts';
import Header from '../../Components/Header/Header';
import StatsGrid from '../../Components/StatsGrid/StatsGrid';

import RecentAudits from '../../Components/RecentAudits/RecentAudits';
import { stats, recentAudits, auditMetrics } from './data/mockData';

const Dashboard = () => (
  <div className="dashboard-container">
    <Nav />
    <main className="dashboard-content">
      <Header />
      <StatsGrid stats={stats} />
      <RecentAudits recentAudits={recentAudits} />
    </main>
  </div>
);

export default Dashboard;
