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

- Python 3.11+
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 15+

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/wcares/intelligent-incident-analyzer.git
   cd intelligent-incident-analyzer
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your local configuration
   ```

3. **Start with Docker Compose**
   ```bash
   docker compose -f docker/docker-compose.yml up --build
   ```

4. **Or run services individually:**

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
   ng serve --port 4200
   ```

5. **Access the application**
   - Frontend: http://localhost:4200
   - Backend API: http://localhost:8000
   - API Docs (Swagger): http://localhost:8000/docs

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
