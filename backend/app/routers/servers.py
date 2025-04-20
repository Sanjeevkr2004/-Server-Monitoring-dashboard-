from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class ServerInfo(BaseModel):
    id: int
    name: str
    status: str
    ip_address: str

@router.get("/servers/", response_model=List[ServerInfo])
def get_servers():
    return [
        {"id": 1, "name": "Server A", "status": "active",   "ip_address": "192.168.1.10"},
        {"id": 2, "name": "Server B", "status": "inactive", "ip_address": "192.168.1.11"},
    ]
