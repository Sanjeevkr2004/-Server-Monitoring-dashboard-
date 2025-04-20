from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class AlertCountResponse(BaseModel):
    critical: int
    medium: int
    low: int

@router.get("/alerts/count", response_model=AlertCountResponse)
def get_alert_counts():
    return {"critical": 2, "medium": 3, "low": 1}
