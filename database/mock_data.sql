-- Insert mock data into servers
INSERT INTO servers (name, ip_address, status)
VALUES 
    ('Server A', '192.168.1.10', 'active'),
    ('Server B', '192.168.1.11', 'inactive');

-- Insert mock data into alerts
INSERT INTO alerts (severity, server_id, timestamp)
VALUES 
    ('critical', 1, '2025-04-19 12:00:00'),
    ('medium', 1, '2025-04-19 13:00:00'),
    ('low', 2, '2025-04-19 14:00:00');

-- Insert mock data into metrics
INSERT INTO metrics (server_id, cpu_usage, ram_usage, disk_usage, app_usage, network_traffic, timestamp)
VALUES 
    (1, 65, 70, 80, 40, 120, '2025-04-19 12:00:00'),
    (2, 50, 60, 75, 45, 100, '2025-04-19 13:00:00');
