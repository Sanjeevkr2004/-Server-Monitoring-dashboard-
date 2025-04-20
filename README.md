# Server Monitoring Dashboard

A full-stack web-based dashboard for monitoring server alerts and resource usage.

## 🔧 Tech Stack
- Backend: FastAPI (Python)
- Frontend: React.js (Vite)
- Database: Mock data / PostgreSQL ready
- Hosting: Vercel (frontend), Render (backend)

## 🧪 Features
- View alert summary (critical/medium/low)
- Monitor CPU, RAM, Disk, App usage
- View network traffic chart
- See list of active/inactive servers
- Mock data used for development

## 🚀 Running Locally

### Backend
```bash
cd backend
uvicorn app.main:app --reload
