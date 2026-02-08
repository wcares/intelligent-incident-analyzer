from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Intelligent Incident Report Analyzer API",
    description="AI-powered platform for processing and analyzing multimodal incident reports",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "0.1.0"}


@app.get("/api/incidents")
async def get_incidents():
    """Placeholder endpoint for listing incident reports."""
    return {
        "incidents": [],
        "total": 0,
        "message": "Incident API endpoint - implementation coming soon",
    }


@app.post("/api/incidents")
async def create_incident():
    """Placeholder endpoint for creating a new incident report."""
    return {"message": "Incident creation endpoint - implementation coming soon"}
