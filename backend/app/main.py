# backend/app/main.py
import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.routers import alerts, servers, metrics
from app.config import settings  # Make sure to import the settings
FRONTEND_URL = settings.frontend_url  # Now FRONTEND_URL is accessible


# ——— Basic Logging Setup ———
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("server_monitor")

app = FastAPI()

# ——— Health‐Check Endpoint ———
@app.get("/", tags=["Health"])
async def health_check():
    """Simple health check endpoint."""
    logger.info("Health check requested")
    return {"status": "ok"}

# ——— CORS — Allow only your frontend & local dev ———
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.frontend_url,      # from .env, e.g. http://localhost:5173
        # "https://your-frontend.vercel.app"  # add this once deployed
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ——— Mount Routers ———
app.include_router(alerts.router, tags=["Alerts"])
app.include_router(servers.router, tags=["Servers"])
app.include_router(metrics.router, tags=["Metrics"])

# at the bottom of backend/app/main.py

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=settings.api_port,  # read from .env via config.py
        reload=True,
    )
    from app.config import API_PORT, FRONTEND_URL

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    # ...
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=API_PORT, reload=True)

