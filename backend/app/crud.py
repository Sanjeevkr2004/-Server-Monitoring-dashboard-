from sqlalchemy.orm import Session
from app.database import models
from datetime import datetime

# CRUD function to get all servers
def get_servers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Server).offset(skip).limit(limit).all()

# CRUD function to create a new server
def create_server(db: Session, name: str, ip_address: str, status: str):
    db_server = models.Server(name=name, ip_address=ip_address, status=status)
    db.add(db_server)
    db.commit()
    db.refresh(db_server)
    return db_server

# CRUD function to get alert counts
def get_alert_counts(db: Session):
    critical = db.query(models.Alert).filter(models.Alert.severity == "critical").count()
    medium = db.query(models.Alert).filter(models.Alert.severity == "medium").count()
    low = db.query(models.Alert).filter(models.Alert.severity == "low").count()
    return {"critical": critical, "medium": medium, "low": low}

# CRUD function to create a new alert
def create_alert(db: Session, severity: str, server_id: int):
    db_alert = models.Alert(severity=severity, server_id=server_id, timestamp=datetime.utcnow())
    db.add(db_alert)
    db.commit()
    db.refresh(db_alert)
    return db_alert

# CRUD function to get metrics for a server
def get_metrics_by_server(db: Session, server_id: int):
    return db.query(models.Metric).filter(models.Metric.server_id == server_id).all()

# CRUD function to create metrics for a server
def create_metric(db: Session, server_id: int, cpu_usage: float, ram_usage: float, disk_usage: float, app_usage: float, network_traffic: float):
    db_metric = models.Metric(
        server_id=server_id,
        cpu_usage=cpu_usage,
        ram_usage=ram_usage,
        disk_usage=disk_usage,
        app_usage=app_usage,
        network_traffic=network_traffic,
        timestamp=datetime.utcnow()
    )
    db.add(db_metric)
    db.commit()
    db.refresh(db_metric)
    return db_metric
