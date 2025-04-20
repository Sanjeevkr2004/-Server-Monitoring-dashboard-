import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getServerMetrics } from '../services/api';

export default function UsageCharts({ serverId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!serverId) return;

    getServerMetrics(serverId)
      .then(metrics => {
        console.log("📊 METRICS FROM API:", metrics);

        const now = new Date();
        const points = Array.from({ length: 5 }).map((_, i) => ({
          timestamp: new Date(now - (4 - i) * 60 * 1000).toLocaleTimeString(), // mock time series
          cpu: metrics.cpu_usage + Math.random() * 5 - 2.5,
          ram: metrics.ram_usage + Math.random() * 5 - 2.5,
          disk: metrics.disk_usage + Math.random() * 5 - 2.5,
          app: metrics.app_usage + Math.random() * 5 - 2.5,
        }));

        setData(points);
      })
      .catch(err => {
        console.error("❌ Error fetching metrics:", err);
      });
  }, [serverId]);

  if (!serverId) return null;

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Resource Usage</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cpu" name="CPU %" stroke="#8884d8" />
          <Line type="monotone" dataKey="ram" name="RAM %" stroke="#82ca9d" />
          <Line type="monotone" dataKey="disk" name="Disk %" stroke="#ffc658" />
          <Line type="monotone" dataKey="app" name="App %" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
