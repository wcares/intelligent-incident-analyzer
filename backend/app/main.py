from contextlib import asynccontextmanager

from fastapi import FastAPI, Header, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.database import Base, engine, get_db
from app.routes.auth import router as auth_router, get_current_user


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(
    title="Intelligent Incident Report Analyzer API",
    description="AI-powered platform for processing and analyzing multimodal incident reports",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)


@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "0.1.0"}


@app.get("/api/incidents")
async def get_incidents():
    return {
        "incidents": [],
        "total": 0,
        "message": "Incident API endpoint - implementation coming soon",
    }


@app.post("/api/incidents")
async def create_incident():
    return {"message": "Incident creation endpoint - implementation coming soon"}
