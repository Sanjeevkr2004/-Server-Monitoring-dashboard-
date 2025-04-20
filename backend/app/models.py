from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.database import Base
from datetime import datetime

class Server(Base):
    __tablename__ = "servers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    ip_address = Column(String)
    status = Column(String)

    # Relationships
    alerts = relationship("Alert", back_populates="server")
    metrics = relationship("Metric", back_populates="server")

class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    severity = Column(String)  # critical, medium, low
    server_id = Column(Integer, ForeignKey("servers.id"), index=True)
    timestamp = Column(DateTime, default=datetime.utcnow)

    # Relationships
    server = relationship("Server", back_populates="alerts")

class Metric(Base):
    __tablename__ = "metrics"

    id = Column(Integer, primary_key=True, index=True)
    server_id = Column(Integer, ForeignKey("servers.id"), index=True)
    cpu_usage = Column(Float)
    ram_usage = Column(Float)
    disk_usage = Column(Float)
    app_usage = Column(Float)
    network_traffic = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)

    # Relationships
    server = relationship("Server", back_populates="metrics")
