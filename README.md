# Intelligent Incident Report Analyzer with AI

A secure, web-based platform that leverages AI, NLP, Computer Vision, and Machine Learning to automatically process, analyze, and manage multimodal incident reports (text, image, audio).

**MSCS 3999 - Capstone Project | Spring 2026 | Clark University**

## Team

| Member | Role |
|--------|------|
| Nishal Sukumar | AI/ML Lead Engineer |
| Surya Yadav | Full-Stack Developer (Backend Focus) |
| Lanchana Lokesh | Full-Stack Developer (Frontend Focus) |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 17+, TypeScript, SCSS, Angular Material |
| Backend | Python 3.11+, FastAPI, SQLAlchemy, Alembic |
| Database | PostgreSQL (with JSONB for semi-structured data) |
| AI/ML | Hugging Face Transformers, OpenCV, scikit-learn |
| DevOps | Docker, Docker Compose, GitHub Actions |
| Cloud | Google Cloud Platform (GCP) |
| Auth | JWT-based authentication |
| Testing | Pytest (backend), Jasmine/Karma (frontend) |

## Project Structure

```
├── frontend/          # Angular 17+ application
├── backend/           # FastAPI backend services
├── ai-modules/        # AI/ML components (NLP, CV, ML)
├── database/          # Database schemas and migrations
├── docker/            # Docker and Docker Compose configs
├── docs/              # Technical documentation
├── tests/             # Test suites
└── .github/workflows/ # CI/CD pipeline
```

## Getting Started

### Prerequisites

- Docker & Docker Compose (that's it - everything else runs in containers)

### Quick Start

```bash
git clone https://github.com/wcares/intelligent-incident-analyzer.git
cd intelligent-incident-analyzer
docker compose -f docker/docker-compose.yml up --build
```

This starts **all 3 services** automatically:
- **Frontend (Angular):** http://localhost:4200
- **Backend API (FastAPI):** http://localhost:8000
- **API Docs (Swagger):** http://localhost:8000/docs

No Python, Node.js, or PostgreSQL installation needed - Docker handles everything.

### Share with ngrok (optional)

To share the running app via a public URL:

1. Sign up at [ngrok.com](https://ngrok.com) (free) and copy your auth token
2. Create `docker/.env`:
   ```
   NGROK_AUTHTOKEN=your-token-here
   ```
3. Restart: `docker compose -f docker/docker-compose.yml up --build`
4. Get your public URL at http://localhost:4040

### Run without Docker (alternative)

Backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Frontend:
```bash
cd frontend
npm install
npx ng serve --port 4200
```

> Requires Python 3.11+, Node.js 18+, and PostgreSQL 15+ installed locally.

## Key Features (Planned)

- **Incident Report Submission** - Text, image, and audio file uploads
- **NLP Processing** - Automatic summarization and entity extraction
- **Computer Vision** - Image analysis and evidence detection
- **ML Severity Prediction** - Automated severity classification (Low/Medium/High/Critical)
- **Admin Dashboard** - Real-time analytics and workflow monitoring
- **RBAC** - Role-based access control for multi-tenant use

## Development Workflow

- **Branching:** Git Flow (`main` → `develop` → `feature/*`)
- **Commits:** Conventional commits (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`)
- **Reviews:** All changes require PR with at least one review
- **CI/CD:** GitHub Actions for automated testing and deployment

## License

This project is developed as part of the MSCS 3999 Capstone course at Clark University.
