import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getServerMetrics } from '../services/api';

export default function NetworkGraph({ serverId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!serverId) return;
    getServerMetrics(serverId).then(metrics => {
      // metrics.network_traffic is an array of numbers
      const now = new Date();
      const points = metrics.network_traffic.map((val, i) => ({
        time: new Date(now - (metrics.network_traffic.length - 1 - i) * 1000 * 60).toLocaleTimeString(),
        traffic: val
      }));
      setData(points);
    });
  }, [serverId]);

  if (!serverId) return null;

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Network Incoming Traffic</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="traffic" name="KB/s" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
