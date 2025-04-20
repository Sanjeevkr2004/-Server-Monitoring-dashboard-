const API_BASE = 'https://server-monitor-api.onrender.com';

export const getAlertCounts = () =>
  axios.get(`${API_BASE}/alerts/count`).then(res => res.data);

export const getServers = () =>
  axios.get(`${API_BASE}/servers/`).then(res => res.data);

export const getServerMetrics = (id) =>
  axios.get(`${API_BASE}/metrics/${id}`).then(res => res.data);
