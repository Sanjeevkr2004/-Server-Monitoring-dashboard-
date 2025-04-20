import React, { useEffect, useState } from 'react';
import { getServers } from '../services/api';

export default function ServerList({ onSelect }) {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    getServers().then(setServers);
  }, []);

  return (
    <div>
      <h3>Servers</h3>
      <ul>
        {servers.map((srv) => (
          <li key={srv.id} style={{ margin: '4px 0' }}>
            <button onClick={() => onSelect(srv.id)}>
              {srv.name} ({srv.status})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
