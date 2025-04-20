import React, { useEffect, useState } from 'react';
import { getServers } from '../services/api';

export default function ServerList({ onSelect }) {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    getServers()
      .then((data) => {
        console.log("✅ Fetched servers:", data);
        setServers(data);
      })
      .catch((error) => {
        console.error("❌ Error fetching servers:", error);
      });
  }, []);
  
  

  return (
    <div>
      <h3>Servers</h3>
      <ul>
        {servers.map((server) => (
          <li key={server.id}>
            <button onClick={() => onSelect(server.id)}>
              {server.name} ({server.status})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
