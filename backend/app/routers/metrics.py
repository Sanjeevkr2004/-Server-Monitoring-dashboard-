from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from datetime import datetime

router = APIRouter()

class MetricResponse(BaseModel):
    cpu_usage: float
    ram_usage: float
    disk_usage: float
    app_usage: float
    network_traffic: List[float]
    timestamp: str

@router.get("/metrics/{server_id}", response_model=MetricResponse)
def get_metrics(server_id: int):
    return {
        "cpu_usage": 65,
        "ram_usage": 70,
        "disk_usage": 80,
        "app_usage": 40,
        "network_traffic": [100, 120, 150, 110],
        "timestamp": datetime.now().isoformat()
    }
