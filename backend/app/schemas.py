from pydantic import BaseModel
from datetime import datetime

class ServerBase(BaseModel):
    name: str
    ip_address: str
    status: str

class Server(ServerBase):
    id: int
    class Config:
        orm_mode = True

class Alert(BaseModel):
    id: int
    severity: str
    server_id: int
    timestamp: datetime
    class Config:
        orm_mode = True

class Metric(BaseModel):
    id: int
    server_id: int
    cpu_usage: float
    ram_usage: float
    disk_usage: float
    app_usage: float
    network_traffic: float
    timestamp: datetime
    class Config:
        orm_mode = True
