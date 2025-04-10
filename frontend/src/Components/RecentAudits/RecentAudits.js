// src/scenes/Dashboard/components/RecentAudits.js
import React, { useState, useMemo } from 'react';

const RecentAudits = ({ recentAudits = [] }) => {
  const [statusFilter, setStatusFilter] = useState('All');

  const uniqueStatuses = useMemo(() => {
    const statuses = new Set(recentAudits.map(audit => audit.status));
    return ['All', ...Array.from(statuses)];
  }, [recentAudits]);

  const filteredAudits = useMemo(() => {
    if (statusFilter === 'All') return recentAudits;
    return recentAudits.filter(audit => audit.status === statusFilter);
  }, [statusFilter, recentAudits]);

  const renderStatusBadge = (status) => {
    const className = `status-badge ${status.toLowerCase().replace(/\s+/g, '-')}`;
    return <span className={className}>{status}</span>;
  };

  const renderActions = (audit) => (
    <div className="actions">
      <button className="btn-icon" aria-label={`View audit ${audit.name}`}>
        👁️
      </button>
      <button className="btn-icon" aria-label={`Edit audit ${audit.name}`}>
        ✏️
      </button>
    </div>
  );

  return (
    <section className="recent-audits">
      <div className="header-row">
        <h2>Recent Audits</h2>
        <div className="filter">
          <label htmlFor="statusFilter">Filter by status:</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {uniqueStatuses.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredAudits.length === 0 ? (
        <p className="no-audits">No audits found for selected status.</p>
      ) : (
        <div className="audit-table-wrapper">
          <table className="audit-table">
            <thead>
              <tr>
                <th>Audit Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAudits.map((audit) => (
                <tr key={audit.id}>
                  <td>{audit.name}</td>
                  <td>{audit.date}</td>
                  <td>{renderStatusBadge(audit.status)}</td>
                  <td>{renderActions(audit)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default RecentAudits;
