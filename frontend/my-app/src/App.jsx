import React, { useState } from 'react';
import AlertSummary from './components/AlertSummary';
import ServerList from './components/ServerList';
import UsageCharts from './components/UsageCharts';
import NetworkGraph from './components/NetworkGraph';

export default function App() {
  const [selectedServer, setSelectedServer] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Server Monitoring Dashboard</h1>
      <AlertSummary />
      <hr />
      <ServerList onSelect={setSelectedServer} />
      <hr />
      {selectedServer && (
        <>
          <UsageCharts serverId={selectedServer} />
          <NetworkGraph serverId={selectedServer} />
        </>
      )}
    </div>
  );
}
