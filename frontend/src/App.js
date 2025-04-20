import React, { useState } from 'react';
import AlertSummary from './components/AlertSummary';
import ServerList from './components/ServerList';
import UsageCharts from './components/UsageCharts';
import NetworkGraph from './components/NetworkGraph';

function App() {
  const [selectedServer, setSelectedServer] = useState(null);

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Server Monitoring Dashboard</h1>
      <AlertSummary />
      <ServerList onSelect={setSelectedServer} />
      {selectedServer && (
        <>
          <UsageCharts serverId={selectedServer} />
          <NetworkGraph serverId={selectedServer} />
        </>
      )}
    </div>
  );
}

export default App;
