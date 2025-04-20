-- Create servers table
CREATE TABLE servers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    ip_address VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL
);

-- Create alerts table
CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    severity VARCHAR(50) NOT NULL,
    server_id INTEGER REFERENCES servers(id) ON DELETE CASCADE,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create metrics table
CREATE TABLE metrics (
    id SERIAL PRIMARY KEY,
    server_id INTEGER REFERENCES servers(id) ON DELETE CASCADE,
    cpu_usage FLOAT NOT NULL,
    ram_usage FLOAT NOT NULL,
    disk_usage FLOAT NOT NULL,
    app_usage FLOAT NOT NULL,
    network_traffic FLOAT NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
