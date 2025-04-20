import React, { useEffect, useState } from 'react';
import { getAlertCounts } from '../services/api';

export default function AlertSummary() {
  const [counts, setCounts] = useState({ critical: 0, medium: 0, low: 0 });

  useEffect(() => {
    getAlertCounts().then(setCounts);
  }, []);

  return (
    <div>
      <h2>Alert Summary</h2>
      <ul>
        <li><strong>Critical:</strong> {counts.critical}</li>
        <li><strong>Medium:</strong> {counts.medium}</li>
        <li><strong>Low:</strong> {counts.low}</li>
      </ul>
    </div>
  );
}
