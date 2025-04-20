import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export const getAlertCounts = () =>
  axios.get(`${API_BASE}/alerts/count`).then(res => res.data);

export const getServers = () =>
  axios.get(`${API_BASE}/servers/`).then(res => res.data);

export const getServerMetrics = (serverId) =>
  axios.get(`${API_BASE}/metrics/${serverId}`).then(res => res.data);
