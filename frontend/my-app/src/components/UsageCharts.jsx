import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { getServerMetrics } from '../services/api';

export default function UsageCharts({ serverId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!serverId) return;
    getServerMetrics(serverId).then((metrics) => {
      const now = Date.now();
      const points = Array.from({ length: 5 }).map((_, i) => ({
        time: new Date(now - (4 - i) * 60000).toLocaleTimeString(),
        cpu: metrics.cpu_usage + Math.random() * 5 - 2.5,
        ram: metrics.ram_usage + Math.random() * 5 - 2.5,
        disk: metrics.disk_usage + Math.random() * 5 - 2.5,
        app: metrics.app_usage + Math.random() * 5 - 2.5
      }));
      setData(points);
    });
  }, [serverId]);

  if (!serverId) return null;

  return (
    <div style={{ marginTop: 20, height: 300 }}>
      <h3>Resource Usage</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cpu" name="CPU %" />
          <Line type="monotone" dataKey="ram" name="RAM %" />
          <Line type="monotone" dataKey="disk" name="Disk %" />
          <Line type="monotone" dataKey="app" name="App %" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
